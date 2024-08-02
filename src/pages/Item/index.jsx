import { Link, useParams } from "react-router-dom"
import Button from "../../components/Button"
import styles from "./styles.module.css"
import useItemManagement from "../../hooks/useItemManagement"

export default function Item() {
  const { item: { items }, setCurrentItem, removeItem } = useItemManagement()
  const { itemId } = useParams()
  const currentItem = items.find((i) => i.id === +itemId)

  if (!currentItem) {
    return <h2 className={styles.error}>Oops! Não foi possível encontrar esse item.</h2>
  }

  return (
    <>
      <div className={styles.item}>
        <span>{currentItem.name}</span>
        <span>
          <Link to={`edit`}>
            <Button onClick={() => setCurrentItem(currentItem.id)}>Atualizar</Button>
          </Link>
        </span>
        <span className={styles.redButton}>
          <Button onClick={() => removeItem(currentItem.id)}>Excluir</Button>
        </span>
      </div>
      <div className={styles.details}>
        <span>Categoria: {currentItem.category}</span>
        <span>Quantidade em estoque: {currentItem.amount}</span>
        <span>Preço: R${currentItem.price}</span>
      </div>
      <p className={styles.description}>{currentItem.description}</p>
      <div className={styles.informations}>
        <p>Cadastrado em: {currentItem.createdAt}</p>
        {currentItem.updatedAt ? (
          <p>Atualizado em: {currentItem.updatedAt}</p>
        ) : (
          <p>Nenhuma atualização realizada até o momento!</p>
        ) }
      </div>
    </>
  )
}