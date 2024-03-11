import { createSelector } from "@reduxjs/toolkit";
import { selectMaxRentalPrice } from "../../filters/filtersSelectors";

export const selectAdverts = (state) => state.adverts.adverts;
export const selectVisibleContacts = createSelector(
  [selectAdverts, selectMaxRentalPrice],
  (adverts, maxRentalPrice) => {
    if (maxRentalPrice !== "") {
      return adverts.filter(
        (advert) =>
          Number(advert.rentalPrice.slice(1)) <= Number(maxRentalPrice)
      );
    }
    return adverts;
  }
);
export const selectFavoriteAdverts = (state) => state.adverts.favoriteAdverts;
export const selectIsLoading = (state) => state.adverts.isLoading;
export const selectIsLoadMore = (state) => state.adverts.isLoadMore;
export const selectTotalAdverts = (state) => state.adverts.totalAdverts;
export const selectPage = (state) => state.adverts.page;
export const selectLimit = (state) => state.adverts.limit;
