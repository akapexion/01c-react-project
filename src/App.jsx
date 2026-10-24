import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import DashboardLayout from './layout/DashboardLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import DashboardHome from './pages/dashboard/DashboardHome'
import AddProduct from './pages/dashboard/AddProduct'
import AddCategory from './pages/dashboard/AddCategory'
import BookOrder from './pages/dashboard/BookOrder'

const App = () => {
  return (
    <>

          <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/products" element={<Products/>}/>
                    </Route>


                    <Route path="/dashboard" element={<DashboardLayout/>}>
                        <Route index element={<DashboardHome/>}/>
                        <Route path="addproduct" element={<AddProduct/>}/>
                        <Route path="addcategory" element={<AddCategory/>}/>
                        <Route path="bookorder" element={<BookOrder/>}/>
                    </Route>
                </Routes>
          </BrowserRouter>

    </>
  )
}

export default App