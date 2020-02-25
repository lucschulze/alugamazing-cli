import React from 'react';
import { List, Datagrid, TextField, EmailField ,Create, SimpleForm, TextInput} from 'react-admin';

export const CategoryList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const CategoryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);
