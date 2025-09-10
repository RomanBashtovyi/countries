import { SET_COUNTRIES, SET_LOADING, SET_ERROR } from './countries-actions'

const initialState = {
  status: 'idle', // 'loading', 'received', 'rejected'
  error: null,
  list: [],
}

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return { ...state, list: payload, status: 'received' }
    case SET_LOADING:
      return { ...state, error: null, status: 'loading' }
    case SET_ERROR:
      return { ...state, error: payload, status: 'rejected' }
    default:
      return state
  }
}
