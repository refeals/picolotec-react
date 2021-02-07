import { GoHome, GoPlus } from "react-icons/go"
import { useHistory } from "react-router-dom"
import "../css/Header.scss"

function Header({ title = "Contacts" }) {
  const history = useHistory()

  return (
    <header>
      <button onClick={() => history.push("/")}>
        <GoHome />
      </button>
      <h1>{title}</h1>
      <button onClick={() => history.push("/create")}>
        <GoPlus />
      </button>
    </header>
  )
}

export default Header
