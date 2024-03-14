import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CloseBtn, ModalContent, ModalWindow } from "./Modal.styled";
import { IoCloseSharp } from "react-icons/io5";
import { closeModal, selectModalIsOpen } from "../../redux/modal/modalSlice";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalIsOpen);

  const modalVariants = {
    hidden: { opacity: 0, y: "100vh" },
    visible: {
      opacity: 1,
      y: "50vh",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, []);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <Backdrop onClick={handleBackdropClick}>
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ModalWindow isOpen={isOpen}>
              <ModalContent>
                <CloseBtn onClick={() => dispatch(closeModal())}>
                  <IoCloseSharp size={"24px"} />
                </CloseBtn>
                {children}
              </ModalContent>
            </ModalWindow>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>,
    document.getElementById("root")
  );
};
