import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FetchData from "../axios/config";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";


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
      transitionDuration={4000}
      className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
      customLeftArrow={<CustomLeftArrow/>}
      customRightArrow={<CustomRightArrow/>}>


      {categories.map((item)=>(
        <Link className="flex items-center gap-5 w-fit h-20 " key={item._id}
        to={`category/${item?._base}`}>
          <img className="w-16 h-16 rounded-full" src={item.image} alt="img-cat" />
          <p className="text-sm font-semibold">{item.name}</p>
        </Link>
      ))}
    </Carousel>
    </>
    
  )
}
