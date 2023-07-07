import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
function App() {
  const [userDetails, setUserDetails] = useState([]);
  const onSubmitHandler = (userInput) => {
    console.log("hi from parent");
    setUserDetails((prev) => [...prev, userInput]);
  };
  return (
    <div>
      <AddUser onSubmitHandler={onSubmitHandler} />
      <UserList data={userDetails} />
    </div>
  );
}

export default App;
