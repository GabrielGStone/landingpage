import { FC, useState } from "react";
import { MenuNavButtons, MenuNavContainer, MenuBar, CloseMenu } from "./styles";

interface menuProps {
  setMenuOpen: any;
}

const Menu: FC<menuProps> = ({ setMenuOpen }) => {
  const [isActive, setIsActive] = useState("");

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
    <MenuBar>
      <MenuNavContainer id="menu-bar">
        <CloseMenu onClick={() => handleCloseMenu()}>x</CloseMenu>
        <MenuNavButtons
          isActive={isActive === "Home"}
          onClick={() => handleNavClick("Home")}
        >
          Home
        </MenuNavButtons>
        <MenuNavButtons
          isActive={isActive === "About"}
          onClick={() => handleNavClick("About")}
        >
          About me
        </MenuNavButtons>
        <MenuNavButtons
          isActive={isActive === "Projects"}
          onClick={() => handleNavClick("Projects")}
        >
          Projects
        </MenuNavButtons>
        <MenuNavButtons
          isActive={isActive === "Contact"}
          onClick={() => handleNavClick("Contact")}
        >
          Contact
        </MenuNavButtons>
      </MenuNavContainer>
    </MenuBar>
  );
};

export default Menu;
