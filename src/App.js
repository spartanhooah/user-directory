import { useState } from "react";
import UserForm from "./form/UserForm";
import UserList from "./list/UserList";
import ErrorModal from "./ui/error/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const addUserHandler = (user) => {
    setUsers((previousState) => {
      return [user, ...previousState];
    });
  };

  const handleNameOkay = () => {
    setIsNameValid(true);
  };

  const handleAgeOkay = () => {
    setIsAgeValid(true);
  };

  if (!isNameValid) {
    return <ErrorModal error="name" onOkay={handleNameOkay} />;
  }

  if (!isAgeValid) {
    return <ErrorModal error="age" onOkay={handleAgeOkay} />;
  }

  return (
    <>
      <UserForm
        onAddUser={addUserHandler}
        setIsNameValid={setIsNameValid}
        setIsAgeValid={setIsAgeValid}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
