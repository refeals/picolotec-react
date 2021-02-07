import { useForm } from "react-hook-form"
import Header from "../../components/Header"
import "../../css/CreateContact.scss"

const CreateContact = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
          {console.log(errors)}
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
