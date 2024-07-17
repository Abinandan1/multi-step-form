import styled from "styled-components";

export const Wrapper = styled.div`
  .step-number {
    border: 2px solid var(--white);
    background: transparent;
    color: var(--white);
    padding: 1rem;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    display: grid;
    place-content: center;
    font-family: ubuntuBold;
  }
  .active {
    background: var(--light-blue);
    border-color: var(--light-blue);
    color: var(--marine-blue);
  }
  .step-info {
    display: none;
  }
  @media (width > 768px) {
    display: flex;
    gap: 1rem;
    align-items: center;
    letter-spacing: 1px;
    .step-info {
      display: grid;
      gap: 0.25rem;
      color: var(--light-gray);
    }
    .step-n {
      font-size: 0.75rem;
    }
    .step-name {
      font-size: 0.875rem;
      color: var(--white);
      font-family: ubuntuBold;
    }
  }
`;
