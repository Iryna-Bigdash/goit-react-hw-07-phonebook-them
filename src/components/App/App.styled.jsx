import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${props => (props.theme.theme === 'dark' ? '#34184d' : 'white')};
  color: ${props => (props.theme.theme === 'dark' ? 'white' : 'black')};
  margin: 50px auto;
  padding: 40px;
  text-align: center;
  font-size: 25px;

`;

export const Title = styled.h1`
  color: ${props => (props.theme.theme === 'dark' ? 'white' : 'black')};
`;