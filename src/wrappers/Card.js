import styled from "styled-components";

export const Wrapper = styled.section`
  form {
    background: var(--white);
    padding: 2rem 1.5rem;
    border-radius: 0.5rem;
    margin: 0 auto;
    margin-top: -72px;
    width: 90%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    display: ${(props) => props.activeStep === 5 && "flex"};
    gap: ${(props) => props.activeStep === 5 && "1rem"};
    flex-direction: ${(props) => props.activeStep === 5 && "column-reverse"};
    text-align: ${(props) => props.activeStep === 5 && "center"};
  }
  @media (width > 768px) {
    background: var(--white);
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 1rem;
    display: flex;
    form {
      background: transparent;
      padding: 2rem 4rem;
      padding-left: 5rem;
      border-radius: 0;
      margin-top: 0;
      width: 100%;
      box-shadow: none;
      position: relative;
      max-width: 600px;
      justify-content: ${(props) => props.activeStep === 5 && "center"};
    }
  }
`;
