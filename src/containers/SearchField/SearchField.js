import { connect } from 'react-redux'
import TextInput from 'components/TextInput'
import { searchEntries } from 'actions'

/**
 * maps states to props (this case do nothing)
 */
const mapStateToProps = state => {
  return state
}

/**
 * map dispatch functions to component props
 * @param  {function} dispatch call to dispatch action
 * @return {obj} that maps key to some prop of component
 */
const mapDispatchToProps = dispatch => {
  return {
    /**
     * @func searchFunc
     * @param searchTerm passed in from TextInput component
     * dispatch({type params:}) takes an action with type
     * and some change in params (searchEntries from /actions)
     */
    searchFunc: searchTerm => {
      dispatch(searchEntries(searchTerm))
    }
  }
}

const SearchField = connect(mapStateToProps, mapDispatchToProps)(TextInput)

export default SearchField
