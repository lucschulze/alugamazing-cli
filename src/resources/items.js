import React from 'react';
import { List, Datagrid, TextField, EmailField ,Create, SimpleForm, TextInput, ReferenceField, ReferenceInput, SelectInput, ChipField} from 'react-admin';
import MyUrlField from '../components/MyUrlField';

export const ItemList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="price" />
            <ReferenceField source="categoryId" reference="categories">
                <ChipField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const ItemCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="categoryId" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="price" />
        </SimpleForm>
    </Create>
);
