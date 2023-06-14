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
    </MenuBar>
  );
};

export default Menu;
