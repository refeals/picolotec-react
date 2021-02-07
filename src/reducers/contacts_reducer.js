import {
  GET_CONTACTS,
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../actions/action_types"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return action.payload.data
    case CREATE_CONTACT:
    case GET_CONTACT:
    case UPDATE_CONTACT:
    case DELETE_CONTACT:
    default:
      return state
  }
}

export default reducer
