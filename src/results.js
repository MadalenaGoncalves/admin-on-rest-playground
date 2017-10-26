import React from 'react';
import { List, Datagrid, Edit, Create, EditButton, SimpleForm,
  DisabledInput, NumberField, DateField, DateInput } from 'admin-on-rest';
import SecsAsHHmmSSField from './SecsAsHHmmSSField.js';
import SecsAsHHmmSSInput from './SecsAsHHmmSSInput.js';

export const ResultsList = (props) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <DateField source="date" />
      <SecsAsHHmmSSField source="time_in_zone5" label="Time in zone 5" />
      <SecsAsHHmmSSField source="time_in_zone4" label="Time in zone 4" />
      <SecsAsHHmmSSField source="time_in_zone3" label="Time in zone 3" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ResultsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DateInput source="date" />
      <SecsAsHHmmSSInput source="time_in_zone5" label="Time in zone 5" />
      <SecsAsHHmmSSInput source="time_in_zone4" label="Time in zone 4"/>
      <SecsAsHHmmSSInput source="time_in_zone3" label="Time in zone 3"/>
    </SimpleForm>
  </Edit>
);

export const ResultsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="date" />
      {/* <SecsAsHHmmSSInput source="time_in_zone5" label="Time in zone 5"/>
      <SecsAsHHmmSSInput source="time_in_zone4" label="Time in zone 4"/>
      <SecsAsHHmmSSInput source="time_in_zone3" label="Time in zone 3"/> */}
    </SimpleForm>
  </Create>
);
