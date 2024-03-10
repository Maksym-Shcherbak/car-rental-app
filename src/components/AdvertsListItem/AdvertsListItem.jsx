/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modal/modalSlice";
import {
  AdvertButton,
  AdvertInfo,
  AdvertPrice,
  AdvertTitle,
  CarImage,
  FavoriteButton,
  GridItem,
  ImageWrapper,
  TitleAndPriceWrapper,
} from "./AdvertsListItem.styled";
import {
  selectAdverts,
  selectFavoriteAdverts,
} from "../../redux/rental/cars/carsSelectors";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IconContext } from "react-icons";
import {
  addFavorite,
  removeFromFavorite,
} from "../../redux/rental/cars/carsSlice";
import { useEffect, useState } from "react";
import { AdvertTitleSpan } from "../AdvertModalContent/AdvertModalContent.styled";

export const AdvertListItem = ({ src, make, model, year, price, id }) => {
  const newPrice = `${price.slice(1)}${price.slice(0, 1)}`;
  const isModelShow = model.length <= 5 ? model : null;
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const adverts = useSelector(selectAdverts);
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  const onClickButtonLearn = (e) => {
    const id = e.target.closest("li").dataset.id;
    let advert = adverts.find((advert) => advert.id === Number(id));
    if (!advert) {
      advert = favoriteAdverts.find(
        (favoriteAdvert) => favoriteAdvert.id === Number(id)
      );
    }
    dispatch(openModal(advert));
  };

  const onClickFavoriteButton = (e) => {
    const selectedAdvert = e.target.closest("li");
    const id = Number(selectedAdvert.dataset.id);
    if (selectedAdvert.classList.contains("favorite")) {
      selectedAdvert.classList.remove("favorite");
      setFavorite(false);
      dispatch(removeFromFavorite(id));
      return;
    }
    const advert = adverts.find((advert) => advert.id === id);
    selectedAdvert.classList.add("favorite");
    setFavorite(true);
    dispatch(addFavorite(advert));
  };

  useEffect(() => {
    const isFavorite = favoriteAdverts.find((advert) => advert.id === id);
    if (isFavorite) {
      setFavorite(true);
    }
  }, [favoriteAdverts, id]);
  return (
    <GridItem data-id={id}>
      <ImageWrapper>
        <CarImage src={src} />
      </ImageWrapper>
      <AdvertInfo>
        <TitleAndPriceWrapper>
          <AdvertTitle>
            {make} <AdvertTitleSpan>{isModelShow}</AdvertTitleSpan>, {year}
          </AdvertTitle>
          <AdvertPrice>{newPrice}</AdvertPrice>
        </TitleAndPriceWrapper>
        <AdvertButton onClick={onClickButtonLearn}>Learn more</AdvertButton>
      </AdvertInfo>
      <FavoriteButton onClick={onClickFavoriteButton}>
        <IconContext.Provider
          value={{
            size: "18px",
            color: "",
          }}
        >
          {favorite ? (
            <MdFavorite
              style={{ fill: "#3470ff", strokeWidth: "1px", stroke: "#3470ff" }}
            />
          ) : (
            <MdFavoriteBorder style={{ fill: "rgba(255, 255, 255, 0.8)" }} />
          )}
        </IconContext.Provider>
      </FavoriteButton>
    </GridItem>
  );
};
