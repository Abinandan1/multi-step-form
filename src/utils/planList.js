import icon1 from "../../public/assets/images/icon-arcade.svg";
import icon2 from "../../public/assets/images/icon-advanced.svg";
import icon3 from "../../public/assets/images/icon-pro.svg";

export const icons = [icon1, icon2, icon3];

export const planList = [
  { name: "arcade", priceMonthly: 9, priceYearly: 90 },
  { name: "advanced", priceMonthly: 12, priceYearly: 120 },
  { name: "pro", priceMonthly: 15, priceYearly: 150 },
];

export const addonList = [
  {
    name: "online service",
    description: "Access to multiplayer games",
    addonPriceMonthly: 1,
    addonPriceYearly: 10,
  },
  {
    name: "larger storage",
    description: "Extra 1TB of cloud save",
    addonPriceMonthly: 2,
    addonPriceYearly: 20,
  },
  {
    name: "customizable profile",
    description: "Custom theme on your profile",
    addonPriceMonthly: 2,
    addonPriceYearly: 20,
  },
];
