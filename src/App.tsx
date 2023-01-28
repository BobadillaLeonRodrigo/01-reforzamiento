import React from 'react';
import Header from './components/common/Header';
//Referencias de Navegacion
import {Navigate, Route, Routes } from 'react-router-dom';
//Importaciones de rutas de route
import MainTypeScript from './components/typescript/MainTypeScript';
import Home from './components/common/Home';
import MainHooks from './components/hooks/MainHooks';
import Default from './components/common/Default';

function App() {
  return (
    <div>
      <Header />
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='typescript' element={ <MainTypeScript/> } />
            <Route path='hooks' element={ <MainHooks/> } />
            <Route path='default' element={ <Default/> } />
            <Route path='/*' element={ <Navigate to= { 'default' }/> } />
        </Routes>
    </div>
  );
}

export default App;
