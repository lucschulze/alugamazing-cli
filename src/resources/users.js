import React from 'react';
import { List, Datagrid, TextField, EmailField ,Create, SimpleForm, TextInput, RadioButtonGroupInput} from 'react-admin';
import MyUrlField from '../components/MyUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="profile" />
        </Datagrid>
    </List>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="name" />
            <TextInput source="password" />
            <RadioButtonGroupInput source="profile" choices={[
                { id: 'ADMIN', name: 'ADMIN' },
                { id: 'CLIENT', name: 'CLIENT' },
            ]} />
        </SimpleForm>
    </Create>
);
