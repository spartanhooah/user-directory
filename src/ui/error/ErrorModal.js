import Button from "../button/Button";

const ErrorModal = (props) => {
  const invalidNameMessage =
    "Please enter a valid name and age (non-empty values).";
  const invalidAgeMessage = "Please enter a valid age (> 0).";

  return (
    <>
      <div>Invalid input</div>
      <div>
        {props.error === "name" ? invalidNameMessage : invalidAgeMessage}
      </div>
      <Button onClick={props.onOkay} text="Okay"/>
    </>
  );
};

export default ErrorModal;
