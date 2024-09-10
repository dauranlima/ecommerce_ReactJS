import { useEffect, useState } from "react";
import Container from "./Container";
import FetchData from "../axios/config";

export default function Highlights() {

  const [HighlightsData, setHighlightsData] = useState([]);
  
  const getProds = async () => {
    try {
      const response = await FetchData.get(`/highlights${_id}`);
      const data = response.data;
      setHighlightsData(data);
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
    {
      HighlightsData.map((item) =>(
        <div key={item._id}>
        <div>
          <img src={item.image} alt="img_high" />
        </div>
        <h3>{item.name}</h3>
        <p>{item.title}</p>
        </div>
      ))
    }
      </Container>
    )
}
