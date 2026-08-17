import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Grid2X2, Menu } from "lucide-react";

import ProductCard from "../../components/homepage/ProductCard";
import Pagination from "../../components/main/Pagination";
import {
    fetchProducts,
    setOffset,
} from "../../store/actions/productActions";

const ShopProducts = () => {
    const dispatch = useDispatch();

    const { categoryId } = useParams();

    const products = useSelector(
        (state) => state.product.productList
    );

    const total = useSelector(
        (state) => state.product.total
    );

    const fetchState = useSelector(
        (state) => state.product.fetchState
    );

    const limit = useSelector(
        (state) => state.product.limit
    );

    const offset = useSelector(
        (state) => state.product.offset
    );


    const [filter, setFilter] = useState("");
    const [sortSelection, setSortSelection] = useState("");
    const [sort, setSort] = useState("");

    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    useEffect(() => {
        dispatch(
            fetchProducts({
                category: categoryId,
                filter,
                sort,
                limit,
                offset,
            })
        );
    }, [
        dispatch,
        categoryId,
        filter,
        sort,
        limit,
        offset,
    ]);

    useEffect(() => {
        dispatch(setOffset(0));
    }, [dispatch, categoryId, filter, sort]);

    const handlePageChange = (page) => {
        const newOffset = (page - 1) * limit;

        dispatch(setOffset(newOffset));

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    console.log("total:", total);
    console.log("limit:", limit);
    console.log("offset:", offset);
    console.log("totalPages:", totalPages);
    console.log("currentPage:", currentPage);

    return (
        <section className="py-12 font-montserrat">
            <div className="mx-auto max-w-[70vw] px-4">

                <div className="mb-12 flex items-center justify-between">

                    <p className="text-sm font-bold text-[#737373]">
                        Showing all {total} results
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

                        <select
                            value={sortSelection}
                            onChange={(e) => setSortSelection(e.target.value)}
                            className="rounded border border-[#DDDDDD] px-4 py-2 text-sm text-[#737373]"
                        >
                            <option value="">Sort</option>
                            <option value="price:asc">Price: Low to High</option>
                            <option value="price:desc">Price: High to Low</option>
                            <option value="rating:asc">Rating: Low to High</option>
                            <option value="rating:desc">Rating: High to Low</option>
                        </select>
                        <input
                            type="text"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            placeholder="Filter products..."
                            className="rounded border border-[#DDDDDD] px-4 py-2 text-sm text-[#737373] outline-none"
                        />

                        <button
                            onClick={() => setSort(sortSelection)}
                            className="rounded bg-[#23A6F0] px-6 py-2 text-sm font-bold text-white"
                        >
                            Filter
                        </button>

                    </div>
                </div>

                {fetchState === "FETCHING" ? (
                    <p className="text-center">Loading...</p>
                ) : (
                    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}

                <div className="mt-16 flex justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default ShopProducts;