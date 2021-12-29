import Banner from "./components/Banner";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Ownership from "./components/Ownership";
import Roadmap from "./components/Roadmap";
import Story from "./components/Story";
import Team from "./components/Team";

const App = () => {
  return (
    <>
      <>
        <Navbar />
        <Banner />
        <Ownership />
        <Story />
        <Roadmap />
        <Team />
        <Footer />
      </>
    </>
  );
};

export default App;
