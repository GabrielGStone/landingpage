import { Arrow, Container, NavButtons, Banner, BannerImage } from "./styles";
import { images, text } from "./constants";
import CustomInput from "../Input/Input";
import Sites from "../Sites/Sites";
import { useState } from "react";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <Container>
        <div style={{ display: "flex" }}>
          <NavButtons onClick={() => setMenuIsOpen(!menuIsOpen)}>
            {text.sites}
            <Arrow src={images.arrow} alt="v" menuIsOpen={menuIsOpen} />
          </NavButtons>
          <NavButtons> {text.redes}</NavButtons>
          <NavButtons>{text.commerce}</NavButtons>
          <NavButtons>{text.midia}</NavButtons>
          <NavButtons>{text.landing}</NavButtons>
        </div>

        <CustomInput></CustomInput>
      </Container>
      <Banner>
        <Sites isOpen={menuIsOpen} />
        <BannerImage
          src={images.banner}
          alt=""
          onClick={() => setMenuIsOpen(false)}
        />
      </Banner>
    </>
  );
};

export default NavBar;
