import React from 'react';

export default props => 
    <>
        <label>{props.label}</label>
        <input type='color' name={props.name} onChange={props.onChange}></input>
    </>