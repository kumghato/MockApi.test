import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Pricing from './Components/Pricing';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import TableView from './Components/TableView';
import Movies from './Components/Movies';
import MoviesView from './Components/MoviesView';

function App() {
  return (
    <div>


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/table' element={<Table />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/Moviesview/:id' element={<MoviesView />} />
          <Route path='/table/view/:id' element={<TableView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
