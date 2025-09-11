import axios from 'axios'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './root-reducer'
import * as api from '../config'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const loadTheme = () => {
  try {
    const saved = localStorage.getItem('theme')
    return saved ? saved : undefined
  } catch (_) {
    return undefined
  }
}

const preloadedState = {}
const savedTheme = loadTheme()
if (savedTheme) {
  preloadedState.theme = savedTheme
}

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({ client: axios, api })))
)

store.subscribe(() => {
  try {
    const state = store.getState()
    const currentTheme = state.theme
    localStorage.setItem('theme', currentTheme)
  } catch (_) {}
})

export default store
