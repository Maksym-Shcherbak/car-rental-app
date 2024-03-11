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
  Features,
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
import {
  AdvertTitleSpan,
  ModalContentItem,
  ModalContentList,
  ModalListContent,
} from "../AdvertModalContent/AdvertModalContent.styled";
import { toastSuccess } from "../../helpers/notification";

export const AdvertListItem = ({
  src,
  make,
  model,
  year,
  price,
  rentalCompany,
  address,
  type,
  functionalities,
  id,
}) => {
  const newPrice = `${price.slice(1)}${price.slice(0, 1)}`;
  const isModelShow = model.length <= 5 ? model : null;
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const adverts = useSelector(selectAdverts);
  const favoriteAdverts = useSelector(selectFavoriteAdverts);
  const [_, city, country] = address.split(",");
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
      toastSuccess(`Remove from your favorite`);
      setFavorite(false);
      dispatch(removeFromFavorite(id));
      return;
    }
    const advert = adverts.find((advert) => advert.id === id);
    selectedAdvert.classList.add("favorite");
    toastSuccess(`Added to your favorite`);
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
        <CarImage src={src} alt={model} loading="lazy" />
      </ImageWrapper>
      <AdvertInfo>
        <TitleAndPriceWrapper>
          <AdvertTitle>
            {make} <AdvertTitleSpan>{isModelShow}</AdvertTitleSpan>, {year}
          </AdvertTitle>
          <AdvertPrice>{newPrice}</AdvertPrice>
        </TitleAndPriceWrapper>
        <Features>
          <ModalContentList>
            <ModalContentItem>
              <ModalListContent> {city}</ModalListContent>
            </ModalContentItem>
            <ModalContentItem>
              <ModalListContent> {country}</ModalListContent>
            </ModalContentItem>
            <ModalContentItem>
              <ModalListContent>{rentalCompany}</ModalListContent>
            </ModalContentItem>
          </ModalContentList>
          <ModalContentList>
            <ModalContentItem>
              <ModalListContent>{type}</ModalListContent>
            </ModalContentItem>
            <ModalContentItem>
              <ModalListContent> {make}</ModalListContent>
            </ModalContentItem>
            <ModalContentItem>
              <ModalListContent> {id}</ModalListContent>
            </ModalContentItem>
            <ModalContentItem>
              <ModalListContent>{functionalities[1]}</ModalListContent>
            </ModalContentItem>
          </ModalContentList>
        </Features>
        <AdvertButton onClick={onClickButtonLearn}>Learn more</AdvertButton>
      </AdvertInfo>
      <FavoriteButton onClick={onClickFavoriteButton}>
        <IconContext.Provider
          value={{
            size: "18px",
          }}
        >
          {favorite ? (
            <MdFavorite style={{ fill: "#3470ff", stroke: "#3470ff" }} />
          ) : (
            <MdFavoriteBorder style={{ fill: "rgba(255, 255, 255, 0.8)" }} />
          )}
        </IconContext.Provider>
      </FavoriteButton>
    </GridItem>
  );
};
