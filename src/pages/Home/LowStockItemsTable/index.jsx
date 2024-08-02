import styles from "./styles.module.css";
import useDataDashboard from "../../../hooks/useDataDashboard";
import useItemManagement from "../../../hooks/useItemManagement";
import NewLowStockItem from "../NewLowStockItem";

export default function LowStockItemsTable() {
  const { item: { items } } = useItemManagement()
  const { getLowStockItems, getNameLowStockItems } = useDataDashboard()
  const numberItems = items.reduce((accumulator, item) => getLowStockItems(accumulator, item), 0)
  const lowStockItems = getNameLowStockItems(items)

  return (
    <>
      { numberItems === 0 ? (
        <p>Nenhum item está acabando!</p>
      ) : (
      <table className={styles.tableCustom}>
        <thead>
          <tr>
            <th>Itens acabando</th>
            <th>Qtd.</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {lowStockItems.map(item => (
            <NewLowStockItem key={item.id} currentItem={item} />
          ))}
        </tbody>
      </table>
      )}
    </>
  )
}