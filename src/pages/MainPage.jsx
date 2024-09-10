import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function MainPage() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      <Toaster position="bottom-right"
      reverseOrder={false}
      containerClassName=""
      toastOptions={{
        style:{
          backgroundColor:"black",
          color:"white",
        },
      }} />
    </div>
  )
}
