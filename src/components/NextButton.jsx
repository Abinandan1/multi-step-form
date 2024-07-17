import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/NextButton";

const NextButton = () => {
  const { activeStep, setActiveStep } = useAppContext();
  return (
    activeStep !== 5 && (
      <Wrapper activeStep={activeStep}>
        {activeStep !== 1 && activeStep !== 5 ? (
          <p
            onClick={() => {
              setActiveStep(activeStep - 1);
            }}
            className="back-btn"
          >
            Go Back
          </p>
        ) : (
          <button className="back-btn"></button>
        )}

        <button type="submit" className="btn">
          {activeStep === 4 ? "Confirm" : "Next Step"}
        </button>
      </Wrapper>
    )
  );
};
export default NextButton;
