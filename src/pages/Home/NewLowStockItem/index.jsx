import PropTypes from "prop-types"
import Button from "../../../components/Button"
import { Link } from "react-router-dom"

NewLowStockItem.propTypes = {
  currentItem: PropTypes.object
}

export default function NewLowStockItem({ currentItem }) {
  return (
    <tr>
      <td>{currentItem.name}</td>
      <td>{currentItem.amount}</td>
      <td>
        <Link to={`/items/${currentItem.id}`}><Button>Ver</Button></Link>
      </td>
    </tr>
  )
}