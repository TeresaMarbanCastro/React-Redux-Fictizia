import React from 'react';

export default (props) => <div>{props.show ? props.children : 'Loading'}</div> 