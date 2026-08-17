import { Link } from "react-router-dom";
import { getCategoryUrl } from "../../utils/categoryUtils";

const ShopCategoryCard = ({ category }) => {
    return (
        <Link
            to={getCategoryUrl(category)}
            className="group relative block h-[223px] overflow-hidden !no-underline"
        >
            <img
                src={category.img}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white">
                <h3 className="font-montserrat text-base font-bold">
                    {category.title}
                </h3>

                <p className="mt-2 font-montserrat text-sm font-bold">
                    Rating: {category.rating}
                </p>
            </div>
        </Link>
    );
};

export default ShopCategoryCard;