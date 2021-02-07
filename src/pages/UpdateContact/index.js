import { useForm } from "react-hook-form"
import Header from "../../components/Header"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import "../../css/CreateContact.scss"
import { updateContact } from "../../actions/contacts_actions"
import { Redirect } from "react-router-dom"

const UpdateContact = ({ history, match }) => {
  const contacts = useSelector((state) => state.contacts, shallowEqual)
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const contact = contacts.find((c) => c.id === parseInt(match.params.id))

  const onSubmit = (data) => {
    dispatch(updateContact(contact.id, data))
    history.push("/")
  }

  if (!contact) {
    return <Redirect to="/" />
  }

  return (
    <>
      <Header title="Update Contact" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            ref={register({ required: true, maxLength: 80 })}
            defaultValue={contact.name}
          />
          {errors.name && <p className="error">This field is required</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            defaultValue={contact.email}
          />
          {errors.email?.type === "required" && (
            <p className="error">This field is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="error">Please insert a valid email</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            ref={register({ required: true, maxLength: 16 })}
            defaultValue={contact.phone}
          />
          {errors.phone && <p className="error">This field is required</p>}
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default UpdateContact
