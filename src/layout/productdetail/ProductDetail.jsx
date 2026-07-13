import { useParams } from "react-router-dom";
import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import {
    FaStar,
    FaStarHalfAlt,
    FaRegStar,
} from "react-icons/fa";
import products from "../../data/products.json";
import Breadcrumb from "../../components/main/Breadcrumb";
import ProductTabs from "../../components/productdetail/ProductTabs";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));
    const galleryImages = product.gallery || [product.image];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!product) {
        return <div className="p-10">Product not found</div>;
    }

    const previousImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
        );
    };

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

    return (
        <>
            <section className="bg-[#FAFAFA] py-12 font-montserrat">
                <div className="mx-auto max-w-[80vw] pb-5">
                    <Breadcrumb />
                </div>
                <div className="mx-auto grid max-w-[70vw] grid-cols-1 gap-10 px-4 md:grid-cols-2">
                    <div>
                        <div className="relative bg-white">
                            <img
                                src={galleryImages[currentImageIndex]}
                                alt={product.title}
                                className="h-[60vh] w-full object-cover"
                            />
                            <button
                                onClick={previousImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
                            >
                                <ChevronLeft className="size-6 text-[#252B42]" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
                            >
                                <ChevronRight className="size-6 text-[#252B42]" />
                            </button>
                        </div>

                        <div className="mt-4 flex gap-4">
                            {product.gallery?.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={product.title}
                                    className="h-20 w-20 cursor-pointer object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="p-6">
                        <h2 className="mb-3 text-xl font-normal text-[#252B42]">
                            {product.title}
                        </h2>

                        <div className="mb-4 flex items-center gap-2">
                            <div className="flex items-center gap-1 text-lg">
                                {renderStars(product.rating)}
                            </div>

                            <span className="text-sm font-bold text-[#737373]">
                                {product.rating}
                            </span>

                            <span className="text-sm font-bold text-[#737373]">
                                ({product.reviewCount} Reviews)
                            </span>
                        </div>

                        <h3 className="mb-2 text-2xl font-bold text-[#252B42]">
                            ${product.newPrice}
                        </h3>

                        <p className="mb-8 text-sm font-bold text-[#737373]">
                            Availability :{" "}
                            <span className="text-[#23A6F0]">{product.stock}</span>
                        </p>

                        <p className="border-b border-[#BDBDBD] pb-8 text-sm leading-6 text-[#858585]">
                            {product.description}
                        </p>

                        <div className="my-8 flex gap-3">
                            {product.colors.map((color, index) => (
                                <span
                                    key={index}
                                    className="h-7 w-7 rounded-full"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="rounded bg-[#23A6F0] px-6 py-3 text-sm font-bold text-white">
                                Select Options
                            </button>

                            <button className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white">
                                <Heart className="size-5 text-[#252B42]" />
                            </button>

                            <button className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white">
                                <ShoppingCart className="size-5 text-[#252B42]" />
                            </button>

                            <button className="flex size-10 items-center justify-center rounded-full border border-[#E8E8E8] bg-white">
                                <Eye className="size-5 text-[#252B42]" />
                            </button>
                        </div>
                    </div>
                </div>

            </section>
            <ProductTabs product={product} />
        </>
    );
};

export default ProductDetail;