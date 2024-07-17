import styled from "styled-components";

export const Wrapper = styled.div`
  .form-row:nth-child(1) {
    padding: 1rem 0.75rem;
    border-radius: 0.5rem;
    background: var(--alabaster);
    margin-bottom: 1rem;
  }
  .form-row:nth-child(2) {
    padding: 1rem 0.75rem;
  }
  .plan {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .plan div {
    display: grid;
    gap: 0.5rem;
    justify-items: left;
  }
  .plan-name {
    color: var(--marine-blue);
    font-family: ubuntuBold;
    text-transform: capitalize;
  }
  .plan-price {
    color: var(--marine-blue);
    font-family: ubuntuBold;
  }
  .change-btn {
    background: transparent;
    border: none;
    color: var(--cool-gray);
    text-decoration: underline;
    font-family: ubuntuMedium;
    cursor: pointer;
  }
  .change-btn:hover {
    color: var(--purplish-blue);
  }
  hr {
    background: var(--cool-gray);
    height: 1px;
    opacity: 0.3;
    border: none;
    margin-bottom: 1rem;
  }
  .addons {
    display: grid;
    gap: 1rem;
  }
  .addon {
    display: flex;
    justify-content: space-between;
  }
  .addon-name {
    color: var(--cool-gray);
    text-transform: capitalize;
  }
  .addon-price {
    color: var(--marine-blue);
    font-family: ubuntuMedium;
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total-name {
    color: var(--cool-gray);
  }
  .total-price {
    color: var(--purplish-blue);
    font-family: ubuntuBold;
  }
`;
