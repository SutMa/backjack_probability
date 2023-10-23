import { PrimaryNav, MenuLink, Menu, Logo } from "./NavElement";
import { HOME, ABOUT_US, CHARTS, TERMS, GAME } from "../../data/routes";

const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Logo>The Gamblers Inc.</Logo>
        <Menu>
          <MenuLink to={HOME}>Home</MenuLink>
          <MenuLink to={GAME}>Play the Game</MenuLink>
          <MenuLink to={ABOUT_US}>About Us</MenuLink>
          <MenuLink to={CHARTS}>Charts</MenuLink>
          <MenuLink to={TERMS}>Terms</MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
};

export default Navbar;
