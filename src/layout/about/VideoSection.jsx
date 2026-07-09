import { Play } from "lucide-react";

const VideoSection = () => {
    return (
        <section className="py-10">
            <div className="mx-auto max-w-[70vw] px-4">

                <div className="relative overflow-hidden rounded-3xl">

                    <img
                        src="/aboutvideo.jpg"
                        alt="Video"
                        className="h-[80vh] w-full object-cover"
                    />

                    <button
                        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full! bg-[#23A6F0] shadow-xl transition duration-300 hover:scale-110"
                    >
                        <Play
                            size={34}
                            fill="white"
                            className="ml-1 text-white"
                        />
                    </button>

                </div>

            </div>
        </section>
    );
};

export default VideoSection;