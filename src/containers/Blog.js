import { connect } from 'react-redux'
// import { retrieveEntries } from '../actions'
import EntryList from '../components/EntryList'

const getFilteredEntries = (entries, search) => {
  return entries.filter((entry) => entry.title.indexOf(search) > -1)
}

const mapStateToProps = state => {
  return {
    entries: getFilteredEntries(state.entries, state.search)
  }
}

const mapDispatchToProps = () => {
  return {}
}

const Blog = connect(mapStateToProps, mapDispatchToProps)(EntryList)

export default Blog
