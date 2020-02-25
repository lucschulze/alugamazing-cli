import React from 'react';
import { List, Datagrid, EditButton, TextField, Create, SimpleForm, TextInput, ReferenceField, ReferenceInput, SelectInput, DateField, BooleanField, DateInput, BooleanInput, RadioButtonGroupInput, Edit} from 'react-admin';

export const RentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <EditButton />
            <TextField source="id" />
            <ReferenceField source="itemId" reference="items">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="userId" reference="users">
                <TextField source="email" />
            </ReferenceField>
            <DateField source="firstDay" />
            <DateField source="lastDay" />
            <TextField source="value" />
            <BooleanField source="paid" />
            <TextField source="status" />
        </Datagrid>
    </List>
);
export const RentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="itemId" reference="items">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="email" />
            </ReferenceInput>
            <DateInput source="firstDay" />
            <DateInput source="lastDay" />
            <BooleanInput source="paid" />

        </SimpleForm>
    </Create>
);

export const RentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
           <DateInput source="firstDay" />
            <DateInput source="lastDay" />
            <BooleanInput source="paid" />
            <RadioButtonGroupInput source="status" choices={[
                { id: 'RESERVED', name: 'RESERVED' },
                { id: 'RENTED', name: 'RENTED' },
                { id: 'CANCELED', name: 'CANCELED' },
                { id: 'PENDENT', name: 'PENDENT' },
                { id: 'RETURNED', name: 'RETURNED' },
            ]} />
        </SimpleForm>
    </Edit>
);


