import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import StartProject from "./components/StartProject/StartProject";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <StartProject />
      <Footer />
    </>
  )
}