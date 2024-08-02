import { Link, Outlet } from "react-router-dom"
import styles from "./styles.module.css"

export default function ItemsLayout() {
  return (
    <>
      <p className={styles.text}>Stock Items</p>
      <nav className={styles.nav}>
        <Link to="/items">Todos os itens</Link>
        <Link to="/items/new">Novo item</Link>
      </nav>
      <Outlet />
    </>
  )
}