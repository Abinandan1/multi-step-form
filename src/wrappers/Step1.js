import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  .form-row {
    display: grid;
    gap: 0.25rem;
  }
  .form-row-header {
    display: flex;
    justify-content: space-between;
  }
  .form-label {
    color: var(--marine-blue);
    font-family: ubuntuMedium;
  }
  .error-message {
    display: none;
    color: var(--strawberry-red);
    font-family: ubuntuBold;
    font-size: 0.75rem;
  }
  .show-error-message {
    display: inline;
  }
  .form-input {
    height: 2.5rem;
    border: 1px solid var(--light-gray);
    border-radius: 0.25rem;
    padding: 0 1rem;
    font-family: ubuntuMedium;
    font-size: 1rem;
    cursor: pointer;
  }
  .form-input:hover {
    border-color: var(--purplish-blue);
  }
  .error-form-input {
    border-color: var(--strawberry-red);
  }
  @media (width > 768px) {
    gap: 1.5rem;
  }
`;
