import { Arrow, Container, NavButtons } from "./styles";
import { images, text } from "./constants";
import CustomInput from "../Input/Input";

const NavBar = () => {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <NavButtons>
          {text.sites}
          <Arrow src={images.arrow} alt="v" />
        </NavButtons>
        <NavButtons> {text.redes}</NavButtons>
        <NavButtons>{text.commerce}</NavButtons>
        <NavButtons>{text.midia}</NavButtons>
        <NavButtons>{text.landing}</NavButtons>
      </div>

      <CustomInput></CustomInput>
    </Container>
  );
};

export default NavBar;
