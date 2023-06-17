import FirstContent from "../../components/Content/FirstContent/FirstContent";
import FourthContent from "../../components/Content/FourthContent/FourthContent";
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
      <FirstContent />
      <SecContent />
      <ThirdContent />
      <FourthContent />
      <Footer />
    </>
  );
};

export default Home;
