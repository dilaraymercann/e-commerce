import { Grid2X2, Menu } from "lucide-react";
import ProductCard from "../../components/homepage/ProductCard";
import Pagination from "../../components/main/Pagination";
import products from "../../data/products";

const ShopProducts = () => {
    return (
        <section className="py-12 font-montserrat">
            <div className="mx-auto max-w-[70vw] px-4">

                <div className="mb-12 flex items-center justify-between">

                    <p className="text-sm font-bold text-[#737373]">
                        Showing all 12 results
                    </p>

                    <div className="flex items-center gap-4">

                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-[#737373]">
                                Views:
                            </span>

                            <button className="rounded border border-[#ECECEC] p-2">
                                <Grid2X2 size={16} />
                            </button>

                            <button className="rounded border border-[#ECECEC] p-2">
                                <Menu size={16} />
                            </button>
                        </div>

                        <select className="rounded border border-[#DDDDDD] px-4 py-2 text-sm text-[#737373]">
                            <option>Popularity</option>
                            <option>Newest</option>
                            <option>Price</option>
                        </select>

                        <button className="rounded bg-[#23A6F0] px-6 py-2 text-sm font-bold text-white">
                            Filter
                        </button>

                    </div>
                </div>
                <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}
                </div>
                <div className="mt-16 flex justify-center">

                    <Pagination />

                </div>

            </div>
        </section>
    );
};

export default ShopProducts;