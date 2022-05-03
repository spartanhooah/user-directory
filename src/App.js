import { useState } from "react";
import UserForm from "./components/form/UserForm";
import UserList from "./components/list/UserList";

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
      {users.length > 0 && <UserList users={users} />}
    </>
  );
}

export default App;
