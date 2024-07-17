import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/NavRow";

const NavRow = ({ number, name }) => {
  const { activeStep } = useAppContext();
  return (
    <Wrapper>
      <p
        className={`step-number ${
          (activeStep === number || (activeStep === 5 && number === 4)) &&
          "active"
        }`}
      >
        {number}
      </p>
      <div className="step-info">
        <p className="step-n">STEP {number}</p>
        <p className="step-name">{name}</p>
      </div>
    </Wrapper>
  );
};
export default NavRow;
