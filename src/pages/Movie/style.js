import styled from "styled-components";

export const Container = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 50vw;
  margin: 2rem auto;

  svg {
    font-size: 1.5rem;
    color: var(--color-yellow);
  }

  div:first-of-type { 
    width: 30%;
    align-self: center;
  }
`;

export const Tagline = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

export const Info = styled.article`
  margin-bottom: 1.5rem;
`;

export const BudgetTitle = styled.h3`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: .5rem;
`;

export const BudgetValue = styled.p`
  display: flex;
  align-items: center;
  gap: .4rem;
  margin-top: .5rem;
`;
