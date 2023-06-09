import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './CSS/sb-admin-2.css';
import './CSS/fontawesome-free/css/all.min.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import UserCreate from './UserCreate';
import ViewUser from './ViewUser';
import EditUser from './EditUser';

function App() {

  return (
<BrowserRouter>
<div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Topbar/>
<Routes>
<Route path="/dashboard" element={<Dashboard/>}></Route>
<Route path="/users" element={<User/>}></Route>
<Route path="/user_create" element={<UserCreate/>}></Route>
<Route path="/users/:id" element={<ViewUser/>}></Route>
<Route path="/edit/:id" element={<EditUser/>}></Route>
</Routes>
    </div>
    </div>
    </div>
</BrowserRouter>
  )
}

export default App;
