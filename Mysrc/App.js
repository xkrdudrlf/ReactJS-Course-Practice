import React, { useState } from "react";

import styles from "./App.module.css";

import UserAdditionForm from "./Components/UserAdditionForm/UserAddtionForm";
import UserList from "./Components/UserList/UserList";
import ErrorModal from "./Components/ErrorModal/ErrorModal";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [displayError, setDisplayError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const modalCloseHandler = () => {
    setDisplayError(false);
  };

  const userAdditionHandler = (name, age) => {
    if (isInvalid(name, age)) return;

    const newUser = { id: Math.random(), name, age };
    setUserInfo((prevUserInfo) => {
      return [...prevUserInfo, newUser];
    });
  };

  const isInvalid = (name, age) => {
    if (name === "" || age === "") {
      setDisplayError(true);
      setErrorMsg("No user info given");
      return true;
    }
    if (age < 1 || isNaN(age)) {
      setDisplayError(true);
      setErrorMsg("Age should be a number bigger than 0");
      return true;
    }
    return false;
  };

  return (
    <div className={styles.root}>
      {displayError && (
        <ErrorModal onClose={modalCloseHandler} msg={errorMsg} />
      )}
      <UserAdditionForm onSubmit={userAdditionHandler} />
      <UserList userInfo={userInfo} />
    </div>
  );
}

export default App;
