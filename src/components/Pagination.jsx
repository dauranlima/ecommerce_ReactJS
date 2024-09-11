import { useEffect, useState } from "react";
import FetchData from "../axios/config";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard";

const Items = ({ currentItems }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {currentItems &&
        currentItems?.map((item) => (
          <ProductCard key={item?._id} item={item} />
        ))}
    </div>
  );
};

export default function Pagination() {
  const [products, setProducts] = useState([]);


  const getProds = async () => {
    try {
      const response = await FetchData.get("/produtos");
      const data = response.data;
      setProducts(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getProds();
  },[]);

  const itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % products.length;
    const newStart = newOffset + 1;
    setItemOffset(newOffset);
    setItemStart(newStart);
  };



  return (

    <>
    <Items currentItems={currentItems} />
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageLinkClassName="w-9 h-9 border[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
        pageClassName="mr-6"
        containerClassName="flex text-base font-semibold py-10"
        activeClassName="bg-black text-white"
      />
      <p>
        Produtos {itemStart} de {Math.min(endOffset, products?.length)}{" "}
        no total de {products?.length}
      </p>
    </div>
  </>
  )
}
