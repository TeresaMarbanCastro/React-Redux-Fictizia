import React from 'react';

export default props =>  
    <>
        <label>props.label</label>
        <input checked={props.value === 'female'}></input>
    </>