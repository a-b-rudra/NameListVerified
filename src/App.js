import "./styles.css";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserLIst";
import { useState } from "react";

export default function App() {
  const [enteredList, setEnteredList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setEnteredList((prevList) => [
      ...prevList,
      { name: uName, age: uAge, id: Math.random().toString() }
    ]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList user={enteredList} />
    </div>
  );
}
