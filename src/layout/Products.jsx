import ProductCard from "../components/ProductCard";

const products = [
    {
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "16.48",
        newPrice: "6.48",
        image: "/category1.jpg",
        colors: [
            "#23A6F0",
            "#23856D",
            "#E77C40",
            "#252B42",
        ],
    },
    {
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "16.48",
        newPrice: "6.48",
        image: "/category4.jpg",
        colors: [
            "#23A6F0",
            "#23856D",
            "#E77C40",
            "#252B42",
        ],
    },
    {
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "16.48",
        newPrice: "6.48",
        image: "/category3.jpg",
        colors: [
            "#23A6F0",
            "#23856D",
            "#E77C40",
            "#252B42",
        ],
    },
    {
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "16.48",
        newPrice: "6.48",
        image: "/category2.jpg",
        colors: [
            "#23A6F0",
            "#23856D",
            "#E77C40",
            "#252B42",
        ],
    },
    {
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "16.48",
        newPrice: "6.48",
        image: "/category1.jpg",
        colors: [
            "#23A6F0",
            "#23856D",
            "#E77C40",
            "#252B42",
        ],
    },
    {
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "16.48",
        newPrice: "6.48",
        image: "/category4.jpg",
        colors: [
            "#23A6F0",
            "#23856D",
            "#E77C40",
            "#252B42",
        ],
    },
    {
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "16.48",
        newPrice: "6.48",
        image: "/category1.jpg",
        colors: [
            "#23A6F0",
            "#23856D",
            "#E77C40",
            "#252B42",
        ],
    },
    {
        title: "Graphic Design",
        department: "English Department",
        oldPrice: "16.48",
        newPrice: "6.48",
        image: "/category2.jpg",
        colors: [
            "#23A6F0",
            "#23856D",
            "#E77C40",
            "#252B42",
        ],
    },
];

const Products = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-[1124px]">
                <div className="mb-12 text-center">
                    <p className="font-montserrat text-xl text-[#737373]">
                        Featured Products
                    </p>

                    <h2 className="mt-3 font-montserrat text-2xl font-bold text-[#252B42]">
                        BESTSELLER PRODUCTS
                    </h2>

                    <p className="mt-3 font-montserrat text-sm text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;