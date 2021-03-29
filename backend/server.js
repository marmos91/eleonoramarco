const express = require('express');
const cors = require('cors')
const body_parser = require('body-parser');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
    }
});

var mail_options = {
    from: process.env.GMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    cc: (process.env.CC_ENABLED === true && process.env.GMAIL_EMAIL2) ? process.env.GMAIL_EMAIL2 : undefined,
    subject: '[Matrimonio] Nuova conferma ricevuta!'
};

const {Pool} = require('pg');

function confirm_to_text(confirm)
{
    let text = 'ci sarà/saranno!';

    if(!confirm)
        text = 'non ' + text + ' 😕';
    else
        text += ' 🙂';

    return text;
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/marmos91',
    ssl: process.env.DATABASE_URL ? true : false
})

const app = express();
const port = process.env.PORT || 4444;

app.use(cors());
app.use(body_parser.json());

app.get('/health', (_request, response) =>
{
    return response.sendStatus(200);
});

app.post('/confirm', async (request, response) =>
{
    const {name, email, confirm} = request.body;

    if(!name)
    {
        return response.status(400).json({
            message: 'Missing name',
        });
    }

    if(!email)
    {
        return response.status(400).json({
            message: 'Missing email',
        });
    }

    if(confirm === undefined)
    {
        return response.status(400).json({
            message: 'Missing confirm status',
        });
    }
    try
    {
        const client = await pool.connect();

        await client.query('INSERT INTO guests(name, email, confirm) VALUES($1, $2, $3) RETURNING id', [name, email, confirm]);

        mail_options.html = `<p>Ciao ragazzi! Ci sono notizie: <b><a href='mailto:${email}'>${name}</a> ${confirm_to_text(confirm)}</b>.<br><br>Buona giornata,<br><i>il vostro amichevole bot di quartiere 🤖!</i><br><br><i>PS: questa email è stata inviata in automatico, non rispondere...</i>`;

        const info = await transporter.sendMail(mail_options);

        console.log('New confirm registered');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Confirm:', confirm ? 'yes' : 'no');
        console.log('Email sent:', info.accepted.length > 0 ? 'yes' : 'no');

        client.end();
    }
    catch(error)
    {
        console.error('Error', error);

        return response.status(500).json({
            error
        });
    }
    finally
    {
        mail_options.html = '';
    }

    return response.sendStatus(201);
});

app.listen(port, () => console.log('Backend listening on port', port));
