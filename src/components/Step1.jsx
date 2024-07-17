import { useAppContext } from "../App";
import { Wrapper } from "../wrappers/Step1";

const Step1 = () => {
  const {
    errorMessages,
    state: { name, email, phone },
  } = useAppContext();
  const messages = {};
  errorMessages?.forEach((err) => {
    messages[err.input] = err.msg;
  });

  return (
    <Wrapper>
      <div className="form-row">
        <div className="form-row-header">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <span
            className={`error-message ${messages.name && "show-error-message"}`}
          >
            {messages.name}
          </span>
        </div>
        <input
          defaultValue={name}
          placeholder="e.g. Stephen King"
          type="text"
          name="name"
          id="name"
          className={`form-input ${messages.name && "error-form-input"}`}
        />
      </div>
      <div className="form-row">
        <div className="form-row-header">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <span
            className={`error-message ${
              messages.email && "show-error-message"
            }`}
          >
            {messages.email}
          </span>
        </div>
        <input
          defaultValue={email}
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          name="email"
          id="email"
          className={`form-input ${messages.email && "error-form-input"}`}
        />
      </div>
      <div className="form-row">
        <div className="form-row-header">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <span
            className={`error-message ${
              messages.phone && "show-error-message"
            }`}
          >
            {messages.phone}
          </span>
        </div>
        <input
          defaultValue={phone}
          placeholder="e.g. +1 234 567 890"
          type="number"
          name="phone"
          id="phone"
          className={`form-input ${messages.phone && "error-form-input"}`}
        />
      </div>
    </Wrapper>
  );
};
export default Step1;
