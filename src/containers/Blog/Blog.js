import { connect } from 'react-redux'
import EntryList from 'components/EntryList'

/**
 * Filters entries based on search term
 * @param  {array of Objects} entries entries from database
 * @param  {string} search  search term from state
 * @return {array of Objects} returns filtered array of entries
 */
const getFilteredEntries = (entries, search) => {
  // if search starts with #, only search tags
  if (search && search.charAt(0) === '#') {
    return entries.filter(
      entry =>
        entry.tags.filter(tag => {
          search = search.substring(1)
          return tag.toLowerCase().indexOf(search.toLowerCase()) > -1
        }).length > 0
    )
  }
  return entries.filter(
    entry => entry.title.toLowerCase().indexOf(search.toLowerCase()) > -1
  )
}

const mapStateToProps = state => {
  return {
    entries: getFilteredEntries(state.entries, state.search)
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const Blog = connect(mapStateToProps, mapDispatchToProps)(EntryList)

export default Blog
