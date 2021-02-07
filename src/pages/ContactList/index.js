import { useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { getContacts } from "../../actions/contacts_actions"
import Header from "../../components/Header"
import "../../css/ContactList.scss"

function ContactList() {
  const contacts = useSelector((state) => state.contacts, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts(() => console.log("ok")))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <div className="contact-list">ContactList</div>
    </>
  )
}

export default ContactList
