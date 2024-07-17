import { useAppContext } from "../App";
import { addonList } from "../utils/planList";
import { Wrapper } from "../wrappers/Step3";

const Step3 = () => {
  const { state } = useAppContext();
  return (
    <Wrapper>
      <div className="form-row">
        {addonList.map(
          ({ name, description, addonPriceMonthly, addonPriceYearly }) => {
            return (
              <div
                key={name}
                className="addon"
                onClick={(e) =>
                  (document.querySelector(`input[name="${name}"]`).checked =
                    !document.querySelector(`input[name="${name}"]`).checked)
                }
              >
                <input
                  type="checkbox"
                  defaultChecked={state?.addOns.find(
                    (addon) => addon.name === name
                  )}
                  name={name}
                  id={name}
                />
                <div className="addon-info">
                  <label htmlFor={name} className="addon-name">
                    {name}
                  </label>
                  <p className="addon-description">{description}</p>
                </div>
                <p className="addon-price">
                  +$
                  {state.planType === "monthly"
                    ? addonPriceMonthly
                    : addonPriceYearly}
                  /{state.planType === "monthly" ? "mo" : "yr"}
                </p>
              </div>
            );
          }
        )}
      </div>
    </Wrapper>
  );
};
export default Step3;
