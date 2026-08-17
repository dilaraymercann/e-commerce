import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from "reactstrap";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    const defaultColors = [
        "#23A6F0",
        "#23856D",
        "#E77C40",
        "#252B42",
    ];

    const imageUrl = product.images?.[0]?.url;
    const oldPrice = (product.price * 1.25).toFixed(2);

    return (
        <Link
            to={`/product/${product.id}`}
            className="block !no-underline"
        >
            <Card className="rounded-0 border-0 shadow-none">

                {/* IMAGE */}
                <div className="overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={product.name}
                        className="h-90 w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>

                {/* CONTENT */}
                <CardBody className="flex flex-col items-center gap-2 px-0 py-6">

                    <CardTitle className="font-montserrat text-base font-bold text-[#252B42]">
                        {product.name}
                    </CardTitle>

                    <CardSubtitle className="line-clamp-2 font-montserrat text-sm text-[#737373]">
                        {product.description}
                    </CardSubtitle>

                    <CardText className="flex gap-2">
                        <span className="font-montserrat text-base font-bold text-[#BDBDBD] line-through">
                            ${oldPrice}
                        </span>

                        <span className="font-montserrat text-base font-bold text-[#23856D]">
                            ${product.price}
                        </span>
                    </CardText>

                    {/* COLORS */}
                    <div className="mt-1 flex gap-2">
                        {defaultColors.map((color, index) => (
                            <span
                                key={index}
                                className="h-4 w-4 rounded-full"
                                style={{
                                    backgroundColor: color,
                                }}
                            />
                        ))}
                    </div>

                </CardBody>

            </Card>
        </Link>
    );
};

export default ProductCard;