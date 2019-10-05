import React from 'react';
// import Greeting from './components1/Greeting.js';
// import ShowName from './components1/ShowName';
// import ShowDate from './components1/ShowDate';
// import ShowMessage from './components1/ShowMessage';
// import Title from './components1/Title';
// import Text from './components1/Text';
// import List from './components1/List';
import './App.css';
// import ColourContainer from './components3/ColourContainer';
// import ListItem from './components1/ListItem';
// import Link from './components1/Link';
// import Loading from './components1/Loading';
// import Parent from './components1/Parent';
// import Counter from './components1/Counter';
// import String from './components1/String';
// import CounterTwo from './components1/CounterTwo';

// import Users from './components2/Users';
// import UsersContainer from './components2/UsersContainer';
// import Tasks from './components2/Tasks';
// import Data from './components2/Data';
// import Input from './components2/Input';
// import Select from './components2/Select';
// import Page from './components2/Page';
// import ListContainter from './components2/ListContainer';

// import SelectContainer from './components3/SelectContainer';
// import Form from './components3/Form';
// import ShoppingCart from './components3/ShoppingCart';
// import ReactContext from './components4/ReactContext';
// import ErrorHandler from './components4/ErrorHandler';
import HOC from './components4/HOC';
import Form from './components4/Form';
import styled, { css } from 'styled-components';
import colors from './components4/colors';
import ShowServerConfig from './components4/ShowServerConfig';
import PropTypes from 'prop-types';




const Button = styled.button `
  padding:10px;
  boder: 2px solid black;
  background-color: ${colors.primaryColour};
  color: ${props => props.language === 'es' ? 'purple' : 'yellow'};
  margin-top: 60px;


  ${props => props.success && css `
    background-color: green;
    color: white;
  `}

  ${props => props.warning && css `
  background-color: red;
  color: white;
`}
`
// const Greet = props =>
//   <div>jdjd {props.name}</div>

// Greet.PropTypes = {
//   name: PropTypes.string
// }


// const config = {
//   minConnections: true,
//   maxConnections: false,
//   restartAlways: true
// }

function App() {
  return (
    <div className="App">
      {/* Clase 14 Septiembre
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
      <CounterTwo /> */}

      {/* <UsersContainer /> */}
      {/* <Tasks /> */}
      {/* <Data />
      <Input />
      <Select />

      <Page /> */}
      {/* <ListContainter /> */}
      {/* <SelectContainer /> */}
      {/* <Form /> */}
      {/* <ColourContainer /> */}
      {/* <ShoppingCart /> */}
      {/* <ReactContext /> */}
      {/* <ErrorHandler /> */}
      {/* <HOC /> */}
      {/* <Form /> */}
      <Button>hkashdfhkdashk</Button>
      <Button language="es" success>Success</Button>
      <Button warning>Warning</Button>
      {/* <ShowServerConfig config/> */}
      {/* <Greet /> */}
    </div>
  );
}

export default App;
