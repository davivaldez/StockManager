import { useContext } from "react";
import ItemContext from "../contexts/ItemContext";
import useItemActions from "./useItemActions";

export default function useItemManagement() {
  const item = useContext(ItemContext);
  const { addItem, setCurrentItem, updateCurrentItem, removeItem } = useItemActions(item, item.items);

  return {
    item,
    addItem,
    setCurrentItem,
    updateCurrentItem,
    removeItem,
  };
}
