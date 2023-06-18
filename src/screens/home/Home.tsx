import FirstContent from "../../components/Content/FirstContent/FirstContent";
import FourthContent from "../../components/Content/FourthContent/FourthContent";
import SecContent from "../../components/Content/SecContent/SecContent";
import ThirdContent from "../../components/Content/ThirdContent/ThirdContent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Layout>
        <FirstContent />
        <SecContent />
        <ThirdContent />
        <FourthContent />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
