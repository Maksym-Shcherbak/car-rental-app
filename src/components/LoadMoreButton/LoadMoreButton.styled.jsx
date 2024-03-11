import styled from "styled-components";
export const ButtonMore = styled.button`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #3470ff;
  background-color: transparent;
  border: none;
  display: block;
  margin: 0 auto;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
