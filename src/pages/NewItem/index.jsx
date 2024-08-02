import { useEffect } from "react"
import Form from "../../components/Form"
import useItemManagement from "../../hooks/useItemManagement"
import styles from "./styles.module.css"
import useItemsPlaceholder from "../../hooks/useItemsPlaceholder"
import ItemPlaceholderContext from "../../contexts/ItemPlaceholderContext"

export default function NewItem() {
  const { item, addItem } = useItemManagement()
  const itemsPlaceholder = useItemsPlaceholder()
  
  useEffect(() => {
    item.setName("")
    item.setAmount("")
    item.setPrice("")
    item.setCategory("none")
    item.setDescription("")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <span className={styles.line}></span>
      <ItemPlaceholderContext.Provider value={itemsPlaceholder}>
        <Form functionForm={(ev) => addItem(ev, itemsPlaceholder)} />
      </ItemPlaceholderContext.Provider>
    </>
  )
}