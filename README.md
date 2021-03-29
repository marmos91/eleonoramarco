# Welcome to my wedding website

This is a simple project to host a custom website to give information about my wedding 🎉.

You can see the final version [here](https://www.eleonoraemarco.it).

## The project

The project is a simple React app built with [Create React App](https://create-react-app.dev).
There's also a very simple HTTP server to save participations and send a confirm email to administrators.

## How to run

To run the project just install dependencies (`npm install`) and run

```bash
npm start
```

To run the backend locally move to the `backend` folder and run the same command.
Please note that in order to make the form work locally, you also have to run a Postgres instance on your machine. Postgres is used to save the participant information.

## How to deploy

The frontend part is hosted on github pages while the backend part is hosted on (Heroku)[heroku.com].
Both the frontend and the backend are deployed through a CI/CD pipeline both on github and heroku

### Notes

Please note that this is a very small side project I built in a couple of days. The code does not reflect the standard I usually apply to bigger projects.
Anyway, feel free to take inspiration from this website to craft your own wedding page. 🤓
