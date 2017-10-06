## Blog with React & Redux

Node and Express with Mongo DB and React/Redux (MERN)

Created with create-react-app

#### Note:

--include-path in node-sass allows absolute path for @import scss statements

Do not include src/styles in node-sass because we do not want to compile
css files

SVG icons from icomoon

### Application structure:

Blog state (laid out in '/reducers'): {

  entries: array of objs to be mapped to EntryList,

  search: string to filter entries

}


Application retrieves blog entries from mongodb (mlabs) by calling fetchEntries (/actions) when store is first created at initialization of the app (/store)

When data comes back, RECEIVE_ENTRIES action is dispatched, which loads entries
into the blog through Blog container.


SearchField currently allows search for Entry titles and tags. Tags are searched
with '#<tag>'. Clicking on tags on entries also triggers a search. (Search action
SEARCH_ENTRIES)

#### NOTE:
since TextInput is programmatically changed, it needed a state, "value" key mapped
to state, and onChange listener which set state to field value event.target.value

componentWillReceiveProps(nextProps) hook is implemented to update the SearchField

### TODOs:
- Extrapolate tag to tags container and have that container handle all onClick handling

- Use that tag container in Entry

- Implementation of scroll debounce event to fetch more entries (need more entries first)

- BrowserRouter for search queries and Entry id specification (using Date or other id)

- Design the default view (desktop & phone)
