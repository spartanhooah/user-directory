import { useState } from "react";
import UserForm from "./components/form/UserForm";
import UserList from "./components/list/UserList";
import ErrorModal from "./components/ui/error/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const addUserHandler = (user) => {
    setUsers((previousState) => {
      return [user, ...previousState];
    });
  };

  const handleValidationOkay = () => {
    setIsNameValid(true);
    setIsAgeValid(true);
  };

  let errorMessage;
  if (!isNameValid) {
    errorMessage="Please enter a valid name and age (non-empty values).";
  }

  if (!isAgeValid) {
    errorMessage="Please enter a valid age (> 0).";
  }

  return (
    <>
      {(!isNameValid || !isAgeValid) && <ErrorModal title="Invalid input" message={errorMessage} onOkay={handleValidationOkay} />}
      <UserForm
        onAddUser={addUserHandler}
        setIsNameValid={setIsNameValid}
        setIsAgeValid={setIsAgeValid}
      />
      {users.length > 0 && <UserList users={users} />}
    </>
  );
}

export default App;
