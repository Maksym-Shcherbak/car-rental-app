import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CloseBtn, ModalContent, ModalWindow } from "./Modal.styled";
import { IoCloseSharp } from "react-icons/io5";
import { closeModal, selectModalIsOpen } from "../../redux/modal/modalSlice";
import { useEffect } from "react";

export const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalIsOpen);

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return isOpen ? (
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <ModalContent>
          <CloseBtn onClick={() => dispatch(closeModal())}>
            <IoCloseSharp size={"24px"} />
          </CloseBtn>
          {children}
        </ModalContent>
      </ModalWindow>
    </Backdrop>
  ) : null;
};
