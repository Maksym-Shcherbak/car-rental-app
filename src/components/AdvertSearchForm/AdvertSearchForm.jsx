import { useFormik } from "formik";
import { CustomSelect } from "../Select/Select";
import { CustomLabel } from "../AdvertSearch/AdvertSearch.styled";
import { useDispatch, useSelector } from "react-redux";
import { SearchButton, StyledSearchForm } from "./AdvertSearchForm.styled";
import { setMaxRentalPrice } from "../../redux/filters/filtersSlice";
import { getAllAdverts } from "../../redux/rental/cars/carsOperations";
import { selectMake } from "../../redux/filters/filtersSelectors";
import { resetAdverts } from "../../redux/rental/cars/carsSlice";

export const AdvertSeacrhForm = () => {
  const dispatch = useDispatch();
  const make = useSelector(selectMake);
  let priceOptions = [];
  const makeOptions = () => {
    for (let i = 30; i <= 300; i += 10) {
      const option = {
        value: `${i}`,
        label: `${i}`,
      };
      priceOptions.push(option);
    }
  };
  makeOptions();

  const formik = useFormik({
    initialValues: {
      maxRentalPrice: "",
    },
    onSubmit: (values) => {
      dispatch(setMaxRentalPrice(values.maxRentalPrice));
      dispatch(resetAdverts());
      dispatch(getAllAdverts({ make }));
    },
  });

  const onChange = (value) => {
    if (!value) {
      return;
    }
    const { value: selectValue } = value;
    formik.setFieldValue("maxRentalPrice", selectValue);
  };
  return (
    <StyledSearchForm onSubmit={formik.handleSubmit}>
      <div>
        <CustomLabel htmlFor="maxRentalPrice">Price/ 1 hour</CustomLabel>
        <CustomSelect
          id={"maxRentalPrice"}
          name={"maxRentalPrice"}
          options={priceOptions}
          onChange={onChange}
          placeholder={"To $"}
          isClearable={true}
          value={formik.values.maxRentalPrice}
        />
      </div>
      <SearchButton type="submit">Search</SearchButton>
    </StyledSearchForm>
  );
};
