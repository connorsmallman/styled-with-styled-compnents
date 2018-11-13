import styled from 'styled-components';

const ListItem = styled.li`
    text-decoration: ${props => props.strikeThrough ? 'line-through' : 'none' };
`;

export default ListItem;