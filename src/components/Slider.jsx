import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
        >
            <SwiperSlide>
                <div className="relative">
                    <img
                        src="/slider.jpg"
                        alt=""
                        className="h-[700px] w-full object-cover"
                    />

                    <div className="absolute left-40 top-1/2 -translate-y-1/2">
                        <p className="mb-6 text-base font-bold text-white">
                            SUMMER 2020
                        </p>

                        <h1 className="mb-6 text-6xl font-bold text-white">
                            NEW COLLECTION
                        </h1>

                        <p className="mb-8 max-w-sm text-xl text-white">
                            We know how large objects will act, but things on a small scale.
                        </p>

                        <button className="rounded bg-[#2DC071] px-10 py-4 text-xl font-bold text-white">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img
                    src="https://picsum.photos/id/456/1200/400"
                    alt="Slide 2"
                    className="h-[622px] w-full object-cover"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;