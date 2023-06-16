import Banner from "../../components/Banner/Banner";
import FirstContent from "../../components/Content/FirstContent/FirstContent";
import SecContent from "../../components/Content/SecContent/SecContent";
import ThirdContent from "../../components/Content/ThirdContent/ThirdContent";
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
      <ThirdContent />
      <Footer />
    </>
  );
};

export default Home;
