import { useParams } from "react-router-dom"
import Form from "../../components/Form"
import useItemManagement from "../../hooks/useItemManagement"
import styles from "./styles.module.css"
import useItemsPlaceholder from "../../hooks/useItemsPlaceholder"
import ItemPlaceholderContext from "../../contexts/ItemPlaceholderContext"

export default function UpdateItem() {
  const { item: { items }, updateCurrentItem } = useItemManagement()
  const itemsPlaceholder = useItemsPlaceholder()
  const { itemId } = useParams()
  const currentItem = items.find((i) => i.id === +itemId)

  if (!currentItem) {
    return <h2 className={styles.error}>Oops! Não foi possível encontrar esse item.</h2>
  }

  return (
    <>
      <h3 className={styles.text}>Atualizar item - {currentItem.name}</h3>
      <ItemPlaceholderContext.Provider value={itemsPlaceholder}>
        <Form  functionForm={(ev) => updateCurrentItem(ev, currentItem, itemsPlaceholder)}/>
      </ItemPlaceholderContext.Provider>
    </>
  )
}