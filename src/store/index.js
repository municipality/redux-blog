import { createStore, applyMiddleware } from 'redux'
import blog from 'reducers'
import { fetchEntries } from 'actions'
//thunk middleware allows us to do async calls
import thunkMiddleware from 'redux-thunk'

//Create store by passing in reducer, then applyMiddleware
// http://redux.js.org/docs/advanced/AsyncActions.html
let store = createStore(blog, applyMiddleware(thunkMiddleware))

//When store is created, fetch entries from database
store.dispatch(fetchEntries())

export default store
