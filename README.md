## Blog with React & Redux

Node and Express with Mongo DB and React/Redux (MERN)

Created with create-react-app

### Application structure:

Application retrieves blog entries from mongodb (mlabs) by calling fetchEntries (/actions) when store is first created at initialization of the app (/store)

When data comes back, RECEIVE_ENTRIES action is dispatched
