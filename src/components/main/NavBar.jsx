import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap";

import {
    getCategoryGender,
    getCategoryUrl,
} from "../../utils/categoryUtils";

const NavBar = () => {
    const user = useSelector((state) => state.client.user);

    const categories = useSelector(
        (state) => state.product.categories
    );

    const location = useLocation();

    const isLoggedIn = Boolean(user?.email);

    const womenCategories = categories.filter(
        (category) => getCategoryGender(category) === "kadin"
    );

    const menCategories = categories.filter(
        (category) => getCategoryGender(category) === "erkek"
    );

    const cart = useSelector(
        (state) => state.shoppingCart.cart
    );
    const cartItemCount = cart.reduce(
        (total, item) => total + item.count,
        0
    );

    return (
        <Navbar className="bg-white px-4 py-0">
            <div className="flex w-full items-center px-4 py-4">
                <div className="flex items-center gap-28">
                    <NavbarBrand
                        tag={Link}
                        to="/"
                        className="!text-[#252B42] font-montserrat text-2xl font-bold"
                    >
                        Bandage
                    </NavbarBrand>

                    <Nav className="flex items-center gap-6 font-montserrat text-sm font-bold">
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/"
                                className="!p-0 !text-[#737373]"
                            >
                                Home
                            </NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                                nav
                                caret
                                className="!p-0 !text-[#737373]"
                            >
                                Shop
                            </DropdownToggle>

                            <DropdownMenu className="!min-w-[330px] !border-0 !p-5 shadow-lg">
                                <div className="grid grid-cols-2 gap-10">
                                    <div>
                                        <h6 className="mb-5 font-montserrat text-sm font-bold text-[#252B42]">
                                            Kadın
                                        </h6>

                                        <div className="flex flex-col gap-4">
                                            {womenCategories.map((category) => (
                                                <Link
                                                    key={category.id}
                                                    to={getCategoryUrl(category)}
                                                    className="font-montserrat text-sm font-bold !text-[#737373] !no-underline hover:!text-[#23A6F0]"
                                                >
                                                    {category.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h6 className="mb-5 font-montserrat text-sm font-bold text-[#252B42]">
                                            Erkek
                                        </h6>

                                        <div className="flex flex-col gap-4">
                                            {menCategories.map((category) => (
                                                <Link
                                                    key={category.id}
                                                    to={getCategoryUrl(category)}
                                                    className="font-montserrat text-sm font-bold !text-[#737373] !no-underline hover:!text-[#23A6F0]"
                                                >
                                                    {category.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/about"
                                className="!p-0 !text-[#737373]"
                            >
                                About
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/blog"
                                className="!p-0 !text-[#737373]"
                            >
                                Blog
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/contact"
                                className="!p-0 !text-[#737373]"
                            >
                                Contact
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/pages"
                                className="!p-0 !text-[#737373]"
                            >
                                Pages
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                <div className="ml-auto flex items-center gap-6 font-montserrat text-sm font-bold text-[#23A6F0]">
                    {isLoggedIn ? (
                        <div className="flex items-center gap-2 text-[#23A6F0]">
                            <UserRound className="size-4" />

                            <span>
                                {user.name || user.email}
                            </span>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            state={{ from: location.pathname }}
                            className="flex items-center gap-1 !text-[#23A6F0] !no-underline"
                        >
                            <UserRound className="size-4" />
                            <span>Login / Register</span>
                        </Link>
                    )}

                    <button className="border-0 bg-transparent p-0 text-[#23A6F0]">
                        <Search className="size-5" />
                    </button>

                    <UncontrolledDropdown>
                        <DropdownToggle
                            tag="button"
                            className="flex items-center gap-1 border-0 bg-transparent p-0 !text-[#23A6F0]"
                        >
                            <ShoppingCart className="size-5" />

                            <span className="text-xs">
                                {cartItemCount}
                            </span>
                        </DropdownToggle>

                        <DropdownMenu
                            end
                            className="!min-w-[360px] !border-0 !p-0 shadow-lg"
                        >
                            <div className="p-4">
                                <h6 className="font-montserrat text-base font-bold text-[#252B42]">
                                    Sepetim ({cartItemCount} Ürün)
                                </h6>
                            </div>

                            <div className="max-h-[400px] overflow-y-auto">
                                {cart.length === 0 ? (
                                    <p className="p-4 text-sm text-[#737373]">
                                        Sepetiniz boş.
                                    </p>
                                ) : (
                                    cart.map((item) => (
                                        <div
                                            key={item.product.id}
                                            className="flex gap-4 border-t border-[#E8E8E8] p-4"
                                        >
                                            <img
                                                src={item.product.images?.[0]?.url}
                                                alt={item.product.name}
                                                className="h-20 w-20 rounded object-cover"
                                            />

                                            <div className="flex flex-1 flex-col">
                                                <h6 className="line-clamp-1 font-montserrat text-sm font-bold text-[#252B42]">
                                                    {item.product.name}
                                                </h6>

                                                <p className="mt-1 text-xs text-[#737373]">
                                                    Adet: {item.count}
                                                </p>

                                                <p className="mt-auto text-sm font-bold text-[#E77C40]">
                                                    ${item.product.price}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {cart.length > 0 && (
                                <div className="flex gap-3 border-t border-[#E8E8E8] p-4">
                                    <Link
                                        to="/cart"
                                        className="flex-1 rounded border border-[#BDBDBD] bg-white py-3 text-center text-sm font-bold !text-[#252B42] !no-underline"
                                    >
                                        Sepete Git
                                    </Link>

                                    <button className="flex-1 rounded bg-[#E77C40] py-3 text-sm font-bold text-white">
                                        Siparişi Tamamla
                                    </button>
                                </div>
                            )}
                        </DropdownMenu>
                    </UncontrolledDropdown>

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