import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CloseBtn, ModalWindow } from "./Modal.styled";
import { IoCloseSharp } from "react-icons/io5";
import { closeModal, selectModal } from "../../redux/modal/modalSlice";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModal);

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      dispatch(closeModal());
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  return isOpen ? (
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <CloseBtn onClick={() => dispatch(closeModal())}>
          <IoCloseSharp />
        </CloseBtn>
        {children}
      </ModalWindow>
    </Backdrop>
  ) : null;
};
