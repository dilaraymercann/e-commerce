const AboutHero = () => {
    return (
        <section
            className="relative h-[85vh] bg-no-repeat font-montserrat"
            style={{
                backgroundImage: "url('/aboutbackground.png')",
                backgroundSize: "1050px auto",
                backgroundPosition: "right center",
            }}
        >
            <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-[80vw] ">
                    <div className="flex flex-col gap-4 max-w-[30vw]">
                        <p className="text-sm font-bold! text-[#252B42]">
                            ABOUT COMPANY
                        </p>

                        <h1 className=" text-6xl font-bold! text-[#252B42]">
                            ABOUT US
                        </h1>

                        <p className="text-xl leading-8 text-[#737373]">
                            We know how large objects will act, but things on a small scale.
                        </p>

                        <button className="rounded bg-[#23A6F0] w-[15vw] py-3 text-sm font-bold text-white">
                            Get Quote Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;