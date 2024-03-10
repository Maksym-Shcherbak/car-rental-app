import styled from "styled-components";
export const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: stretch;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const CustomLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
  text-align: left;
  margin-bottom: 8px;
`;
