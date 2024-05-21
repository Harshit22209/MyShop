import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Admin from './components/admin/Admin';
import Customer from './components/customer/Customer';
import RetailManagerHome from './components/manager/RetailManagerHome';
import Supplier from './components/supplier/Supplier';
import Applicant from './components/applicant/Applicant';
import RetailManager from './components/manager/RetailManager';

function App() {
  return (
   <div>
    <BrowserRouter>
    {/* <HeaderComponent /> */}
    <Routes>
      <Route path='/register' element={<div className='flex justify-center bg-teal-100 h-full'><Register /></div>} />
      <Route path='/' element={<div className='flex justify-center bg-teal-100'><Register /></div>} />
      <Route path='/login' element={<div className='flex justify-center bg-teal-100 h-[100vh]'><div><Login /></div></div>} />
      <Route path='/admin/*' element={<div className=''><Admin /></div>} />
      <Route path='/customer/*' element={<div className=''><Customer /></div>} />
      <Route path='/supplier/*' element={<div className=''><Supplier /></div>} />
      <Route path='/retailManager/*' element={<div className=''><RetailManager/></div>} />
      <Route path='/applicant' element={<div className=''><Applicant/></div>} />




    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
