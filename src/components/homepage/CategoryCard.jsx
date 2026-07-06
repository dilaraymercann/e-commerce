import { Card, CardImg, CardImgOverlay } from "reactstrap";

const CategoryCard = ({ category }) => {
    return (
        <Card inverse className="!h-full overflow-hidden border-0 rounded-0">
            <CardImg
                src={category.image}
                alt={category.title}
                className="!h-full !w-full object-cover"
            />

            <CardImgOverlay className="flex items-end p-6">
                <button className="bg-white px-10 py-3 font-montserrat text-sm font-bold text-[#252B42]">
                    {category.title}
                </button>
            </CardImgOverlay>
        </Card>
    );
};

export default CategoryCard;