import React from "react";
import Modal from "react-modal";
import styles from "./style";

const MyModal = ({
  backgroundColor,
  close,
  showCloseBtn,
  overflow,
  ...props
}) => {
  return (
    <>
      <Modal
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={close}
        {...props}
        style={{
          ...styles.modal.style,
          content: {
            overflow: "scroll",
          },
        }}
      >
        {showCloseBtn && (
          <div {...styles.container}>
            <span onClick={close} {...styles.white}>
              <i className="fa fa-close" style={{ color: "black" }}></i>
            </span>
          </div>
        )}
        {props.children}
      </Modal>
    </>
  );
};
export default MyModal;
