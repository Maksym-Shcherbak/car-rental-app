import { ButtonMore } from "./ButtonMore.styled";

export const LoadMoreButton = ({ onButtonClick }) => {
  return (
    <ButtonMore className="Button" type="button" onClick={onButtonClick}>
      Load more
    </ButtonMore>
  );
};
