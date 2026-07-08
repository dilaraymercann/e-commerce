import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Link
            to={`/product/${product.id}`}
            className="block no-underline"
        >
            <Card className="border-0 rounded-0 shadow-none">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-90 w-full object-cover transition-transform duration-500 hover:scale-110"
                />

                <CardBody className="flex flex-col items-center gap-2 px-0 py-6">
                    <CardTitle className="font-montserrat text-base font-bold text-[#252B42]">
                        {product.title}
                    </CardTitle>

                    <CardSubtitle className="font-montserrat text-sm font-bold text-[#737373]">
                        {product.department}
                    </CardSubtitle>

                    <CardText className="flex gap-2">
                        <span className="font-montserrat text-base font-bold text-[#BDBDBD] line-through">
                            ${product.oldPrice}
                        </span>

                        <span className="font-montserrat text-base font-bold text-[#23856D]">
                            ${product.newPrice}
                        </span>
                    </CardText>

                    <div className="mt-1 flex gap-2">
                        {product.colors.map((color, index) => (
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