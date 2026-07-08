import bestsellerProducts from "../../data/bestsellerProducts.json";
import BestsellerCard from "./../../components/productdetail/BestsellerCard";

const BestsellerProducts = () => {
    return (
        <section className="bg-[#FAFAFA] py-16 font-montserrat">
            <div className="mx-auto max-w-[70vw]">

                <h3 className="font-bold! text-[#252B42]">
                    BESTSELLER PRODUCTS
                </h3>

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