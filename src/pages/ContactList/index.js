import { useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { FiRefreshCcw } from "react-icons/fi"
import { MdDelete } from "react-icons/md"

import { deleteContact, getContacts } from "../../actions/contacts_actions"
import Header from "../../components/Header"
import "../../css/ContactList.scss"

function ContactList({ history }) {
  const contacts = useSelector((state) => state.contacts, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleGoToUpdate = (id) => {
    history.push(`/update/${id}`)
  }

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <>
      <Header />
      <section className="contact-list">
        {contacts.map((contact) => (
          <div className="contact-item" key={contact.id}>
            <div className="item-img">
              <img src="https://placebear.com/100/100" alt={contact.name} />
            </div>
            <div className="item-data">
              <p className="contact-name">{contact.name}</p>
              <p className="contact-email">{contact.email}</p>
              <p className="contact-phone">{contact.phone}</p>
            </div>
            <div className="item-buttons">
              <button
                className="update-contact"
                onClick={() => handleGoToUpdate(contact.id)}
              >
                <FiRefreshCcw />
              </button>
              <button
                className="delete-contact"
                onClick={() => handleDelete(contact.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default ContactList
