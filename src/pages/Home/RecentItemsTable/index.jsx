import styles from "./styles.module.css";
import useItemManagement from "../../../hooks/useItemManagement";
import useDataDashboard from "../../../hooks/useDataDashboard";
import NewRecentItem from "../NewRecentItem";

export default function RecentItemsTable() {
  const { item: { items } } = useItemManagement()
  const { getRecentItems, getNameRecentItems } = useDataDashboard()
  const numberItems = items.reduce((accumulator, item) => getRecentItems(accumulator, item), 0)
  const recentItems = getNameRecentItems(items)

  return (
    <>
      { numberItems === 0 ? (
        <p>Nenhum item recente!</p>
      ) : (
        <table className={styles.tableCustom}>
          <thead>
            <tr>
              <th>Itens recentes</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recentItems.map(item =>  (
              <NewRecentItem key={item.id} currentItem={item} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}