import { RouterProvider } from "react-router-dom";
import router from "../../routes/router";
import ItemContext from "../../contexts/ItemContext";
import useItems from "../../hooks/useItems";

export default function App() {
  const itemsStates = useItems()

  return (
    <ItemContext.Provider value={itemsStates}>
      <RouterProvider router={router} />
    </ItemContext.Provider>
  )
}