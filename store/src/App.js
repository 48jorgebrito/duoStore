import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'
import Bag from './components/Pages/Bag/Bag';
import Cadastro from './components/Pages/Cadastro/Cadastro';
import Modal from './components/Pages/Modal/Modal';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/bag' element={<Bag/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/modal' element={<Modal/>}/>
        </Routes>
      </Router>

    </div>
  );
}
export default App;