import { useState } from "react";
import styles from "./UserAdditionForm.module.css";

const UserAdditionForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const inputTypeHandler = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "age") {
      setAge(e.target.value);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setName("");
    setAge("");
    props.onSubmit(name, age);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles["user-addition-form"]}>
      <div className={styles["input-div"]}>
        <label htmlFor="name">Username</label>
        <input onChange={inputTypeHandler} type="text" value={name} id="name" />
      </div>
      <div className={styles["input-div"]}>
        <label htmlFor="age">Age (Years)</label>
        <input onChange={inputTypeHandler} type="text" value={age} id="age" />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserAdditionForm;
