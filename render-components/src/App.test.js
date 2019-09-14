import React from 'react';
import ReactDOM from 'react-dom';
import ShowMessage from './ShowMessage';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('should show message if boolean is true', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShowMessage />, div);
    ShowMessage.showMessage = false;
    expect(showMessage).toBe(false);
  });
