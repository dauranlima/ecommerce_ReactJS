import { payment } from "../assets";
import Container from "./Container";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="mt-10 ">
      <FooterTop/>
      <Container className="flex flex-col md:flex-row items-center justify-between">
        <p>
          @2024 E-commerce Solutions. All Rights reserved - Dauran Aguiar Lima
          Developer -{" "}
        </p>
        <img src={payment} alt="payment" className="object-cover" />
      </Container>
    </div>
  );
};

export default Footer;
