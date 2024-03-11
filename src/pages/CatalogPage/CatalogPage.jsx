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
} from "../../redux/rental/cars/carsSelectors";
import { AdvertsList } from "../../components/AdvertsList/AdvertsList";
import { Modal } from "../../components/Modal/Modal";
import {
  selectModalIsOpen,
  selectModalModalContent,
} from "../../redux/modal/modalSlice";
import { resetAdverts, setIsLoadMore } from "../../redux/rental/cars/carsSlice";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import { AdvertModalContent } from "../../components/AdvertModalContent/AdvertModalContent";
import { setFavorite } from "../../helpers/setFavorite";
import { getMakes } from "../../redux/filters/filtersOperations";
import { selectMake } from "../../redux/filters/filtersSelectors";
import { AdvertSeacrh } from "../../components/AdvertSearch/AdvertSearch";
import { Section } from "../../components/Section/Section.styled";
import { Loader } from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = useSelector(selectLimit);
  const isOpen = useSelector(selectModalIsOpen);
  const modalContent = useSelector(selectModalModalContent);
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const favoriteAdverts = useSelector(selectFavoriteAdverts);
  const totalAdverts = useSelector(selectTotalAdverts);
  const isLoadMore = useSelector(selectIsLoadMore);
  const make = useSelector(selectMake);

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
      dispatch(setIsLoadMore(false));
    }
  }, [dispatch, totalAdverts, adverts]);

  const onChangePage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <Section>
        <AdvertSeacrh />
        {isLoading && <Loader />}
        {adverts.length !== 0 && <AdvertsList adverts={adverts} />}
        {isOpen && (
          <Modal>
            <AdvertModalContent data={modalContent} />
          </Modal>
        )}
        {isLoadMore && !isLoading && (
          <LoadMoreButton onButtonClick={onChangePage} isLoading={isLoading} />
        )}
      </Section>
    </>
  );
};

export default CatalogPage;
