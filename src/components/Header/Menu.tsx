import { FC, useState } from "react";
import {
  MenuNavButtons,
  MenuNavContainer,
  MenuBar,
  CloseMenu,
  SiteLogo,
  Arrow,
  Box,
  SiteText,
} from "./styles";
import x from "../../assets/x.svg";
import { images, text, sites } from "./constants";
interface menuProps {
  setMenuOpen: any;
  menuOpen: boolean;
}

const Menu: FC<menuProps> = ({ setMenuOpen, menuOpen }) => {
  const [isActive, setIsActive] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [siteIsOpen, setSiteIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    setIsActive(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    const MenuNavContainer = document.querySelector("#menu-bar");
    if (MenuNavContainer) {
      MenuNavContainer.classList.add("closed");
    }
  };

  return (
    <MenuBar menuOpen={menuOpen}>
      <MenuNavContainer id="menu-bar">
        <CloseMenu onClick={() => handleCloseMenu()}>
          <img src={x} style={{ width: "14px" }} />
        </CloseMenu>
        <SiteLogo style={{ height: 40 }}>
          <img src={images.logo2} alt="logo" />
        </SiteLogo>
        <MenuNavButtons
          isActive={isActive === "Nerdweb"}
          onClick={() => handleNavClick("Nerdweb")}
        >
          Nerdweb
        </MenuNavButtons>
        <MenuNavButtons
          isActive={isActive === "Serviços"}
          onClick={() => handleNavClick("Serviços")}
        >
          Serviços
        </MenuNavButtons>
        <MenuNavButtons
          isActive={isActive === "Blog"}
          onClick={() => handleNavClick("Blog")}
        >
          Blog
        </MenuNavButtons>
        <MenuNavButtons
          isActive={isActive === "Atendimento"}
          onClick={() => handleNavClick("Atendimento")}
        >
          Atendimento
        </MenuNavButtons>
      </MenuNavContainer>
      <div style={{ marginTop: "80%", color: "#5EB7F2" }}>
        <MenuNavButtons onClick={() => setSiteIsOpen(!siteIsOpen)}>
          {text.sites}
          <Arrow src={images.arrow} alt="v" menuIsOpen={siteIsOpen} />
        </MenuNavButtons>
        <Box siteIsOpen={siteIsOpen}>
          {sites.map((data) => (
            <SiteText>{data}</SiteText>
          ))}
        </Box>
        <MenuNavButtons> {text.redes}</MenuNavButtons>
        <MenuNavButtons>{text.commerce}</MenuNavButtons>
        <MenuNavButtons>{text.midia}</MenuNavButtons>
        <MenuNavButtons>{text.landing}</MenuNavButtons>
      </div>
    </MenuBar>
  );
};

export default Menu;
