import { useSelector } from "react-redux";

import ShopCategoryCard from "../../components/shop/ShopCategoryCard";
import Breadcrumbs from "../../components/main/BreadCrumb";

const ShopHeader = () => {
    const categories = useSelector(
        (state) => state.product.categories
    );

    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return (
        <section className="bg-[#FAFAFA] py-10 font-montserrat">
            <div className="mx-auto max-w-[70vw] px-4">

                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-[#252B42]">
                        Shop
                    </h1>

                    <Breadcrumbs />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {topCategories.map((category) => (
                        <ShopCategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ShopHeader;