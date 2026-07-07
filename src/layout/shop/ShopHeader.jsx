import { ChevronRight } from "lucide-react";
import ShopCategoryCard from "../../components/shop/ShopCategoryCard";
import Breadcrumb from "../../components/main/BreadCrumb";

const shopCategories = [
    {
        title: "CLOTHS",
        items: "5 Items",
        image: "/shop-card1.jpg",
    },
    {
        title: "CLOTHS",
        items: "5 Items",
        image: "/shop-card2.jpg",
    },
    {
        title: "CLOTHS",
        items: "5 Items",
        image: "/shop-card3.jpg",
    },
    {
        title: "CLOTHS",
        items: "5 Items",
        image: "/shop-card4.jpg",
    },
    {
        title: "CLOTHS",
        items: "5 Items",
        image: "/shop-card5.jpg",
    },
];

const ShopHeader = () => {
    return (
        <section className="bg-[#FAFAFA] py-10 font-montserrat">
            <div className="mx-auto max-w-[70vw] px-4">

                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[#252B42]">
                        Shop
                    </h2>

                    <Breadcrumb />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {shopCategories.map((category) => (
                        <ShopCategoryCard
                            key={category.image}
                            category={category}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ShopHeader;