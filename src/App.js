// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserCreate } from './resources/users';
import { CategoryList, CategoryCreate } from './resources/categories';
import { ItemList, ItemCreate } from './resources/items';
import { RentList, RentCreate, RentEdit} from './resources/rents';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';


const dataProvider = jsonServerProvider('http://localhost:8086');
const App = () =>  (
  <Admin dataProvider={dataProvider}>
    <Resource icon={UserIcon} name="categories" list={CategoryList} create={CategoryCreate}/>
    <Resource icon={UserIcon} name="items" list={ItemList} create={ItemCreate}/>
    <Resource icon={UserIcon} name="users" list={UserList}  create={UserCreate}/>
    <Resource icon={UserIcon} name="rents" list={RentList} create={RentCreate} edit={RentEdit}/>
  </Admin>
);

export default App;
