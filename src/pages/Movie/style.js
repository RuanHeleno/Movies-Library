import styled from "styled-components";

export const Container = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;

  svg {
    font-size: 1.5rem;
    color: var(--color-yellow);
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
  justify-content: center;
  gap: .4rem;
`;
