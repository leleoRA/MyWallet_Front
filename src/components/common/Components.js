import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Input = styled.input`
  padding: 16px;
  border: 1px solid ${props => props.invalid ? '#DC3545' : '#CCC'};
  background-color: ${props => props.invalid ? '#DC354533' : '#FFF'};
  border-radius: 5px;
  margin-bottom: 15px;
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 58px;
  font-size: 20px;

  ::placeholder{
      font-size: 20px;
      color: #000;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.backgroundColor ||'#A328D6'};
  border-radius: 5px;
  color: #FFF;
  border: none;
  opacity: ${props => props.disabled ? '0.7' : '1'};
  cursor: ${props => props.disabled ? 'inherit': 'pointer'};
  font-size: 20px;
  font-weight: bold;
  height: 43px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', sans-serif;
`;

export const StyledLink = styled(Link)`
  text-align: center;
  display: block;
  margin: 20px 0 0;
  color: #FFF;
  font-size: 15px;
  text-decoration: none;
`;

export const Error = styled.div`
  margin: 10px 0;
  color: #DC3545;
  background-color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;