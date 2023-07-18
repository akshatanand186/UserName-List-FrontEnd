import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
function App() {
  const [userDetails, setUserDetails] = useState([]);
  const onSubmitHandler = (userInput) => {
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
