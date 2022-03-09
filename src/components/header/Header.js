import { Link } from 'react-router-dom'

import { ReactComponent as Icon } from '../../assets/react.svg'

import style from './Header.module.css'

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header className={style.wrapper}>
      <h1 className={style.title}><Icon className={style.icon} />ReactJS</h1>
      <nav className={style.navWrapper}>
        <ul className={style.nav}>
          <li>
            <Link
              to="/"
              className={currentPage === "/" && style.active}
              onClick={() => setCurrentPage("/")}
            >
              Fundamentals
            </Link>
          </li>
          <li>
            <Link
              to="/advanced"
              className={currentPage === "/advanced" && style.active}
              onClick={() => setCurrentPage("/advanced")}
            >
              Advanced
            </Link>
          </li>
          <li>
            <Link
              to="/ecosystem"
              className={currentPage === "/ecosystem" && style.active}
              onClick={() => setCurrentPage("/ecosystem")}
            >
              Ecosystem
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}