import styles from "./styles.module.css"
import useItemManagement from "../../../hooks/useItemManagement"
import NewItemTable from "../NewItemTable"

export default function ItemsTable() {
  const { item: { items } } = useItemManagement()

  return (
    <>
      {items.length > 0 ? (
        <table className={styles.tableCustom}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Em estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <NewItemTable key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      ): <p>Nenhum item em estoque!</p>}
    </>
  )
}