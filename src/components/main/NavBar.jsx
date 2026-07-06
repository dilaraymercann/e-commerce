import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

const NavBar = () => {
    return (
        <Navbar className="bg-white px-4 py-0">
            <div className="flex w-full items-center px-4 py-4">
                <div className="flex items-center gap-28">
                    <NavbarBrand
                        href="/"
                        className="!text-[#252B42] font-montserrat text-2xl font-bold "
                    >
                        Bandage
                    </NavbarBrand>

                    <Nav className="flex items-center gap-6 font-montserrat text-sm font-bold">
                        <NavItem>
                            <NavLink href="/" className="!p-0 !text-[#737373]">
                                Home
                            </NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="!p-0 !text-[#737373]">
                                Shop
                            </DropdownToggle>

                            <DropdownMenu>
                                <DropdownItem>Men</DropdownItem>
                                <DropdownItem>Women</DropdownItem>
                                <DropdownItem>Accessories</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink href="/about" className="!p-0 !text-[#737373]">
                                About
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/blog" className="!p-0 !text-[#737373]">
                                Blog
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/contact" className="!p-0 !text-[#737373]">
                                Contact
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/pages" className="!p-0 !text-[#737373]">
                                Pages
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                <div className="ml-auto flex items-center gap-6 font-montserrat text-sm font-bold text-[#23A6F0]">
                    <button className="flex items-center gap-1 border-0 bg-transparent p-0 text-[#23A6F0]">
                        <UserRound className="size-4" />
                        <span>Login / Register</span>
                    </button>

                    <button className="border-0 bg-transparent p-0 text-[#23A6F0]">
                        <Search className="size-5" />
                    </button>

                    <button className="flex items-center gap-1 border-0 bg-transparent p-0 text-[#23A6F0]">
                        <ShoppingCart className="size-5" />
                        <span className="text-xs">1</span>
                    </button>

                    <button className="flex items-center gap-1 border-0 bg-transparent p-0 text-[#23A6F0]">
                        <Heart className="size-5" />
                        <span className="text-xs">1</span>
                    </button>
                </div>
            </div>
        </Navbar>
    );
};

export default NavBar;