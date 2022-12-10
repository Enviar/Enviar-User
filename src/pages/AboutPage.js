import Navbar from "../parts/Navbar";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import About from "../parts/AboutPage/About";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Header currentPage="about" />
      <About />
      <Footer />
    </>
  );
}
