const ShopCategoryCard = ({ category }) => {
    return (
        <div className="group relative h-[30vh] overflow-hidden">
            <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white">
                <h4 className="font-montserrat text-sm font-bold">
                    {category.title}
                </h4>

                <p className="mt-2 font-montserrat text-sm font-bold">
                    {category.items}
                </p>
            </div>
        </div>
    );
};

export default ShopCategoryCard;