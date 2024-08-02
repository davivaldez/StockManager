import useDataDashboard from "../../hooks/useDataDashboard"
import useItemManagement from "../../hooks/useItemManagement"
import DataDashboard from "./DataDashboard"
import LowStockItemsTable from "./LowStockItemsTable"
import RecentItemsTable from "./RecentItemsTable"
import styles from "./styles.module.css"

export default function Home() {
  const { item: { items } } = useItemManagement()
  const { getRecentItems, getLowStockItems } = useDataDashboard()
  return (
    <>
      <p className={styles.text}>Dashboard</p>
      <section className={styles.items}>
        <DataDashboard text={"Diversidade de itens"} data={items.length} />
        <DataDashboard text={"Inventário total"} data={items.reduce((accumulator, item) => accumulator + Number(item.amount), 0)} />
        <DataDashboard text={"Itens recentes"} data={items.reduce((accumulator, item) => getRecentItems(accumulator, item), 0)} />
        <DataDashboard text={"Itens acabando"} data={items.reduce((accumulator, item) => getLowStockItems(accumulator, item), 0)} />
      </section>
      <section className={styles.tables}>
        <div className={`table-responsive ${styles.table}`}>
          <RecentItemsTable />
        </div>
        <div className={`table-responsive ${styles.table}`}>
          <LowStockItemsTable />
        </div>
      </section>
    </>
  )
}