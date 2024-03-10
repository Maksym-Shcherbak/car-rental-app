export const setFavorite = (array) => {
  if (array.length !== 0) {
    array.forEach((favoriteAdvert) => {
      const savedAdverts = document.querySelector(
        `[data-id="${favoriteAdvert.id}"]`
      );
      if (savedAdverts) {
        savedAdverts.classList.add("favorite");
      }
    });
  }
};
