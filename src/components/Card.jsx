import { FormHeader, NextButton, Step4, Step5 } from ".";
import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Card";
import Navigation from "./Navigation";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { headerContent } from "../utils/headerContent";

const Card = () => {
  const { activeStep, validateForm } = useAppContext();
  let Step;
  switch (activeStep) {
    case 1: {
      Step = Step1;
      break;
    }
    case 2: {
      Step = Step2;
      break;
    }
    case 3: {
      Step = Step3;
      break;
    }
    case 4: {
      Step = Step4;
      break;
    }
    case 5: {
      Step = Step5;
      break;
    }
  }
  return (
    <Wrapper activeStep={activeStep}>
      <Navigation />
      <form onSubmit={validateForm}>
        <FormHeader {...headerContent[activeStep - 1]} />
        <Step />
        <NextButton />
      </form>
    </Wrapper>
  );
};
export default Card;
