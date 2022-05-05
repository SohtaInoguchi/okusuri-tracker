import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterNewRecord from './RegisterNewRecord';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

// function App() {
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='dashboard' element={<Dashboard />}/>
      <Route path='register' element={<RegisterNewRecord />}/>
    </Routes>
  );
}

export default App;
