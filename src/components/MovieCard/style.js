import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const Card = styled.div`
  width: 31%;
  color: white;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #111;
  padding: 1rem;
  border-radius: 10px;
`;

export const Image = styled.img`
    max-width: 100%;
    margin-bottom: 1rem;
`

export const Title = styled.h2`
    margin-bottom: 1rem;
`;

export const Infos = styled.p`
    margin-bottom: 1rem;
`
export const Star = styled(FaStar)`
    color: yellow;
`;