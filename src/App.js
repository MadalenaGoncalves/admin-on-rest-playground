import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { ResultsList, ResultsEdit, ResultsCreate } from './results';

const fakeDB = 'https://my-json-server.typicode.com/MadalenaGoncalves/fakeJsonServer';
const App = () => (
  <Admin restClient={jsonServerRestClient(fakeDB)}>
    <Resource name="user" list={ResultsList} edit={ResultsEdit} create={ResultsCreate} />
  </Admin>
);

export default App;
