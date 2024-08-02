import { useNavigate } from "react-router-dom";
import useCategoryMap from "./useCategoryMap";

export default function useItemActions(item, items) {
  const { getCategory, getCategorySelectValue } = useCategoryMap();
  const navigate = useNavigate();

  const cleanInputs = () => {
    item.setName("");
    item.setAmount("");
    item.setPrice("");
    item.setCategory("none");
    item.setDescription("");
  };

  const checkPlaceholder = (itemPlaceholder) => {
    if (!item.name || !item.amount || !item.price || item.category === "none" || !item.description) {
      if (!item.name) {
        itemPlaceholder.setNamePlaceholder("Nome está em branco!");
      }

      if (!item.amount) {
        itemPlaceholder.setAmountPlaceholder("Quantidade está em branco!");
      }

      if (!item.price) {
        itemPlaceholder.setPricePlaceholder("Preço está em branco!");
      }

      if (!item.description) {
        itemPlaceholder.setDescriptionPlaceholder("Descrição está em branco!");
      }

      return true;
    }
  };

  const addItem = (ev, itemPlaceholder) => {
    ev.preventDefault();

    if (checkPlaceholder(itemPlaceholder)) {
      return;
    }

    const newItem = {
      id: Math.floor(Math.random() * 1000000),
      name: item.name,
      amount: item.amount,
      price: item.price,
      category: getCategory(item.category),
      description: item.description,
      createdAt: new Date().toDateString(),
    };

    cleanInputs();

    item.setItems((states) => {
      const state = [...states, newItem];
      localStorage.setItem("stock-items", JSON.stringify(state));
      return state;
    });

    alert("Item cadastrado com sucesso!");
  };

  const setCurrentItem = (id) => {
    const currentItem = items.find((i) => i.id === id);
    item.setName(currentItem.name);
    item.setAmount(currentItem.amount);
    item.setPrice(currentItem.price);
    item.setCategory(getCategorySelectValue(currentItem.category));
    item.setDescription(currentItem.description);
  };

  const updateCurrentItem = (ev, currentItem, itemPlaceholder) => {
    ev.preventDefault();

    if (checkPlaceholder(itemPlaceholder)) {
      return;
    }

    const updatedItem = {
      id: currentItem.id,
      name: item.name,
      amount: item.amount,
      price: item.price,
      category: getCategory(item.category),
      description: item.description,
      createdAt: currentItem.createdAt,
      updatedAt: new Date().toDateString(),
    };

    cleanInputs();

    const index = items.findIndex((i) => i.id === currentItem.id);

    item.setItems((states) => {
      let storedItems = [...states];
      storedItems[index] = updatedItem;
      localStorage.setItem("stock-items", JSON.stringify(storedItems));
      return storedItems;
    });
    alert("Item atualizado com sucesso!");
    navigate("/items");
  };

  const removeItem = (id) => {
    const currentItem = items.find((i) => i.id === id);

    if (confirm(`Tem certeza que deseja excluir o item ${currentItem.name}`)) {
      item.setItems((states) => {
        const storedItems = states.filter((i) => i.id !== id);
        localStorage.setItem("stock-items", JSON.stringify(storedItems));
        return storedItems;
      });

      alert("Item deletado com sucesso!");
      navigate("/items");
    } else {
      alert("Exclusão cancelada!");
    }
  };

  return {
    addItem,
    setCurrentItem,
    updateCurrentItem,
    removeItem,
  };
}
