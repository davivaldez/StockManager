import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Items from "../pages/Items";
import ItemsLayout from "../layouts/ItemsLayout";
import NewItem from "../pages/NewItem";
import UpdateItem from "../pages/UpdateItem";
import Item from "../pages/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          {
            index: true,
            element: <Items />
          },
          {
            path: "new",
            element: <NewItem />
          },
          {
            path: ":itemId",
            element: <Item />,
          },
          {
            path: ":itemId/edit",
            element: <UpdateItem />
          }
        ]
      }
    ]
  }
])

export default router