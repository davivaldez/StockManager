import styles from "./styles.module.css"
import PropTypes from "prop-types"

Button.propTypes = {
  children: PropTypes.string,
  props: PropTypes.element
}

export default function Button({ children, ...props }) {
  return <button {...props} className={styles.button}>{children}</button>
}