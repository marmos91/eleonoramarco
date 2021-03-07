import React from "react";

export const Divider = ({title}) =>
{
    return (<div className='columns divider'>
        <div className='column is-12 container'>
            <h1 className='title'>{title}</h1>
        </div>
    </div>);
}
