import StatCard from "../../components/about/StatCard";

const stats = [
    {
        value: "15K",
        label: "Happy Customers",
    },
    {
        value: "150K",
        label: "Monthly Visitors",
    },
    {
        value: "15",
        label: "Countries Worldwide",
    },
    {
        value: "100+",
        label: "Top Partners",
    },
];

const Stats = () => {
    return (
        <section className="py-15 font-montserrat">
            <div className="mx-auto max-w-[70vw] px-6">

                <div className="mb-24 grid items-center gap-16 lg:grid-cols-2">

                    <div>
                        <p className="mb-4 text-sm text-[#E74040]">
                            Problems trying
                        </p>

                        <h2 className="max-w-[30vw] text-3xl font-bold! leading-tight text-[#252B42]">
                            Met minim Mollie non desert Alamo est sit cliquey
                            dolor do met sent.
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-[30vw] leading-7 text-[#737373]">
                            Problems trying to resolve the conflict between the
                            two major realms of Classical physics:
                            Newtonian mechanics.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-12 md:grid-cols-4">

                    {stats.map((item) => (
                        <StatCard
                            key={item.label}
                            value={item.value}
                            label={item.label}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Stats;