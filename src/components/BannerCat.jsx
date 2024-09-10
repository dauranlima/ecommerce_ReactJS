import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FetchData from "../axios/config";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



export default function BannerCat() {

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

    <>
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      transitionDuration={2000}
      className="flex flex-row p4 max-w-screen-xl
      mx-auto lg:px-0 relative"
    >
      {categories.map((item)=>(
        <Link className="flex flex-1 items-center gap-x-2 p-1 w-16 h-16 border-gray-100 mr-1 hover:border-skyText hover:shadow-lg" key={item._id}>
          <img className="w-10 h-10 rounded-full object-cover" src={item.image} alt="img-cat" />
          <p className="text-sm font-semibold">{item.name}</p>
        </Link>
      ))}
    </Carousel>
    </>
    
  )
}
