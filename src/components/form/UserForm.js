import { useState } from "react";
import Card from "../ui/card/Card";
import Button from "../ui/button/Button";
import ErrorModal from "../ui/error/ErrorModal";
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

  const handleOkay = () => {
    setNameIsValid(true);
    setAgeIsValid(true);
  }

  let errorMessage;
  if (!nameIsValid) {
    errorMessage="Please enter a valid name and age (non-empty values).";
  }

  if (!ageIsValid) {
    errorMessage="Please enter a valid age (> 0).";
  }
  
  return (
    <>
      {(!nameIsValid || !ageIsValid) && (<ErrorModal
        title="Invalid input"
        message={errorMessage}
        onOkay={handleOkay}
      />)}
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
    </>
  );
};

export default UserForm;
