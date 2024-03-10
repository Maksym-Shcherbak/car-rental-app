import { useDispatch, useSelector } from "react-redux";
import { CustomSelect } from "../Select/Select";
import { CustomLabel, SearchContainer } from "./AdvertSearch.styled";
import { selectMake, selectMakes } from "../../redux/filters/filtersSelectors";
import { setMake } from "../../redux/filters/filtersSlice";

export const AdvertSeacrh = () => {
  const dispatch = useDispatch();
  const makes = useSelector(selectMakes);
  const make = useSelector(selectMake);
  const defaultValue = {
    value: make,
    label: make,
  };
  const handleChangeMake = (e) => {
    if (e) {
      dispatch(setMake(e.value));
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
        <CustomLabel htmlFor="makes">Car brand</CustomLabel>
        <CustomSelect
          id={"makes"}
          options={makesOptions}
          onChange={handleChangeMake}
          placeholder={"Enter the text"}
          isClearable={true}
          value={defaultValue}
        />
      </div>
    </SearchContainer>
  );
};
