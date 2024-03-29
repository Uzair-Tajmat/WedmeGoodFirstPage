import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Corousel from "./Components/Corosel";
import VenueSection from "./Components/MainSectionVenuePart";
import MainSection2 from "./Components/MainSection2";
import Makeup from "./Components/MakeupSection";
import Makeupdata from "./store/makeupData";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Corousel />
      <VenueSection />
      <MainSection2 />
      <Makeup makeUpdata={Makeupdata} />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
