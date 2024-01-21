
import './App.css';
import Main from './component/main/Main';
import Add from './component/add card/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './component/profile/Profile';
import Get_Product from './component/get_product/Get_Product';
import Login from './component/login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>   
        <Routes>

          <Route path='/' exact element={<Login />} />
          <Route path='/home' element={<Main />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/product' element={<Get_Product />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
