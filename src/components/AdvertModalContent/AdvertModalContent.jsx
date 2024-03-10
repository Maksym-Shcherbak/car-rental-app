/* eslint-disable react/prop-types */
import {
  AccsAndFunc,
  AccsAndFuncTitle,
  AdvertDescription,
  AdvertTitle,
  AdvertTitleSpan,
  CarImage,
  Conditions,
  ConditionsItem,
  ConditionsItemSpan,
  ConditionsList,
  ConditionsTitle,
  GeneralInfo,
  ImageWrapper,
  ModalButton,
  ModalContentItem,
  ModalContentList,
  ModalListContent,
} from "./AdvertModalContent.styled";
import { NumericFormat } from "react-number-format";

export const AdvertModalContent = ({ data }) => {
  const conditions = data.rentalConditions.split("\n");
  const newConditions = conditions.map((condition) => {
    if (condition.includes(":")) {
      const newCondition = condition.slice(0, -2);
      const age = condition.slice(-2);
      return (
        <>
          {newCondition}
          <ConditionsItemSpan>{age}</ConditionsItemSpan>
        </>
      );
    }
    return condition;
  });
  const [_, city, country] = data.address.split(",");
  const mileage = data.mileage / 1000;

  return (
    <>
      <ImageWrapper>
        <CarImage src={data.img} />
      </ImageWrapper>
      <GeneralInfo>
        <AdvertTitle>
          {data.make} <AdvertTitleSpan>{data.model}</AdvertTitleSpan>,{" "}
          {data.year}
        </AdvertTitle>
        <ModalContentList>
          <ModalContentItem>
            <ModalListContent>{city}</ModalListContent>
          </ModalContentItem>
          <ModalContentItem>
            <ModalListContent>{country}</ModalListContent>
          </ModalContentItem>
          <ModalContentItem>
            <ModalListContent>Id: {data.id}</ModalListContent>
          </ModalContentItem>
          <ModalContentItem>
            <ModalListContent>Year: {data.year}</ModalListContent>
          </ModalContentItem>
          <ModalContentItem>
            <ModalListContent>Type: {data.type}</ModalListContent>
          </ModalContentItem>
          <ModalContentItem>
            <ModalListContent>
              Fuel Consumption: {data.fuelConsumption}
            </ModalListContent>
          </ModalContentItem>
          <ModalContentItem>
            <ModalListContent>Engine Size: {data.engineSize}</ModalListContent>
          </ModalContentItem>
        </ModalContentList>
        <AdvertDescription>{data.description}</AdvertDescription>
      </GeneralInfo>
      <AccsAndFunc>
        <AccsAndFuncTitle>Accessories and functionalities:</AccsAndFuncTitle>
        <ModalContentList>
          {data.accessories.map((accessory) => {
            return (
              <ModalContentItem key={accessory}>
                <ModalListContent>{accessory}</ModalListContent>
              </ModalContentItem>
            );
          })}
        </ModalContentList>
        <ModalContentList>
          {data.functionalities.map((functionality) => {
            return (
              <ModalContentItem key={functionality}>
                <ModalListContent>{functionality}</ModalListContent>
              </ModalContentItem>
            );
          })}
        </ModalContentList>
      </AccsAndFunc>
      <Conditions>
        <ConditionsTitle>Rental Conditions: </ConditionsTitle>
        <ConditionsList>
          {conditions
            ? newConditions.map((condition) => {
                return (
                  <ConditionsItem key={condition}>{condition}</ConditionsItem>
                );
              })
            : null}
          <ConditionsItem>
            Mileage:{" "}
            <ConditionsItemSpan>
              <NumericFormat
                value={mileage}
                decimalSeparator=","
                displayType="text"
              />
            </ConditionsItemSpan>
          </ConditionsItem>
          <ConditionsItem>
            Price: <ConditionsItemSpan>{data.rentalPrice}</ConditionsItemSpan>
          </ConditionsItem>
        </ConditionsList>
      </Conditions>
      <ModalButton href="tel:+380730000000">Rental car</ModalButton>
    </>
  );
};
