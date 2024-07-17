import styled from "styled-components";
import bgImgMobile from "../../public/assets/images/bg-sidebar-mobile.svg";
import bgImgDesktop from "../../public/assets/images/bg-sidebar-desktop.svg";
export const Wrapper = styled.nav`
  background: url(${bgImgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 172px;
  padding-top: 2rem;
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
    background: url(${bgImgDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex-direction: column;
    gap: 2rem;
    justify-content: start;
    height: 568px;
    /* width: 100%; */
    width: 300px;
    padding: 2rem;
    border-radius: 0.5rem;
    .nav-row {
      display: flex;
      gap: 1rem;
      align-items: center;
      letter-spacing: 1px;
    }
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
