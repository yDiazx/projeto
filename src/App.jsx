import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import NotFound from './pages/notFound';
import Events from './pages/events';
import Layout from './components/layout';
import Cart from './pages/cart';
import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='eventos' element={<Events />} />
          <Route path='carrinho' element={<Cart />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
