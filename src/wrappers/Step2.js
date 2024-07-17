import styled from "styled-components";

export const Wrapper = styled.div`
  .form-row {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1rem;
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
  .plan-option {
    border: 2px solid var(--light-gray);
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    position: relative;
  }
  .plan-option:has(.plan-option-input:checked) {
    border-color: var(--purplish-blue);
    background: var(--alabaster);
  }
  .plan-option-input {
    appearance: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .plan-option:hover {
    border-color: var(--purplish-blue);
  }
  .plan-info {
    display: grid;
    gap: 0.25rem;
  }
  .plan-name {
    color: var(--marine-blue);
    font-family: ubuntuBold;
    text-transform: capitalize;
  }
  .plan-price {
    color: var(--cool-gray);
  }
  .plan-type {
    background: var(--alabaster);
    display: flex;
    padding: 1rem;
    justify-content: center;
    gap: 2rem;
  }
  label {
    color: var(--cool-gray);
    font-family: ubuntuMedium;
  }
  .active-plan-type {
    color: var(--marine-blue);
  }
  .plan-type-slider {
    background: var(--marine-blue);
    padding: 0.25rem;
    width: 3rem;
    height: 1.5rem;
    border-radius: 1rem;
    display: flex;
    gap: 0.5rem;
    position: relative;
  }
  .plan-type-input {
    cursor: pointer;
    opacity: 0;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--magnolia);
  }
  .plan-type span {
    width: 1rem;
    height: 1rem;
    background: var(--magnolia);
    border-radius: 50%;
    position: absolute;
    left: 0.25rem;
    transition: left 0.3s ease;
  }
  .plan-type-input:checked:nth-child(1) ~ span {
    left: 0.25rem;
  }
  .plan-type-input:checked:nth-child(2) ~ span {
    left: 1.75rem;
  }
  .plan-offer {
    color: var(--marine-blue);
    font-family: ubuntuMedium;
  }
  @media (width > 768px) {
    .form-row:nth-child(2) {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    .plan-option {
      flex-direction: column;
      align-items: start;
      gap: 4rem;
      width: 150px;
    }
  }
`;
