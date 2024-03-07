const carsInitialState = {
  rentalCars: [],
};

export const carsReducer = (state = carsInitialState, action) => {
  switch (action.type) {
    case "cars/getAllCars":
      return [...state, action.payload];
    default:
      return state;
  }
};
