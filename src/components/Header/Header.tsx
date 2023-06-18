import { useEffect, useState } from "react";
import { images } from "./constants";
import Menu from "./Menu";
import {
  Container,
  HeaderIcon,
  NavButtons,
  NavContainer,
  SiteLogo,
} from "./styles";

const Header = () => {
  const [isActive, setIsActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    setIsActive(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container justify={screenWidth > 1000} menuOpen={menuOpen}>
      <SiteLogo>
        <img src={images.logo} alt="logo" />
      </SiteLogo>
      {screenWidth > 1000 ? (
        <NavContainer>
          <NavButtons
            isActive={isActive === "Nerdweb"}
            onClick={() => handleNavClick("Nerdweb")}
          >
            Nerdweb
          </NavButtons>
          <NavButtons
            isActive={isActive === "Serviços"}
            onClick={() => handleNavClick("Serviços")}
          >
            Serviços
          </NavButtons>
          <NavButtons
            isActive={isActive === "Blog"}
            onClick={() => handleNavClick("Blog")}
          >
            Blog
          </NavButtons>
          <NavButtons
            isActive={isActive === "Atendimento"}
            onClick={() => handleNavClick("Atendimento")}
          >
            Atendimento
          </NavButtons>
        </NavContainer>
      ) : (
        <>
          <div>
            <HeaderIcon src={images.account} alt="account" />
            <HeaderIcon src={images.cart} alt="cart" />
            <HeaderIcon
              src={images.menu}
              alt="="
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </>
      )}
    </Container>
  );
};

export default Header;
