import { useContext } from "react";
import ItemPlaceholderContext from "../contexts/ItemPlaceholderContext";

export default function usePlaceholderManagement() {
  const itemPlaceholder = useContext(ItemPlaceholderContext);

  return {
    itemPlaceholder,
  };
}
