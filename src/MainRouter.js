import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route, Link } from "react-router-dom";

// Components
import Navbar from './ui-components/Navbar';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import NoMatchPage from './pages/NoMatchPage';
import RegisterPage from './pages/RegisterPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import DetailProduct from './pages/DetailProduct';
import AllProductsPage from './pages/AllProductsPage';
import UpdateProduct from './pages/UpdateProduct';

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
        <Route path='/' element={ <AdminPage />} />
        <Route path='/categories' element={ <AllCategoriesPage />} />
        <Route path='/products' element={ <AllProductsPage />} />
        <Route path='/products/:id' element={ <DetailProduct />} />
        <Route path='/products/:id/update' element={ <UpdateProduct />} />
        <Route path='/login' element={ <LoginPage />} />
        <Route path='/register' element={ <RegisterPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </Provider>
  )
}

export default MainRouter

