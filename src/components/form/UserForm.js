import { useState, useRef } from "react";
import Card from "../ui/card/Card";
import Button from "../ui/button/Button";
import ErrorModal from "../ui/error/ErrorModal";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim() === "" || enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }

    if (enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });

      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    });
    
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    setError();
  };

  const handleOkay = () => {
    setError();
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkay={handleOkay}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              ref={nameInputRef}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="username"
              type="number"
              ref={ageInputRef}
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
