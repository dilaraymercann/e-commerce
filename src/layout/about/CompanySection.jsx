import BrandLogos from "../../components/main/BrandLogos";

const CompanySection = () => {
    return (
        <section className="bg-[#F9F9F9] py-24 font-montserrat">
            <div className="mx-auto max-w-full">

                <div className="mx-auto mb-20 max-w-[550px] text-center">

                    <h2 className="mb-4 text-4xl font-bold! text-[#252B42]">
                        Big Companies Are Here
                    </h2>

                    <p className="text-sm leading-5 text-[#737373]">
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics:
                        Newtonian mechanics.
                    </p>

                </div>

                <BrandLogos />

            </div>
        </section>
    );
};

export default CompanySection;