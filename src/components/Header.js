import { GoPlus } from "react-icons/go"
import { useHistory } from "react-router-dom"
import "../css/Header.scss"

function Header({ title = "Contacts" }) {
  const history = useHistory()

  const handleCreateContact = () => {
    history.push("/create")
  }

  return (
    <header>
      <h1>{title}</h1>
      <button onClick={handleCreateContact}>
        <GoPlus />
      </button>
    </header>
  )
}

export default Header
