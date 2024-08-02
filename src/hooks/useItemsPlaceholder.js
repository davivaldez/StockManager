import { useState } from "react";

export default function useItemsPlaceholder() {
  const [namePlaceholder, setNamePlaceholder] = useState("Insira um nome");
  const [amountPlaceholder, setAmountPlaceholder] = useState("Insira uma quantidade");
  const [pricePlaceholder, setPricePlaceholder] = useState("Insira um preço");
  const [descriptionPlaceholder, setDescriptionPlaceholder] = useState("Insira uma descrição");

  return {
    namePlaceholder,
    setNamePlaceholder,
    amountPlaceholder,
    setAmountPlaceholder,
    pricePlaceholder,
    setPricePlaceholder,
    descriptionPlaceholder,
    setDescriptionPlaceholder,
  };
}
