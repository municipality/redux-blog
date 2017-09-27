/**
 * Action to retrieve entries from DB
 */
export const RETRIEVE_ENTRIES = 'RETRIEVE_ENTRIES'
export const retrieveEntries = () => {
  // retrieve entries via some API then pass state
  // For now add fake data
  return {
    type: RETRIEVE_ENTRIES,
    entries: [
      {
        title: 'Test',
        text: 'Test text',
        tags: ['tag1'],
        isOpen: true,
        date: new Date().toLocaleString()
      }
    ]
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
