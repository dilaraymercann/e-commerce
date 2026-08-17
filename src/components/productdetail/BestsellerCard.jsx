import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from "reactstrap";

const BestsellerCard = ({ product }) => {
    const imageUrl = product.images?.[0]?.url;

    const oldPrice = (product.price * 1.25).toFixed(2);

    return (
        <Card className="rounded-0 border-0 shadow-none">
            <div className="overflow-hidden">
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="h-[40vh] w-full object-cover transition duration-500 hover:scale-105"
                />
            </div>

            <CardBody className="px-0 py-6">
                <CardTitle className="mb-2 font-montserrat text-base font-bold text-[#252B42]">
                    {product.name}
                </CardTitle>

                <CardSubtitle className="mb-3 line-clamp-2 font-montserrat text-sm text-[#737373]">
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
            </CardBody>
        </Card>
    );
};

export default BestsellerCard;