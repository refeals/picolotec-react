import {
  GET_CONTACTS,
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../actions/action_types"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return action.payload.data
    case CREATE_CONTACT:
      return [...state, action.payload.data]
    case UPDATE_CONTACT:
      return state.map((contact) => {
        if (contact.id === action.payload.data.id) {
          return action.payload.data
        } else {
          return contact
        }
      })
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload)
    default:
      return state
  }
}

export default reducer
