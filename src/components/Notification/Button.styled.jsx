import styled from 'styled-components';

export const Btn = styled.button`
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 20px;
  margin-right: 20px;
  border-radius: 4px;
  border: solid gold 1px;
  color: blue;
  &:hover {
    border: solid blue 4px;
    background-color: gold;
    transition: color 200ms linear, text-shadow 250ms linear;
    text-shadow: 0 0 21px gold, 0 0 10px green, 0 0 2px #2a153c;
    transition: 250ms;
  }
`;
