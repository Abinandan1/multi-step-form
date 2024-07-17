import { createContext, useContext, useReducer, useState } from "react";
import { Card } from "./components";
import { defaultState, reducer } from "./utils/reducer";
import { addonList, planList } from "./utils/planList";

const AppContext = createContext();
function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [errorMessages, setErrorMessages] = useState([]);
  // const [isFormValid, setIsFormValid] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const validateForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let data = Object.fromEntries(formData);
    let isFormValid = true;
    let errorMessages = [];
    // STEP 1
    if (activeStep === 1) {
      const { name, email, phone } = data;
      const emailRegex = /^[^\s]+@[^\s]+\.[^\s]+$/;
      if (!name) {
        errorMessages.push({ input: "name", msg: "This field is required" });
        isFormValid = false;
      }
      if (!email) {
        errorMessages.push({ input: "email", msg: "This field is required" });
        isFormValid = false;
      } else if (!emailRegex.test(email)) {
        errorMessages.push({
          input: "email",
          msg: "Please provide valid email",
        });
        isFormValid = false;
      }
      if (!phone) {
        errorMessages.push({ input: "phone", msg: "This field is required" });
        isFormValid = false;
      }
    }
    // STEP 2
    if (activeStep === 2) {
      const { planType, plan } = data;
      if (!plan) {
        errorMessages.push({ input: "plan", msg: "Please select a plan" });
        isFormValid = false;
      } else {
        data = {
          planType,
          plan: {
            name: plan,
            amount: planList.find(({ name }) => plan === name)[
              planType === "monthly" ? "priceMonthly" : "priceYearly"
            ],
          },
        };
      }
    }
    // STEP 3
    if (activeStep === 3) {
      const addOns = [];
      if (data["online service"]) {
        addOns.push({
          name: "online service",
          amount: addonList.find((addon) => addon.name === "online service")[
            state.planType === "monthly"
              ? "addonPriceMonthly"
              : "addonPriceYearly"
          ],
        });
      }
      if (data["larger storage"]) {
        addOns.push({
          name: "larger storage",
          amount: addonList.find((addon) => addon.name === "larger storage")[
            state.planType === "monthly"
              ? "addonPriceMonthly"
              : "addonPriceYearly"
          ],
        });
      }
      if (data["customizable profile"]) {
        addOns.push({
          name: "customizable profile",
          amount: addonList.find(
            (addon) => addon.name === "customizable profile"
          )[
            state.planType === "monthly"
              ? "addonPriceMonthly"
              : "addonPriceYearly"
          ],
        });
      }
      if (addOns.length > 0) {
        data = { addOns };
      }
    }
    // STEP 4
    if (isFormValid) {
      dispatch({ type: "UPDATE_FORM", payload: data });
      setActiveStep(activeStep + 1);
    }
    setErrorMessages(errorMessages);
  };
  return (
    <AppContext.Provider
      value={{
        activeStep,
        setActiveStep,
        validateForm,
        errorMessages,
        state,
        dispatch,
      }}
    >
      <main>
        <Card />
      </main>
    </AppContext.Provider>
  );
}
export const useAppContext = () => useContext(AppContext);
export default App;
