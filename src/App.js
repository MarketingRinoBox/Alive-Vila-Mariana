import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Obrigado from './pages/Obrigado';
import NonPage from './pages/NonPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/obrigado',
    element: <Obrigado />
  },
  {
    path: '*',
    element: <NonPage />
  },
])

export { router }