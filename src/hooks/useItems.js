import { useState } from "react";

export default function useItems() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("stock-items");

    if (!storedItems) {
      return [];
    }

    return JSON.parse(storedItems);
  });

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("none");
  const [description, setDescription] = useState("");

  return {
    items,
    setItems,
    name,
    setName,
    amount,
    setAmount,
    price,
    setPrice,
    category,
    setCategory,
    description,
    setDescription,
  };
}
