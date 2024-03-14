import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAdverts,
  getTotalAdverts,
} from "../../redux/rental/cars/carsOperations";
import {
  selectAdverts,
  selectFavoriteAdverts,
  selectIsLoadMore,
  selectIsLoading,
  selectLimit,
  selectTotalAdverts,
  selectVisibleContacts,
} from "../../redux/rental/cars/carsSelectors";
import { AdvertsList } from "../../components/AdvertsList/AdvertsList";
import { Modal } from "../../components/Modal/Modal";
import { selectModalModalContent } from "../../redux/modal/modalSlice";
import { resetAdverts, setIsLoadMore } from "../../redux/rental/cars/carsSlice";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import { AdvertModalContent } from "../../components/AdvertModalContent/AdvertModalContent";
import { setFavorite } from "../../helpers/setFavorite";
import { getMakes } from "../../redux/filters/filtersOperations";
import { selectMake } from "../../redux/filters/filtersSelectors";
import { AdvertSeacrh } from "../../components/AdvertSearch/AdvertSearch";
import { Section } from "../../components/Section/Section.styled";
import { Loader } from "../../components/Loader/Loader";
import { toastSuccess } from "../../helpers/notification";
import { Container } from "../../components/Container/Container.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = useSelector(selectLimit);
  const modalContent = useSelector(selectModalModalContent);
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const favoriteAdverts = useSelector(selectFavoriteAdverts);
  const totalAdverts = useSelector(selectTotalAdverts);
  const isLoadMore = useSelector(selectIsLoadMore);
  const make = useSelector(selectMake);
  const filteredAdverts = useSelector(selectVisibleContacts);

  useEffect(() => {
    setFavorite(favoriteAdverts);
  });

  useEffect(() => {
    setCurrentPage(1);
    dispatch(resetAdverts());
    dispatch(getTotalAdverts({ make }));
  }, [dispatch, make]);

  useEffect(() => {
    dispatch(getAllAdverts({ currentPage, limit, make }));
  }, [dispatch, currentPage, limit, make]);

  useEffect(() => {
    dispatch(getMakes());
  }, [dispatch]);

  useEffect(() => {
    if (adverts.length !== 0 && totalAdverts) {
      if (adverts.length < totalAdverts) {
        dispatch(setIsLoadMore(true));
        return;
      }
      toastSuccess(`You've reached the end`);
      dispatch(setIsLoadMore(false));
    }
  }, [dispatch, totalAdverts, adverts]);

  const onChangePage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <Section>
        <Container>
          <AdvertSeacrh />
          {isLoading && <Loader />}
          {filteredAdverts.length !== 0 && (
            <AdvertsList adverts={filteredAdverts} />
          )}
          <Modal>
            <AdvertModalContent data={modalContent} />
          </Modal>
          {isLoadMore && !isLoading && (
            <LoadMoreButton
              onButtonClick={onChangePage}
              isLoading={isLoading}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default CatalogPage;
