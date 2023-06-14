import { images } from "./constants";
import { Container, SiteLogo } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <SiteLogo>
        <img src={images.logo2} alt="logo" />
      </SiteLogo>
    </Container>
  );
};

export default NavBar;
