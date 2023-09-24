import { PrimaryNav, MenuLink, Menu } from "./NavElement";
import { CgCardSpades } from "react-icons/cg";

const Navbar = () => {
    return (
        <>
            <PrimaryNav>
                <Menu>
                    <CgCardSpades size="50px" color='red'/>
                    <MenuLink to="/">
                        Home
                    </MenuLink>
                    <MenuLink to="/about">
                        About
                    </MenuLink>
                    <MenuLink to="/charts">
                        Charts
                    </MenuLink>
                    <MenuLink to="/settings">
                        Settings
                    </MenuLink>
                    <CgCardSpades size="50px" color='red'/>
                </Menu>
            </PrimaryNav>
        </>
    )
}

export default Navbar;