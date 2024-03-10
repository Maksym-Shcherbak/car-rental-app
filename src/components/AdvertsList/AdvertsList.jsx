/* eslint-disable react/prop-types */
import { AdvertListItem } from "../AdvertsListItem/AdvertsListItem";
import { Grid } from "./AdvertsList.styled";

export const AdvertsList = ({ adverts }) => {
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
            id={advert.id}
            model={advert.model}
          />
        );
      })}
    </Grid>
  );
};
