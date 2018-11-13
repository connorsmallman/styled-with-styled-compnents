import React, { Component } from 'react';

import Button from './Button';
import PrimaryButton from './PrimaryButton';
import MyComponent from './MyComponent';
import StyledMyComponent from './StyledMyComponent';
import ListItem from './ListItem';
import Password from './Password';
import Wrapper from './Wrapper';
import World from './World';
import GlobalStyle from './GlobalStyle';
class App extends Component {
  render() {
    return (
      <>
        <h1>Styled component</h1>
        <Button>Click me!</Button>
        <h1>Extended component</h1>
        <PrimaryButton>Click me!</PrimaryButton>
        <h1>Wrapped existing component</h1>
        <MyComponent>Hello</MyComponent>
        <StyledMyComponent>Hello style</StyledMyComponent>
        <h1>Passing Props</h1>
        <ul>
          <ListItem>Buy apples</ListItem>
          <ListItem strikeThrough >Buy orange juice</ListItem>
          <ListItem>Buy beer</ListItem>
        </ul>
        <h1>Additional props</h1>
        <label>Password</label>
        <Password />
        <h1>Referring to other components</h1>
        <Wrapper>
          <p>Hello <World>World!</World></p>
        </Wrapper>
        <h1>Global styles</h1>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
