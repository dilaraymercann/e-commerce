import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import {
    FaStar,
    FaStarHalfAlt,
    FaRegStar,
} from "react-icons/fa";

import { fetchProduct } from "../../store/actions/productActions";
import Breadcrumb from "../../components/main/Breadcrumb";
import { addToCart } from "../../store/actions/shoppingCartActions";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { productId } = useParams();

    const product = useSelector(
        (state) => state.product.product
    );

    const fetchState = useSelector(
        (state) => state.product.fetchState
    );

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchProduct(productId));
        setActiveImageIndex(0);
    }, [dispatch, productId]);

    const renderStars = (rating) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(
                    <FaStar
                        key={i}
                        className="text-[#F3CD03]"
                    />
                );
            } else if (rating >= i - 0.5) {
                stars.push(
                    <FaStarHalfAlt
                        key={i}
                        className="text-[#F3CD03]"
                    />
                );
            } else {
                stars.push(
                    <FaRegStar
                        key={i}
                        className="text-[#F3CD03]"
                    />
                );
            }
        }

        return stars;
    };

    const defaultColors = [
        "#23A6F0",
        "#23856D",
        "#E77C40",
        "#252B42",
    ];

    const handlePrevImage = () => {
        if (!product.images?.length) {
            return;
        }

        setActiveImageIndex((prev) =>
            prev === 0
                ? product.images.length - 1
                : prev - 1
        );
    };

    const handleNextImage = () => {
        if (!product.images?.length) {
            return;
        }

        setActiveImageIndex((prev) =>
            prev === product.images.length - 1
                ? 0
                : prev + 1
        );
    };

    if (fetchState === "FETCHING") {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#23A6F0] border-t-transparent" />
            </div>
        );
    }

    if (fetchState === "FAILED") {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <p className="font-montserrat text-red-500">
                    Product could not be loaded.
                </p>
            </div>
        );
    }

    if (!product?.id) {
        return null;
    }

    const activeImage =
        product.images?.[activeImageIndex]?.url;

    return (
        <section className="bg-[#FAFAFA] py-12 font-montserrat">

            <div className="mx-auto max-w-[80vw] pb-8">
                <div className="mb-6 flex items-center justify-between">
                    <Breadcrumb />

                    <button
                        onClick={() => navigate(-1)}
                        className="rounded border border-[#E8E8E8] bg-white px-5 py-2 text-sm font-bold text-[#252B42] transition hover:bg-[#252B42] hover:text-white"
                    >
                        Back
                    </button>
                </div>
            </div>

            <div className="mx-auto grid max-w-[70vw] grid-cols-1 gap-14 px-4 md:grid-cols-2">
                <div>
                    <div className="relative overflow-hidden bg-white">

                        <img
                            src={activeImage}
                            alt={product.name}
                            className="h-[60vh] w-full object-cover"
                        />

                        {product.images?.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 shadow"
                                >
                                    <ChevronLeft className="size-6 text-[#252B42]" />
                                </button>

                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 shadow"
                                >
                                    <ChevronRight className="size-6 text-[#252B42]" />
                                </button>
                            </>
                        )}
                    </div>

                    <div className="mt-4 flex gap-4">
                        {product.images?.map((image, index) => (
                            <button
                                key={image.index ?? index}
                                onClick={() => setActiveImageIndex(index)}
                                className={`overflow-hidden border-2 ${activeImageIndex === index
                                    ? "border-[#23A6F0]"
                                    : "border-transparent"
                                    }`}
                            >
                                <img
                                    src={image.url}
                                    alt={product.name}
                                    className="h-20 w-20 object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="p-6">

                    <h2 className="mb-4 text-3xl font-normal text-[#252B42]">
                        {product.name}
                    </h2>

                    <div className="mb-5 flex items-center gap-3">

                        <div className="flex items-center gap-1 text-lg">
                            {renderStars(product.rating)}
                        </div>

                        <span className="text-sm font-bold text-[#737373]">
                            {product.rating}
                        </span>

                        <span className="text-sm font-bold text-[#737373]">
                            {product.sell_count} Reviews
                        </span>

                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-[#252B42]">
                        ${product.price}
                    </h3>

                    <p className="mb-8 text-sm font-bold text-[#737373]">
                        Availability:{" "}
                        <span className="text-[#23A6F0]">
                            {product.stock > 0
                                ? "In Stock"
                                : "Out of Stock"}
                        </span>
                    </p>

                    <p className="border-b border-[#BDBDBD] pb-8 text-sm leading-6 text-[#858585]">
                        {product.description}
                    </p>

                    <div className="my-8 flex gap-3">
                        {defaultColors.map((color, index) => (
                            <span
                                key={index}
                                className="h-7 w-7 rounded-full"
                                style={{
                                    backgroundColor: color,
                                }}
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-3">

                        <button className="rounded bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1b8fd1]">
                            Select Options
                        </button>

                        <button className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white">
                            <Heart className="size-5 text-[#252B42]" />
                        </button>

                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white"
                        >
                            <ShoppingCart className="size-5 text-[#252B42]" />
                        </button>

                        <button className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white">
                            <Eye className="size-5 text-[#252B42]" />
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProductDetail;