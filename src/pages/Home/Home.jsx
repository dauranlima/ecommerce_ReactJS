import BannerCat from "../../components/BannerCat";
import Container from "../../components/Container";
import Highlights from "../../components/Highlights";
import Homebanner from "../../components/Homebanner";


export default function Home() {
  return (
    <>
      <div>
        <BannerCat/>
        <Homebanner/>
        <Highlights/>
      </div>
    </>
  );
}
