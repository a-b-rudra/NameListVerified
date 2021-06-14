import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
const ErrorModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Ok</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
