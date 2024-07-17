import styled from "styled-components";

export const Wrapper = styled.div`
  .form-row {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .addon {
    border: 2px solid var(--light-gray);
    border-radius: 0.5rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
  }
  .addon:hover {
    border-color: var(--purplish-blue);
  }
  input {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: var(--purplish-blue);
    cursor: pointer;
  }
  .addon:has(input:checked) {
    border-color: var(--purplish-blue);
    background: var(--alabaster);
  }
  .addon-info {
    display: grid;
    gap: 0.25rem;
    cursor: pointer;
  }
  .addon-name {
    color: var(--marine-blue);
    font-family: ubuntuBold;
    text-transform: capitalize;
    cursor: pointer;
  }
  .addon-description {
    color: var(--cool-gray);
  }
  .addon-price {
    color: var(--purplish-blue);
  }
  @media (width > 768px) {
    .form-row {
      gap: 1rem;
    }
  }
`;
