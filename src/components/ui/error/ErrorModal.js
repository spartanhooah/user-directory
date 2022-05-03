import Button from "../button/Button";
import Card from "../card/Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
    <div className={classes.backdrop}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <p className={classes.content}>{props.message}</p>
        <footer className={classes.actions}>
          <Button onClick={props.onOkay}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
