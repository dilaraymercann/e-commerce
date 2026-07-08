import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from "reactstrap";

const BestsellerCard = ({ product }) => {
    return (
        <Card className="rounded-0 border-0 shadow-none">
            <img
                src={product.image}
                alt={product.title}
                className="h-[40vh] w-full object-cover transition duration-500 hover:scale-105"
            />

            <CardBody className="px-0 py-6">
                <CardTitle className="mb-2 font-montserrat text-base font-bold text-[#252B42]">
                    {product.title}
                </CardTitle>

                <CardSubtitle className="mb-3 font-montserrat text-sm font-bold text-[#737373]">
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
            </CardBody>
        </Card>
    );
};

export default BestsellerCard;