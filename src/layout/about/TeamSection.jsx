import TeamCard from "../../components/about/TeamCard";

const teamMembers = [
    {
        id: 1,
        name: "Jerome Bell",
        company: "IBM",
        image: "/team1.jpg",
    },
    {
        id: 2,
        name: "Brooklyn Simmons",
        company: "eBay",
        image: "/team2.jpg",
    },
    {
        id: 3,
        name: "Ronald Richards",
        company: "Starbucks",
        image: "/team3.jpg",
    },
    {
        id: 4,
        name: "Floyd Miles",
        company: "Facebook",
        image: "/team4.jpg",
    },
    {
        id: 5,
        name: "Jane Cooper",
        company: "Mitsubishi",
        image: "/team1.jpg",
    },
    {
        id: 6,
        name: "Robert Fox",
        company: "IBM",
        image: "/team2.jpg",
    },
    {
        id: 7,
        name: "Leslie Alexander",
        company: "The Walt Disney Company",
        image: "/team3.jpg",
    },
    {
        id: 8,
        name: "Jacob Jones",
        company: "Starbucks",
        image: "/team4.jpg",
    },
];

const TeamSection = () => {
    return (
        <section className="bg-white py-8 font-montserrat">
            <div className="mx-auto max-w-[70vw] px-4">
                <div className="mb-14 text-center">
                    <h2 className="text-[40px] font-bold text-[#252B42]">
                        Meet Our Team
                    </h2>

                    <p className="mx-auto mt-4 max-w-[440vw] text-sm leading-6 text-[#737373]">
                        Problems trying to resolve the conflict between the two
                        major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.id}
                            member={member}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;