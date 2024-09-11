import BannerCat from "../../components/BannerCat";
import Categories from "../../components/Categories";
import Container from "../../components/Container";
import Highlights from "../../components/Highlights";
import Homebanner from "../../components/Homebanner";
import ProductList from "../../components/ProductList";


export default function Home() {
  return (
    <>
      <Container>
        <BannerCat/>
        <Homebanner/>
        <Highlights/>
        <Categories/>
        <ProductList/>
      </Container>
    </>
  );
}
