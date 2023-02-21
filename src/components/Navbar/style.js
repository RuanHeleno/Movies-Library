import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
`;

export const LinkNavbar = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
export const Form = styled.form`
    display: flex;
    gap: .5rem;
`

export const Input = styled.input`
    padding: .2rem .8rem;
    border-radius: 4px;
    border: none;
`

export const Button = styled.button`
    background-color: #F7DE54;
    border: 2px solid #F7DE54;
    border-radius: 4px;
    color: black;
    padding: .3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 400ms ease-in-out;
    
    &:hover {
        color: #F7DE54;
        background-color: transparent;
    }
`;