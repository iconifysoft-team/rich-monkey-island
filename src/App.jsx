import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Ownership from "./components/Ownership";
import Roadmap from "./components/Roadmap";
import Slider from "./components/Slider";
import Story from "./components/Story";
import Team from "./components/Team";
import Footer from "./footer";

const App = () => {
  return (
    <>
      <div className="custom-container">
        <Navbar />
        <Banner />
        <Slider />
        <Ownership />
        <Story />
        <Roadmap />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default App;
