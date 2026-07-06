const FeaturedSection = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex items-center justify-center">

                <div className="">
                    <img
                        src="/asianpeople.png"
                        alt="Featured"
                        className="w-[120vh]"
                    />
                </div>

                <div className="flex flex-col gap-2 w-[50vh]">
                    <p className="text-sm font-bold uppercase text-[#BDBDBD]">
                        SUMMER 2020
                    </p>

                    <h2 className="font-montserrat font-bold! leading-tight text-[#252B42]">
                        Part of the Neural Universe
                    </h2>

                    <p className="font-montserrat text-lg leading-8 text-[#737373]">
                        We know how large objects will act, but things on a small scale.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-[#2DC071] text-sm font-bold text-white py-3 px-10 rounded">
                            BUY NOW
                        </button>

                        <button className="border border-[#2DC071] bg-white text-sm font-bold text-[#2DC071] py-3 px-10 rounded">
                            READ MORE
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedSection;