import { Wrapper } from "../wrappers/Step4";
import { useAppContext } from "../App";
const Step4 = () => {
  const { state, setActiveStep } = useAppContext();
  let totalAmount = state.plan.amount;
  return (
    <Wrapper>
      <div className="form-row">
        <div className="plan">
          <div>
            <p className="plan-name">
              {state.plan.name}({state.planType})
            </p>
            <button className="change-btn" onClick={() => setActiveStep(2)}>
              Change
            </button>
          </div>
          <p className="plan-price">
            ${state.plan.amount}/{state.planType === "monthly" ? "mo" : "yr"}
          </p>
        </div>
        <hr />
        <div className="addons">
          {state.addOns.map((addon) => {
            totalAmount += addon.amount;
            return (
              <div key={addon.name} className="addon">
                <p className="addon-name">{addon.name}</p>
                <p className="addon-price">
                  +${addon.amount}/{state.planType === "monthly" ? "mo" : "yr"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="form-row">
        <div className="total">
          <p className="total-name">
            Total ({state.planType === "monthly" ? "per month" : "per year"})
          </p>
          <p className="total-price">
            ${totalAmount}/{state.planType === "monthly" ? "mo" : "yr"}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Step4;
