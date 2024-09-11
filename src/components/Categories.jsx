import { useEffect, useState } from "react";
import Container from "./Container";
import FetchData from "../axios/config";
import { Link } from "react-router-dom";

export default function Categories() {

  const [categories, setCategories] = useState([]);

  const getProds = async () => {
    try {
      const response = await FetchData.get("/categorias");
      const data = response.data;
      setCategories(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getProds();
  },[]);






  return (
    <Container>
      <>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">Categorias Populares</h1>
          <Link to={"/categorias/tvAndAudio"}>Ver todas as categorias{" "}
          <span className="inline-flex w-full h-[1px] bg-white absolute bottom-0 left-0 transform translate-x-[105%] group-hover:translate-x-0 duration-300"/>
          </Link>
          
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-3"/>
      </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7"> 
        {categories.map((item)=>(
        <Link className="w-full h-auto relative group overflow-hidden" to={`/categorias/${item._base}`} key={item._id}>
          <img className="w-full h-auto rounded-md group-hover:scale-110 duration-300" src={item.image} alt="categoryImage" />
          <div className="absolute bottom-3 w-full text-center">
            <p className="text-sm md:text-base font-bold">{item.name}</p>
          </div>
        </Link>
        ))} 
        </div>
        
      </>
    </Container>
  )
}
