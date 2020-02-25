// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserCreate } from './resources/users';
import { CategoryList, CategoryCreate } from './resources/categories';
import { ItemList, ItemCreate } from './resources/items';
import { RentList, RentCreate, RentEdit} from './resources/rents';
import CategoryIcon from '@material-ui/icons/Category';
import ListAltIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/Group';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Dashboard from './components/Dashboard';

const dataProvider = jsonServerProvider('http://localhost:8086');
const App = () =>  (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource icon={CategoryIcon} name="categories" list={CategoryList} create={CategoryCreate}/>
    <Resource icon={ListAltIcon} name="items" list={ItemList} create={ItemCreate}/>
    <Resource icon={UserIcon} name="users" list={UserList}  create={UserCreate}/>
    <Resource icon={MonetizationOnIcon} name="rents" list={RentList} create={RentCreate} edit={RentEdit}/>
  </Admin>
);

export default App;
