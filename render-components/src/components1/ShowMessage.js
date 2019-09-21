import React from 'react';
import HideMessage from './HideMessage';

const ShowMessage = () => {
    let showMessage = false;

    return showMessage 
    ? <p>Ahora puedes leer esto</p>
    : <HideMessage />
}

export default ShowMessage