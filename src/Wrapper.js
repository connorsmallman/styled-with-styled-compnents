import styled from 'styled-components';

import World from './World';

const Wrapper = styled.div`
    color: pink;

    ${World} {
        color: blue;
    }
`;

export default Wrapper;
