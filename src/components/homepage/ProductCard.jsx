import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { gender, categoryName, categoryId } = useParams();

    const defaultColors = [
        "#23A6F0",
        "#23856D",
        "#E77C40",
        "#252B42",
    ];

    const imageUrl = product.images?.[0]?.url;

    const oldPrice = (product.price * 1.25).toFixed(2);

    const productNameSlug = product.name
        .toLocaleLowerCase("tr-TR")
        .replace(/ı/g, "i")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

    const productUrl = `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product.id}`;

    return (
        <Link
            to={productUrl}
            className="block cursor-pointer !no-underline transition duration-300 hover:-translate-y-1"
        >
            <Card className="rounded-0 border-0 shadow-none transition duration-300 hover:shadow-lg">
                <div className="overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={product.name}
                        className="h-90 w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>

                <CardBody className="flex flex-col items-center gap-2 px-0 py-6">
                    <CardTitle className="font-montserrat text-base font-bold text-[#252B42]">
                        {product.name}
                    </CardTitle>

                    <CardSubtitle className="line-clamp-2 text-center font-montserrat text-sm text-[#737373]">
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

                    <div className="mt-1 flex gap-2">
                        {defaultColors.map((color, index) => (
                            <span
                                key={index}
                                className="h-4 w-4 rounded-full"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Link>
    );
};

export default ProductCard;