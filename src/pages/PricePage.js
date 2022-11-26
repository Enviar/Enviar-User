import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Navbar from "../parts/Navbar";
import Price from "../parts/PricePage/Price";

export default function PricePage() {
  return (
    <>
      <Navbar />
      <Header currentPage="price" />
      <Price />
      <Footer />
    </>
  );
}
