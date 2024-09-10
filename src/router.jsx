import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Home from "./pages/Home/Home"
import Product from "./pages/Product"
import Category from "./pages/Category"
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import Favorite from "./pages/Favorite"
import Orders from "./pages/Orders"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"
import NotFound from "./pages/NotFound"
import Blog from "./pages/Blog"


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route index element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
