import { Wrapper } from "../wrappers/Step2";
import { useAppContext } from "../App";
import { icons, planList } from "../utils/planList";

const Step2 = () => {
  const { state, errorMessages, dispatch } = useAppContext();
  const messages = {};
  errorMessages?.forEach((err) => {
    messages[err.input] = err.msg;
  });
  return (
    <Wrapper>
      <span
        className={`error-message ${messages.plan && "show-error-message"}`}
      >
        {messages.plan}
      </span>
      <div className="form-row">
        {planList.map(({ name, priceMonthly, priceYearly }, index) => {
          return (
            <div key={name} className="plan-option">
              <input
                className="plan-option-input"
                type="radio"
                name="plan"
                id="plan"
                value={name}
                defaultChecked={state.plan.name === name}
              />
              <img src={icons[index]} alt="" />
              <div className="plan-info">
                <label htmlFor="plan" className="plan-name">
                  {name}
                </label>
                <p className="plan-price">
                  ${state.planType === "monthly" ? priceMonthly : priceYearly}/
                  {state.planType === "monthly" ? "mo" : "yr"}
                </p>
                <p className="plan-offer">
                  {state.planType === "yearly" && "2 months free"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* PLAN TYPE */}
      <div className="form-row">
        <div className="plan-type">
          <label
            htmlFor="planType"
            className={`${state.planTerm === "monthly" && "active-plan-type"}`}
          >
            Monthly
          </label>
          <div className="plan-type-slider">
            <input
              className="plan-type-input"
              type="radio"
              value="monthly"
              defaultChecked={state.planType === "monthly"}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FORM",
                  payload: { planType: e.currentTarget.checked && "monthly" },
                })
              }
              name="planType"
              id="planType"
            />
            <input
              className="plan-type-input"
              type="radio"
              value="yearly"
              defaultChecked={state.planType === "yearly"}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FORM",
                  payload: { planType: e.currentTarget.checked && "yearly" },
                })
              }
              name="planType"
              id="planType"
            />
            <span></span>
          </div>
          <label
            htmlFor="planType"
            className={`${state.planTerm === "yearly" && "active-plan-type"}`}
          >
            Yearly
          </label>
        </div>
      </div>
    </Wrapper>
  );
};
export default Step2;
