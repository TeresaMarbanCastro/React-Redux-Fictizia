import React from 'react';
import Greeting from './Greeting.js';
import ShowName from './ShowName';
import ShowDate from './ShowDate';
import ShowMessage from './ShowMessage';
import Title from './Title';
import Text from './Text';
import List from './List';
import './App.css';
import ListItem from './ListItem';
import Link from './Link';
import Loading from './Loading';
import Parent from './Parent';
import Counter from './Counter';
import String from './String';
import CounterTwo from './CounterTwo';

function App() {
  return (
    <div className="App">
      <Greeting />
      <ShowName />
      <ShowDate />
      <ShowMessage />
      <Loading show={true}>
        <Title title="Necesito partir en componentes todo esto" />
        <Text>
          Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. 
          Para ello tengo que:
        </Text>
        <List>
          <ListItem>Observar el HTML</ListItem>
          <ListItem>Pensar en como puedo extraer cada trozo en componentes</ListItem>
          <ListItem>Usarlos en React</ListItem>
        </List>
        <Link href="https://reactjs.org/" openInNewTab>React Docs</Link>
      </Loading>
      <Parent />
      <Counter />
      <String />
      <CounterTwo />
    </div>
  );
}

export default App;
