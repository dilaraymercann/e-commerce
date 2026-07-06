import CategoryCard from "../../components/homepage/CategoryCard";

const Categories = () => {
    const categories = [
        {
            title: "MEN",
            image: "/category1.jpg",
        },
        {
            title: "WOMEN",
            image: "/category2.jpg",
        },
        {
            title: "ACCESSORIES",
            image: "/category3.jpg",
        },
        {
            title: "KIDS",
            image: "/category4.jpg",
        },
    ];

    return (
        <section className="bg-[#FAFAFA] py-20">
            <div className="mx-auto max-w-[1050px] px-4">
                <div className="mb-12 text-center">
                    <h2 className="font-montserrat text-2xl font-bold text-[#252B42]">
                        EDITOR&apos;S PICK
                    </h2>

                    <p className="mt-2 font-montserrat text-sm text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-[2fr_1fr_1fr]">
                    <div className="h-[500px]">
                        <CategoryCard category={categories[0]} />
                    </div>

                    <div className="h-[500px]">
                        <CategoryCard category={categories[1]} />
                    </div>

                    <div className="grid h-[500px] grid-rows-2 gap-6">
                        <CategoryCard category={categories[2]} />
                        <CategoryCard category={categories[3]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;