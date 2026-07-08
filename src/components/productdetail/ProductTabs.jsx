import { useState } from "react";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import { ChevronRight } from "lucide-react";

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <section className="bg-white py-12 font-montserrat">
            <div className="mx-auto max-w-[70vw] px-4">
                <Nav tabs className="justify-center border-b border-[#ECECEC]">
                    <NavItem>
                        <NavLink
                            onClick={() => setActiveTab("description")}
                            className={`cursor-pointer border-0 px-6 py-4 text-sm font-bold ${activeTab === "description"
                                ? "!text-[#252B42]"
                                : "!text-[#737373]"
                                }`}
                        >
                            Description
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            onClick={() => setActiveTab("additional")}
                            className={`cursor-pointer border-0 px-6 py-4 text-sm font-bold ${activeTab === "additional"
                                ? "!text-[#252B42]"
                                : "!text-[#737373]"
                                }`}
                        >
                            Additional Information
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            onClick={() => setActiveTab("reviews")}
                            className={`cursor-pointer border-0 px-6 py-4 text-sm font-bold ${activeTab === "reviews"
                                ? "!text-[#252B42]"
                                : "!text-[#737373]"
                                }`}
                        >
                            Reviews{" "}
                            <span className="text-[#23856D]">
                                ({product.reviewCount})
                            </span>
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab} className="pt-12">
                    <TabPane tabId="description">
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-[40vh] w-full rounded object-cover"
                            />

                            <div className="md:col-span-2">
                                <h3 className="mb-6 text-2xl font-bold text-[#252B42]">
                                    {product.details.description.title}
                                </h3>

                                <p className="text-sm leading-6 text-[#737373]">
                                    {product.details.description.text}
                                </p>
                            </div>
                        </div>
                    </TabPane>

                    <TabPane tabId="additional">
                        <h3 className="mb-6 text-2xl font-bold text-[#252B42]">
                            {product.details.additionalInfo.title}
                        </h3>

                        <div className="space-y-3">
                            {product.details.additionalInfo.items.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 mt-3">
                                    <ChevronRight className="size-5 text-[#737373]" />
                                    <span className="text-sm font-bold text-[#737373]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </TabPane>

                    <TabPane tabId="reviews">
                        <h3 className="mb-6 text-2xl font-bold text-[#252B42]">
                            {product.details.reviews.title}
                        </h3>

                        <div className="space-y-3 mt-3">
                            {product.details.reviews.items.map((item, index) => (
                                <p key={index} className="text-sm text-[#737373]">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </section>
    );
};

export default ProductTabs;