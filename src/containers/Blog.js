import { connect } from 'react-redux'
// import { retrieveEntries } from '../actions'
import EntryList from 'components/EntryList'

const getFilteredEntries = (entries, search) => {
  return entries
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
