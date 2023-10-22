import { PrimaryNav, MenuLink, Menu } from "./NavElement";
import { CgCardSpades } from "react-icons/cg";
import { HOME, ABOUT_US, CHARTS, TERMS } from "../../data/routes";

const Navbar = () => {
    return (
        <>
            <PrimaryNav>
                <Menu>
                    <CgCardSpades size="50px" color='red'/>
                    <MenuLink to={HOME}>
                        Home
                    </MenuLink>
                    <MenuLink to={ABOUT_US}>
                        About Us
                    </MenuLink>
                    <MenuLink to={CHARTS}>
                        Charts
                    </MenuLink>
                    <MenuLink to={TERMS}>
                        Terms
                    </MenuLink>
                    <CgCardSpades size="50px" color='red'/>
                </Menu>
            </PrimaryNav>
        </>
    )
}

export default Navbar;