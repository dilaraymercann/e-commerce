import { useSelector } from "react-redux";
import BestsellerCard from "../../components/productdetail/BestsellerCard";

const BestsellerProducts = () => {
    const products = useSelector(
        (state) => state.product.productList
    );

    const bestsellerProducts = [...products]
        .sort((a, b) => b.sell_count - a.sell_count)
        .slice(0, 8);

    return (
        <section className="bg-[#FAFAFA] py-16 font-montserrat">
            <div className="mx-auto max-w-[70vw]">

                <h2 className="text-2xl font-bold text-[#252B42]">
                    BESTSELLER PRODUCTS
                </h2>

                <div className="my-8 h-px bg-[#ECECEC]" />

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {bestsellerProducts.map((product) => (
                        <BestsellerCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default BestsellerProducts;