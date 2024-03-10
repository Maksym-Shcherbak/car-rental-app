import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/rental/cars/carsSlice";
import { CustomSelect } from "../Select/Select";
import { SearchContainer } from "./AdvertSearch.styled";
import { selectMakes } from "../../redux/filters/filtersSelectors";
import { setMake } from "../../redux/filters/filtersSlice";

export const AdvertSeacrh = () => {
  const dispatch = useDispatch();
  const makes = useSelector(selectMakes);
  const handleChangeMake = (e) => {
    if (e) {
      dispatch(setMake(e.value));
      dispatch(setPage(1));
      return;
    }
    dispatch(setMake(null));
  };

  const makesOptions = makes?.map((make) => {
    const option = {
      value: `${make}`,
      label: `${make}`,
    };
    return option;
  });

  return (
    <SearchContainer>
      <div>
        <label htmlFor="makes">Car brand</label>
        <CustomSelect
          id={"makes"}
          options={makesOptions}
          onChange={handleChangeMake}
          placeholder={"Enter the text"}
          isClearable={true}
        />
      </div>
    </SearchContainer>
  );
};
