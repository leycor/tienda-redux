import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route, Link } from "react-router-dom";

// Components
import Categories from './components/Categories'
import Index from './components/Index';
import Navbar from './components/Navbar';

// Store
import generateStore from './redux/store'


const MainRouter = () => {

  const store = generateStore()
  return (
    <Provider store={store}>
      {/* Menú de navegación */}
      <Navbar />

      {/* Rutas */}
      <Routes>
        <Route exact path='/' element={ <Index />} />
        <Route exact path='/categories' element={ <Categories />} />
      </Routes>

    </Provider>
  )
}

export default MainRouter

