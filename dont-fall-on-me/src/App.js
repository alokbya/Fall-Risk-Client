import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

import { UserProvider } from './context/global/userState';
import Authenticate from './components/pages/authenticate';
import Home from './components/pages/home';
import Navigation from './components/nav/navigation';

function App() {
  return (
    <>
      <UserProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Authenticate />}/>
        </Routes>
      </UserProvider>
    </>
    
  );
}

export default App;
