import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Home from "./pages/Home/Home"

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
