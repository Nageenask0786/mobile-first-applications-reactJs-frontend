import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';

import NotFound from './components/NotFound';


const App = () => (
    <BrowserRouter>
    <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/' element = {<Home/>} />
        <Route  path = "/not-found" element = {<NotFound/>} />
    </Routes>
   
</BrowserRouter>

)
  





  

export default App;
