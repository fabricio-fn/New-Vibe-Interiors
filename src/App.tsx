import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Product from "./components/Product/Produtc";
import Services from "./components/Services/Services";
import StartProject from "./components/StartProject/StartProject";
import VideoSection from "./components/VideoSection/VideoSection";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <VideoSection />
      <Services />
      <Product />
      <StartProject />
      <Footer />
    </>
  )
}