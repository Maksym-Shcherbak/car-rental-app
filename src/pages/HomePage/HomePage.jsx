import { useEffect, useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { carsRentalAPI } from "../../carsRentalAPI/carsRentalAPI";
import { getAllCars } from "../../redux/rental/cars/carsActions";
import { getAllAdverts } from "../../redux/rental/cars/carsOperations";
import {
  selectAdverts,
  selectLimit,
  selectPage,
} from "../../redux/rental/cars/carsSelectors";
import { AdvertsList } from "../../components/AdvertsList/AdvertsList";

const HomePage = () => {
  //   const rentalAPI = new carsRentalAPI();
  //   const cars = useSelector(getAllCars);
  //   let rentalCars;
  const [count, setCount] = useState(0);
  //   const dispatch = useDispatch();
  //   const fetchAllCars = async () => {
  //     console.log(await rentalAPI.getAllCars());
  //     rentalCars = await rentalAPI.getAllCars();
  //   };
  //   fetchAllCars();
  //   useEffect(() => {
  //     dispatch(getAllCars(rentalCars));
  //   }, [dispatch, rentalCars]);
  //   console.log(cars);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  useEffect(() => {
    dispatch(getAllAdverts(currentPage, limit));
  }, [dispatch]);
  return <AdvertsList />;
};

export default HomePage;
