import { useEffect, useState } from "react";
import Container from "./Container";
import FetchData from "../axios/config";

export default function Highlights() {
  const [highlightsData, setHighlightsData] = useState([]);

  const getProds = async () => {
    try {
      const response = await FetchData.get(`/highlights`);
      const data = response.data;
      setHighlightsData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProds();
  }, []);

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {highlightsData.map((item) => (
        <div key={item._id} className="relative h-60 rounded-lg shadow-md cursor-pointer overflow-hidden group">
          <div className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-110" style={{ backgroundImage: `url(${item.image})`, color: item.color }}/>
          <div>
            <div>
              <h3>{item.name}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
