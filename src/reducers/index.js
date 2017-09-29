import { RETRIEVE_ENTRIES, SEARCH_ENTRIES } from 'actions'
import { combineReducers } from 'redux'

/**
 * @function loadEntries
 * @param state:array initial entries
 * @param action
 */

function entries(state = [], action) {
  switch (action.type) {
  case RETRIEVE_ENTRIES: {
    return [...state, ...action.entries]
  }
  default: {
    return state
  }
  }
}

//State does not change the entries state.
//Container should contain filter logic
function search(state = '', action) {
  switch (action.type) {
  case SEARCH_ENTRIES: {
    return action.search
  }
  default: {
    return state
  }
  }
}

const blog = combineReducers({
  // Map all entries only to ones that fit search criteria
  entries: entries,
  search: search
})

export default blog
