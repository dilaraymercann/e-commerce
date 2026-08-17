import { useSelector } from "react-redux";
import ProductCard from "../../components/homepage/ProductCard";

const Products = () => {
    const products = useSelector(
        (state) => state.product.productList
    );

    const fetchState = useSelector(
        (state) => state.product.fetchState
    );

    return (
        <section className="py-20">
            <div className="mx-auto max-w-[80vw]">
                <div className="mb-12 text-center">
                    <p className="font-montserrat text-xl text-[#737373]">
                        Featured Products
                    </p>

                    <h2 className="mt-3 font-montserrat text-2xl font-bold text-[#252B42]">
                        BESTSELLER PRODUCTS
                    </h2>

                    <p className="mt-3 font-montserrat text-sm text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                {fetchState === "FETCHING" ? (
                    <p className="text-center font-montserrat text-[#737373]">
                        Loading...
                    </p>
                ) : (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {products.slice(0, 8).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;