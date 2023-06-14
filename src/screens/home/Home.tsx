import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <NavBar />
        <Banner /> {/* fazer responsivo */}
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
