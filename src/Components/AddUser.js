import { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
const defaultState = {
  username: null,
  age: null,
};
const AddUser = (props) => {
  const [userInput, setUserInput] = useState(defaultState);
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitHandler(userInput);
  };
  const changeHandler = (type, value) => {
    setUserInput((prevVal) => ({ ...prevVal, [type]: value }));
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={(event) => changeHandler("username", event.target.value)}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={(event) => changeHandler("age", event.target.value)}
        ></input>
        <button type="submit"> Add User </button>
      </form>
    </Card>
  );
};

export default AddUser;
