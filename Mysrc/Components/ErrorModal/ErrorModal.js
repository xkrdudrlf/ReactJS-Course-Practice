import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const closeModalHandler = (e) => {
    if (
      e.target.id === "modal-background" ||
      e.target.id === "modal-close-button"
    ) {
      props.onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className={styles["modal-background"]}
      onClick={closeModalHandler}
    >
      <div className={styles["error-modal"]}>
        <header>Invalid Input</header>
        <main>{props.msg}</main>
        <footer>
          <button id="modal-close-button">Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
