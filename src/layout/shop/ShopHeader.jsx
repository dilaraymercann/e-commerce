import { ChevronRight } from "lucide-react";
import ShopCategoryCard from "../../components/shop/ShopCategoryCard";
import Breadcrumb from "../../components/main/BreadCrumb";
import shopCategories from "../../data/categories.json";

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