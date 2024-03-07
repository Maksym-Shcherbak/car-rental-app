import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/rental/cars/carsSelectors";
import { AdvertListItem } from "../AdvertsListItem/AdvertsListItem";
import { Grid } from "./AdvertsList.styled";

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);
  console.log(adverts);
  return (
    <Grid>
      {adverts.map((advert) => {
        return (
          <AdvertListItem
            key={advert.id}
            src={advert.img}
            make={advert.make}
            year={advert.year}
            price={advert.rentalPrice}
          />
        );
      })}
    </Grid>
  );
};
