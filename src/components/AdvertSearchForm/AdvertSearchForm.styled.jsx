import styled from "styled-components";

export const StyledSearchForm = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 18px;
  }
`;

export const SelectWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
  }
`;

export const SearchButton = styled.button`
  border-radius: 12px;
  padding: 14px 44px;
  background: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  border: none;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
