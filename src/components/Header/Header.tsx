import { useEffect, useState } from "react";
import { images } from "./constants";
import Menu from "./Menu";
import { Container, NavButtons, NavContainer, SiteLogo } from "./styles";

const Header = () => {
  const [padding, setPadding] = useState("24px 10%");
  const [isActive, setIsActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 120) {
        setPadding("10px 10%");
      } else {
        setPadding("24px 10%");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    setIsActive(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container padding={padding}>
      <SiteLogo>
        {/* <img src="a" alt="logo" /> */}
        StoneDev
      </SiteLogo>
      {screenWidth > 1000 ? (
        <NavContainer>
          <NavButtons
            isActive={isActive === "Home"}
            onClick={() => handleNavClick("Home")}
          >
            Home
          </NavButtons>
          <NavButtons
            isActive={isActive === "About"}
            onClick={() => handleNavClick("About")}
          >
            About me
          </NavButtons>
          <NavButtons
            isActive={isActive === "Projects"}
            onClick={() => handleNavClick("Projects")}
          >
            Projects
          </NavButtons>
          <NavButtons
            isActive={isActive === "Contact"}
            onClick={() => handleNavClick("Contact")}
          >
            Contact
          </NavButtons>
        </NavContainer>
      ) : (
        <>
          {!menuOpen ? (
            <img
              src={images.menu}
              alt="="
              style={{ width: "30px" }}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <Menu setMenuOpen={setMenuOpen} />
          )}
        </>
      )}
    </Container>
  );
};

export default Header;
