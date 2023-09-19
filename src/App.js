
import React from 'react';
import Home from './Home';
import English from './English';
import Biology from './Biology';
import Chemistry from './Chemistry';
import Computer from './Computer';
import Physics from './Physics';
import Genknowledge from './Genknowledge';
import { Navigate, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
<>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/english' element={<English/>}/>
<Route path='/biology' element={<Biology/>}/>
<Route path='/chemistry' element={<Chemistry/>}/>
<Route path='/computer' element={<Computer/>}/>
<Route path='/physics' element={<Physics/>}/>
<Route path='/genknowledege' element={<Genknowledge/>}/>
<Route path='*' element={<Navigate to="/"/>}/>


</Routes>
</>
  );
};

export default App;

