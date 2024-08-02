import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import Button from "../../../components/Button"
import useItemManagement from "../../../hooks/useItemManagement"

NewItemTable.propTypes = {
  item: PropTypes.object
}

export default function NewItemTable({ item }) {
  const { setCurrentItem, removeItem } = useItemManagement()
  
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.amount} unid.</td>
      <td>{item.category}</td>
      <td className={styles.buttons}>
        <span className={styles.blueButton}>
          <Link to={`${item.id}`}><Button>Ver</Button></Link>
        </span>
        <span>
          <Link to={`${item.id}/edit`}>
            <Button onClick={() => setCurrentItem(item.id)}>Atualizar</Button>
          </Link>
        </span>
        <span className={styles.redButton}>
          <Button onClick={() => removeItem(item.id)}>Excluir</Button>
        </span>
      </td>
    </tr>
  )
}