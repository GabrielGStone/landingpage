import Banner from "../../components/Banner/Banner";
import FirstContent from "../../components/Content/FirstContent/FirstContent";
import SecContent from "../../components/Content/SecContent/SecContent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Banner />
      <FirstContent />
      <SecContent />
      <Footer />
    </>
  );
};

export default Home;
