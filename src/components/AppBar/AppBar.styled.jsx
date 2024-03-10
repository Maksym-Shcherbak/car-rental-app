import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid black;
  position: sticky;
  overflow: hidden;
  top: 0;
  width: 100%;
  z-index: 5;
  background: #fff;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 1184px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
`;
