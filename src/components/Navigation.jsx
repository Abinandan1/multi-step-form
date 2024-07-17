import { Wrapper } from "../wrappers/Navigation";
import NavRow from "./NavRow";

const Navigation = () => {
  return (
    <Wrapper>
      <NavRow name="YOUR INFO" number={1} />
      <NavRow name="SELECT PLAN" number={2} />
      <NavRow name="ADD-ONS" number={3} />
      <NavRow name="SUMMARY" number={4} />
    </Wrapper>
  );
};
export default Navigation;
