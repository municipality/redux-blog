import { connect } from 'react-redux'
import EntryList from 'components/EntryList'

/**
 * Filters entries based on search term
 * @param  {array of Objects} entries entries from database
 * @param  {string} search  search term from state
 * @return {array of Objects} returns filtered array of entries
 */
const getFilteredEntries = (entries, search) => {
  //Currently only filter by title
  return entries.filter(entry => entry.title.indexOf(search) > -1)
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
