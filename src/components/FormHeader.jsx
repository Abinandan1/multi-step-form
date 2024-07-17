import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/FormHeader";

const FormHeader = ({ heading, paragraph }) => {
  const { activeStep } = useAppContext();
  return (
    <Wrapper activeStep={activeStep}>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </Wrapper>
  );
};
export default FormHeader;
