/* eslint-disable react/prop-types */
import Select from "react-select";

const isMobile = window.innerWidth < 768;

const customStyles = {
  container: (provided) => ({
    ...provided,

    width: isMobile ? "100%" : "224px",

    // width: '199px', // Set the width of the container
  }),
  control: (provided) => ({
    ...provided,
    border: "none",
    background: "#f7f7fb",
    borderRadius: "14px", // Set the border color
    padding: "14px 18px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    margin: "0",
    padding: "0",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0",
    padding: "0",
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: "Manrope, sans-serif",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.25",
    backgroundColor: state.isSelected ? "#007bff" : "#fff", // Set the background color for selected and non-selected options
    color: state.isSelected ? "white" : "rgba(18, 20, 23, 0.2)", // Set the text color for selected and non-selected options
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0",
    width: "20px",
    height: "20px",
    fill: "#121417",
  }),

  clearIndicator: (provided) => ({
    ...provided,
    padding: "0",
    width: "20px",
    height: "20px",
  }),

  placeholder: (provided) => ({
    ...provided,
    fontFamily: "Manrope, sans-serif",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "1.11",
    color: "#121417",
    // margin: '0 auto',
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
    background: "#fff",
    borderRadius: "14px",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "272px", // Set the maximum height of the scrollable list
    overflowY: "auto", // Enable vertical scrolling
    borderRadius: "14px",
    "&::-webkit-scrollbar": {
      width: "8px", // Set the width of the scrollbar,
    },
    "&::-webkit-scrollbar-thumb": {
      width: "8px",
      backgroundColor: "rgba(18, 20, 23, 0.05)", // Set the color of the scrollbar thumb
      borderRadius: "14px", // Set the border radius of the scrollbar thumb
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
  }),
};

export const CustomSelect = ({
  options,
  onChange,
  placeholder,
  isClearable,
  id,
  value,
  name,
}) => {
  return (
    <Select
      defaultValue={value}
      options={options}
      onChange={onChange}
      styles={customStyles}
      placeholder={placeholder}
      isClearable={isClearable}
      inputId={id}
      name={name}
    />
  );
};
