import React from 'react';

export default (props) => <a href={props.href} target={props.openInNewTab ? '_blank' : ''} >{props.children}</a>