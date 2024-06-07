import logo from './logo.svg';
import './App.css';
import AddLibrary from './components/AddLibrary';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewAllLib from './components/ViewAllLib';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddLibrary/>}/>
      <Route path='/Search' element={<SearchBook/>}/>
      <Route path='/Delete' element={<DeleteBook/>}/>
      <Route path='/ViewAll' element={<ViewAllLib/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;