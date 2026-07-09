const WorkWithUs = () => {
    return (
        <section className="font-montserrat">
            <div className="grid h-[600px] grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center bg-[#2A7CC7] px-20 py-16 text-white">
                    <div className="max-w-[30vw]">
                        <p className="mb-4 text-sm font-bold">
                            WORK WITH US
                        </p>

                        <h2 className="mb-6 text-5xl font-bold leading-tight">
                            Now Let's grow Yours
                        </h2>

                        <p className="mb-8 text-sm leading-6 text-white/80">
                            The gradual accumulation of information about atomic and
                            small-scale behavior during the first quarter of the 20th century.
                        </p>

                        <button className="rounded border border-white px-8 py-3 text-sm font-bold">
                            Button
                        </button>
                    </div>
                </div>
                <div className="h-[600px]">
                    <img
                        src="/workwithus.jpg"
                        alt="Work With Us"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default WorkWithUs;