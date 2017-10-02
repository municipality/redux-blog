import { connect } from 'react-redux'
import { searchEntries } from 'actions'
import TextButton from 'components/TextButton'

const mapStateToProps = state => {
  return {
    // searchTerm prop of TextButton maps
    // to state.search from Blog
    searchTerm: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // map onClick prop of TextButton
    // to searchEntries
    onClick: searchTerm => {
      // Because it is a tag, append #
      dispatch(searchEntries(`#${searchTerm}`))
    }
  }
}

const Tag = connect(mapStateToProps, mapDispatchToProps)(TextButton)

export default Tag
