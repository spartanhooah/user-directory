import Button from "../button/Button";
import Card from "../card/Card";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onOkay} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <p className={classes.content}>{props.message}</p>
      <footer className={classes.actions}>
        <Button onClick={props.onOkay}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onOkay={props.onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onOkay={props.onOkay}
          />,
          document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
