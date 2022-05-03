import { useState } from "react";
import Card from "../ui/card/Card";
import Button from "../ui/button/Button";
import classes from "./UserForm.module.css";

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

    if (enteredName.trim() === "") {
      setNameIsValid(false);

      return;
    }

    if (enteredAge < 1) {
      setAgeIsValid(false);

      return;
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
    props.setIsNameValid(false);

    return;
  }

  if (!ageIsValid) {
    props.setIsAgeValid(false);

    return;
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="username"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;