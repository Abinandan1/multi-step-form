import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  h2 {
    color: var(--marine-blue);
    font-family: ubuntuBold;
    font-size: 1.5rem;
  }
  p {
    color: var(--cool-gray);
    line-height: 1.5;
    max-width: ${(props) => props.activeStep === 5 && "300px"};
    margin: ${(props) => props.activeStep === 5 && "0 auto"};
  }

  @media (width > 768px) {
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
    }
    p {
      max-width: ${(props) => props.activeStep === 5 && "none"};
    }
  }
`;
