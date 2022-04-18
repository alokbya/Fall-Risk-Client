import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

import { UserProvider } from './context/global/userState';
import Authenticate from './components/pages/authenticate';
import Home from './components/pages/home';
import Navigation from './components/nav/navigation';
import UnitDetail from './components/units/unitDetail';
import AuditStepper from './components/audit/auditStepper';

function App() {
  return (
    <>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Authenticate />}/>
          {/* <Route path='/unit' element={<UnitDetail/>}/> */}
          <Route path='/record' element={<AuditStepper/>}/>
        </Routes>
      </UserProvider>
    </>
    
  );
}

export default App;
