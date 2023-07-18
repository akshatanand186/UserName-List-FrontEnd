import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";
const defaultState = {
  username: null,
  age: null,
};
const AddUser = (props) => {
  const [userInput, setUserInput] = useState(defaultState);
  const [iserror, setError] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
    if (userInput.age <= 0) {
      setError({
        title: "Age is not valid",
        message: "Please enter age > 0",
      });
      return;
    }
    props.onSubmitHandler(userInput);
  };
  const onClickErrorButton = () => {
    setError(null);
  };
  const changeHandler = (type, value) => {
    setUserInput((prevVal) => ({ ...prevVal, [type]: value }));
  };
  return (
    <div>
      {iserror && (
        <ErrorModal
          onClickErrorButton={onClickErrorButton}
          title={iserror.title}
          message={iserror.message}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            onChange={(event) => changeHandler("username", event.target.value)}
            value={userInput.username}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={(event) => changeHandler("age", event.target.value)}
            value={userInput.age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
