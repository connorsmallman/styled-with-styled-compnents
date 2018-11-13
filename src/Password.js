import styled from 'styled-components';

const Password = styled.input.attrs({
  // we can define static props
  type: "password",
  // or we can define dynamic ones
  margin: props => props.size || "1em",
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Password;