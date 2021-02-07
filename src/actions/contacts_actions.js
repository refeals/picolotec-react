import { api } from "../api"
import {
  GET_CONTACTS,
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../actions/action_types"

export const getContacts = (onSuccess) => (dispatch) => {
  return api
    .get(`/contacts`)
    .then(({ data }) => dispatch({ type: GET_CONTACTS, payload: data }))
    .then(() => onSuccess && onSuccess())
    .catch((err) => console.log(err))
}

export const createContact = (contactData, onSuccess) => (dispatch) => {
  return api
    .post(`/contacts`, { contactData })
    .then(({ data }) => dispatch({ type: CREATE_CONTACT, payload: data }))
    .then(() => onSuccess && onSuccess())
    .catch((err) => console.log(err))
}

export const updateContact = (id, contactData, onSuccess) => (dispatch) => {
  return api
    .put(`/contacts`, { contactData })
    .then(({ data }) => dispatch({ type: UPDATE_CONTACT, payload: data }))
    .then(() => onSuccess && onSuccess())
    .catch((err) => console.log(err))
}

export const deleteContact = (id, onSuccess) => (dispatch) => {
  return api
    .delete(`/contacts`, { params: { id } })
    .then(({ data }) => dispatch({ type: DELETE_CONTACT, payload: id }))
    .then(() => onSuccess && onSuccess())
    .catch((err) => console.log(err))
}
