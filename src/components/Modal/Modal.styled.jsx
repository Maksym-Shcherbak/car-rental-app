import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 15, 15, 0.6);
  display: block;
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f8f9ff;
  width: 335px;
  max-height: 90vh;
  padding: 40px 20px;
  border-radius: 20px;
  overflow: hidden;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  padding: 0;
  border: none;
  color: #f3f3f3;
  transition: transform 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &:hover,
  &:focus {
    transform: scale(1.25);
  }
`;
