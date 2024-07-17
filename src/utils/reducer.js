export const defaultState = {
  name: "",
  email: "",
  phone: "",
  planType: "monthly",
  plan: { name: "", amount: "" },
  addOns: [],
  totalAmount: 0,
};

export const reducer = (state, action) => {
  if (action.type === "UPDATE_FORM") {
    return { ...state, ...action.payload };
  }
};
