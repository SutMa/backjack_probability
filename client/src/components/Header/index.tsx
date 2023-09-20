import { PrimaryNav, MenuLink, Menu } from "./NavElement";
import { CgCardSpades, CgCardHearts } from "react-icons/cg";

const Navbar = () => {
    return (
        <>
            <PrimaryNav>
                <Menu>
                    <CgCardSpades size="50px" color='white'/>
                    <MenuLink to="/">
                        Home
                    </MenuLink>
                    <MenuLink to="/about">
                        About
                    </MenuLink>
                    <CgCardHearts size="50px" color='white'/>
                </Menu>
            </PrimaryNav>
        </>
    )
}

export default Navbar;