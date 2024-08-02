import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Button from "../../../components/Button"

NewRecentItem.propTypes = {
  currentItem: PropTypes.object
}

export default function NewRecentItem({ currentItem }) {
  return (
    <tr>
      <td>{currentItem.name}</td>
      <td>
        <Link to={`/items/${currentItem.id}`}><Button>Ver</Button></Link>
      </td>
    </tr>
  )
}