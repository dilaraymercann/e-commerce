import {
    FaHooli,
    FaLyft,
    FaStripe,
    FaAws,
    FaRedditAlien,
} from "react-icons/fa6";
import { SiPuma } from "react-icons/si";

const brands = [
    {
        icon: <FaHooli size={90} />,
    },
    {
        icon: <FaLyft size={90} />,
    },
    {
        icon: <SiPuma size={90} />,
    },
    {
        icon: <FaStripe size={90} />,
    },
    {
        icon: <FaAws size={90} />,
    },
    {
        icon: <FaRedditAlien size={90} />,
    },
];

const BrandLogos = () => {
    return (
        <section className="bg-[#FAFAFA] py-16">
            <div className="mx-auto flex max-w-[70vw] flex-wrap items-center justify-between gap-8 px-4 text-[#737373]">

                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="transition duration-300 hover:scale-110 hover:text-[#252B42]"
                    >
                        {brand.icon}
                    </div>
                ))}

            </div>
        </section>
    );
};

export default BrandLogos;