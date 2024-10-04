import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import React from 'react';

import AdminDashboard from './components/AdminDashboard';
import LoginAdmin from './components/LoginAdmin';
import EmployeeManagement from './components/EmployeeManagement';
import CustomerManagement from './components/CustomerManagement';

import RegisterAdmin from './components/RegisterAdmin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/employeeManagement' element={<EmployeeManagement/>} />
        <Route exact path='/loginAdmin' element={<LoginAdmin/>} />
        <Route exact path='/admindashboard' element={<AdminDashboard/>} />
        <Route exact path='/customerManagement' element={<CustomerManagement/>} />

        
        <Route exact path='/signin' element={<SignIn/>} />
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
