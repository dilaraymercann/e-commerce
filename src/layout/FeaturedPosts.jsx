import FeaturedPostCard from "../components/FeaturedPostCard";

const posts = [
    {
        image: "/post1.jpg",
        title: "Loudest à la Madison #1 (L'integral)",
        description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
    },
    {
        image: "/post2.jpg",
        title: "Loudest à la Madison #1 (L'integral)",
        description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
    },
    {
        image: "/post3.jpg",
        title: "Loudest à la Madison #1 (L'integral)",
        description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: "10 comments",
    },
];

const FeaturedPosts = () => {
    return (
        <section className="py-28">
            <div className="mx-auto max-w-[70vw] px-4">

                <div className="mb-20 text-center">

                    <p className="mb-3 font-montserrat text-sm font-bold text-[#23A6F0]">
                        Practice Advice
                    </p>

                    <h2 className="mb-3 font-montserrat font-bold! text-[#252B42]">
                        Featured Posts
                    </h2>

                    <p className="mx-auto max-w-md font-montserrat text-sm text-[#737373]">
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics:
                        Newtonian mechanics
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {posts.map((post, index) => (
                        <FeaturedPostCard
                            key={index}
                            post={post}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedPosts;