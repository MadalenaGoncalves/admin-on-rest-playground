import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { ResultsList, ResultsEdit, ResultsCreate } from './results';

// > json-server --watch db.json
const fakeDB = 'http://localhost:3000';
const App = () => (
  <Admin restClient={jsonServerRestClient(fakeDB)}>
    <Resource name="results" list={ResultsList} edit={ResultsEdit} create={ResultsCreate} />
  </Admin>
);

export default App;
