import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <Link to="/" className={styles.title}>STOCK MANAGER</Link>
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link to="/items">Itens</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}