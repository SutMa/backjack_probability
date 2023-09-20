import { PrimaryNav, MenuLink, Menu } from "./NavElement";

const Navbar = () => {
    return (
        <>
            <PrimaryNav>
                <Menu>
                    <MenuLink to="/">
                        Home
                    </MenuLink>
                    <MenuLink to="/about">
                        About
                    </MenuLink>
                </Menu>
            </PrimaryNav>
        </>
    )
}

export default Navbar;