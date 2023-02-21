import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main``;

export const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0 1rem;
  color: var(--color-yellow);
`;

export const Gallery = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
`;

export const LinkDetalhes = styled(Link)`
    background-color: #F7DE54;
    border: 2px solid #F7DE54;
    border-radius: 4px;
    color: black;
    padding: 1rem .5rem;
    transition: all 400ms ease-in-out;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    
    &:hover {
        color: #F7DE54;
        background-color: transparent;
    }
`;