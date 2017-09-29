import fetch from 'isomorphic-fetch'

export const RETRIEVE_ENTRIES = 'RETRIEVE_ENTRIES'
/**
 * @function receiveEntries
 * @param entries entries retrieved from db
 * @returns action to be used in reducer
 */
const receiveEntries = entries => {
  return {
    type: RETRIEVE_ENTRIES,
    entries
  }
}

/**
 * Action to retrieve entries from DB
 * @return function that takes in a dispatch to dispatch after completion
 */
export const fetchEntries = () => {
  //RETURNS A FUNCTION WITH DISPATCH PASSED TO BE USED
  return dispatch => {
    // retrieve entries via some API then pass state
    // const retrieveEntriesURL = `${document.location.origin}/api/retrieveentries`
    const retrieveEntriesURL = 'http://localhost:3001/api/retrieveentries'
    fetch(retrieveEntriesURL)
      .then(response => response.json())
      .then(entries => {
        console.log(entries)
        dispatch(receiveEntries(entries))
      })
  }
}

/**
 * Action to search entries using regex on title, tags, text
 * @param filter to set what is being filtered
 */
export const SEARCH_ENTRIES = 'SEARCH_ENTRIES'
export const searchEntries = search => {
  return {
    type: SEARCH_ENTRIES,
    search
  }
}

/**
 * Action to toggle blog entries
 * @param id for which entry id to toggle
 */
export const TOGGLE_ENTRY = 'TOGGLE_ENTRY'
export const toggleEntry = id => {
  return {
    type: TOGGLE_ENTRY,
    id
  }
}
