import React from 'react';
import { List, Datagrid, Edit, Create, EditButton, SimpleForm,
  DisabledInput, TextField, DateField } from 'admin-on-rest';
import TimeInput from './TimeInput.js';

export const ResultsList = (props) => (
  <List {...props}>
    {/* <TextField source="id" />
    <DateField source="date" /> */}
    <Datagrid>
      <TimeInput source="time_in_zone5" />
      <TimeInput source="time_in_zone4" />
      <TimeInput source="time_in_zone3" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ResultsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" />
      <DisabledInput source="name" /> */}
      <TimeInput source="time_in_zone5" />
      <TimeInput source="time_in_zone4" />
      <TimeInput source="time_in_zone3" />
    </SimpleForm>
  </Edit>
);

export const ResultsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" />
      <DisabledInput source="name" /> */}
      <TimeInput source="time_in_zone5" />
      <TimeInput source="time_in_zone4" />
      <TimeInput source="time_in_zone3" />
    </SimpleForm>
  </Create>
);
