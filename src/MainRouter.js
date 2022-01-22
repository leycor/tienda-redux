import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

// Components
import Navbar from './ui-components/Navbar';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import NoMatchPage from './pages/NoMatchPage';
import RegisterPage from './pages/RegisterPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import DetailProductPage from './pages/DetailProductPage';
import AllProductsPage from './pages/AllProductsPage';
import UpdateProductPage from './pages/UpdateProductPage';
import DetailCategoryPage from './pages/DetailCategoryPage';
import UpdateCategoryPage from './pages/UpdateCategoryPage';
import CreateProductPage from './pages/CreateProductPage';
import CreateCategoryPage from './pages/CreateCategoryPage';

// Routes
import ProtectedRoute from './routes/ProtectedRoute';
// Store
import generateStore from './redux/store'


const MainRouter = () => {
  console.log('Ejecutando componente Main Router')
   
  const store = generateStore()

  return (
    <Provider store={store}>
      {/* Menú de navegación */}

      <Routes>
      {/* Rutas Privadas */}
        <Route element={ <ProtectedRoute />}>
          <Route path='/' element={ <AdminPage />} />
          <Route path='/categories' element={ <AllCategoriesPage />} />
          <Route path='/categories/:id' element={ <DetailCategoryPage />} />
          <Route path='/categories/create' element={ <CreateCategoryPage />} />
          <Route path='/categories/:id/update' element={ <UpdateCategoryPage />} />

          <Route path='/products' element={ <AllProductsPage />} />
          <Route path='/products/:id' element={ <DetailProductPage />} />
          <Route path='/products/create' element={ <CreateProductPage />} />
          <Route path='/products/:id/update' element={ <UpdateProductPage />} />
        </Route>

        {/* Rutas Publicas */}
        <Route path='/login' element={ <LoginPage />} />
        <Route path='/register' element={ <RegisterPage />} />
        <Route path="*" element={<NoMatchPage />} />

      </Routes>
    </Provider>
  )
}

export default MainRouter

