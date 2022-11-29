import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Obrigado from './pages/Obrigado';
import NonPage from './pages/NonPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/obrigado' element={<Obrigado />}/>
          <Route path='*' element={<NonPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;