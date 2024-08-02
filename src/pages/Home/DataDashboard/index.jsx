import styles from "./styles.module.css";
import PropTypes from "prop-types";

DataDashboard.propTypes = {
  text: PropTypes.string,
  data: PropTypes.number
}


export default function DataDashboard({ text, data }) {
  return (
    <div className={styles.datas}>
      <p>{text}</p>
      <p className={styles.paragraph}>{data}</p>
    </div>
  )
}