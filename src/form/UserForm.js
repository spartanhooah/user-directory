import { useState } from "react";
import "../ui/card/Card.css";
import Card from "../ui/card/Card";
import "./UserForm.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [ageIsValid, setAgeIsValid] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName === "") {
      setNameIsValid(false);
      return;
    }

    if (enteredAge < 0) {
      setAgeIsValid(false);
    }

    props.onAddUser({
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    });

    setEnteredName("");
    setEnteredAge("");
    setNameIsValid(true);
    setAgeIsValid(true);
  };

  if (!nameIsValid) {
    return (
      <div>
        Please enter a valid name and age (non-empty values).
      </div>
    )
  }

  return (
    <Card className="card">
      <form onSubmit={submitHandler}>
        <div className="user-form">
          <label>Username</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="user-form">
          <label>Age (Years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
