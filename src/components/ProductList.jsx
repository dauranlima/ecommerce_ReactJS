import { Link } from "react-router-dom";
import Container from "./Container";
import Pagination from "./Pagination";

export default function ProductList() {
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-4xl" >Mais procurados</h2>
          <Link>
            ver todos Produtos
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3"/>
      </div>
      <Pagination/>

    </Container>
  )
}
