import ItemsTable from "./ItemsTable"
import styles from "./styles.module.css"

export default function Items() {
  return (
    <>
      <span className={styles.line}></span>
      <div className={`table-responsive ${styles.table}`}>
        <ItemsTable />
      </div>
    </>
  )
}