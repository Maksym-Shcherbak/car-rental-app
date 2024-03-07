export const getAllCars = (rentalCars) => {
  console.log(rentalCars);
  return {
    type: "cars/getAllCars",
    payload: {
      rentalCars,
    },
  };
};
