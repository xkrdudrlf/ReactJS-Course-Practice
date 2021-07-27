import useInput from "../hooks/my-use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: isFirstNameValid,
    hasError: hasFirstNameError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    resetValue: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: enteredLastName,
    isValid: isLastNameValid,
    hasError: hasLastNameError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    resetValue: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: hasEmailError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetValue: resetEmail,
  } = useInput((value) => isNotEmpty(value) && isEmail(value));

  const formSubmitHandler = (e) => {
    e.preventDefault();

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;

  const firstNameInputClasses = hasFirstNameError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = hasLastNameError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = hasEmailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {hasFirstNameError && (
            <p className="error-text">Please input a valid first name</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {hasLastNameError && (
            <p className="error-text">Please input a valid last name</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {hasEmailError && (
          <p className="error-text">Please input a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
