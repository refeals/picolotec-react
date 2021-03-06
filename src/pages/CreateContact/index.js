import { useForm } from "react-hook-form"
import Header from "../../components/Header"
import { useDispatch } from "react-redux"
import "../../css/CreateContact.scss"
import { createContact } from "../../actions/contacts_actions"

const CreateContact = ({ history }) => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(createContact(data))
    history.push("/")
  }

  return (
    <>
      <Header title="Create Contact" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            ref={register({ required: true, maxLength: 80 })}
          />
          {errors.name && <p className="error">This field is required</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
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

export default CreateContact
