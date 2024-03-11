import { useSelector } from "react-redux";
import { AdvertModalContent } from "../../components/AdvertModalContent/AdvertModalContent";
import { AdvertsList } from "../../components/AdvertsList/AdvertsList";
import { Modal } from "../../components/Modal/Modal";
import {
  selectModalIsOpen,
  selectModalModalContent,
} from "../../redux/modal/modalSlice";
import { selectFavoriteAdverts } from "../../redux/rental/cars/carsSelectors";
import { useEffect } from "react";
import { setFavorite } from "../../helpers/setFavorite";
import { Section } from "../../components/Section/Section.styled";
import { Container } from "../../components/Container/Container.styled";

const FavoritePage = () => {
  const isOpen = useSelector(selectModalIsOpen);
  const modalContent = useSelector(selectModalModalContent);
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  useEffect(() => {
    setFavorite(favoriteAdverts);
  });

  return (
    <>
      <Section>
        <Container>
          <AdvertsList adverts={favoriteAdverts} />
          {isOpen && (
            <Modal>
              <AdvertModalContent data={modalContent} />
            </Modal>
          )}
        </Container>
      </Section>
    </>
  );
};

export default FavoritePage;
