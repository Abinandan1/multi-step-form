import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: var(--white);

  .back-btn {
    background: transparent;
    color: var(--cool-gray);
    border: none;
    font-family: ubuntuMedium;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .back-btn:hover {
    color: var(--marine-blue);
  }
  .btn {
    padding: 0.75rem 1rem;
    background: ${(props) =>
      props.activeStep === 4 ? "var(--purplish-blue)" : "var(--marine-blue)"};
    color: var(--magnolia);
    border: none;
    border-radius: 0.25rem;
    font-family: ubuntuMedium;
    cursor: pointer;
  }
  .btn:hover {
    background: ${(props) =>
      props.activeStep === 4 ? "var(--pastel-blue)" : "var(--marine-blue)"};
  }

  @media (width > 768px) {
    background: transparent;
    padding: 2rem 4rem;
    padding-left: 5rem;
  }
`;
