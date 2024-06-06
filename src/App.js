import NavBar from './Components/NavBar';
import './App.css';
import Add from './Components/Add';
import All from './Components/All';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditUser from './Components/EditUser';

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
          <Route path='/Add' element={<Add/>}/>
          <Route path='/' element={<All/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
