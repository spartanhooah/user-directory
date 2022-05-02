import { useState } from "react";
import UserForm from "./form/UserForm";
import UserList from "./list/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((previousState) => {
      return [user, ...previousState];
    });
  };

  return (
    <>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={users}/>
    </>
  );
}

export default App;
