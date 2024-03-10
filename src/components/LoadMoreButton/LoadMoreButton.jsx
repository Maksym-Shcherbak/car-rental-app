import { ButtonMore } from "./LoadMoreButton.styled";

export const LoadMoreButton = ({ onButtonClick, isLoading }) => {
  return (
    <ButtonMore
      className="Button"
      type="button"
      onClick={onButtonClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading" : "Load more"}
    </ButtonMore>
  );
};
