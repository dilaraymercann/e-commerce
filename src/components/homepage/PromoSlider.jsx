import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PromoSlider = () => {
    return (
        <section className="bg-[#23856D]">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="mx-auto flex items-center justify-center gap-52 h-[90vh]">
                        <div className="flex flex-col gap-8 font-montserrat w-[50vh] text-white">
                            <h6 className="">SUMMER 2026</h6>

                            <h1 className="font-bold! leading-tight">
                                Vita Classic Product
                            </h1>

                            <p className="text-sm leading-6">
                                We know how large objects will act. We know how are objects
                                will act. We know
                            </p>

                            <div className="flex items-center gap-8">
                                <span className="text-2xl font-bold">$16.48</span>

                                <button className="rounded bg-[#2DC071] px-10 py-4 text-sm font-bold text-white">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>

                        <div className="flex h-full items-end">
                            <img
                                src="/promo-man.png"
                                alt="Vita Classic Product"
                                className="w-[50vh] object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx-auto flex items-center justify-center gap-52 h-[90vh]">
                        <div className="flex flex-col gap-8 font-montserrat w-[50vh] text-white">
                            <h6 className="">SUMMER 2026</h6>

                            <h1 className="font-bold! leading-tight">
                                Vita Classic Product
                            </h1>

                            <p className="text-sm leading-6">
                                We know how large objects will act. We know how are objects
                                will act. We know
                            </p>

                            <div className="flex items-center gap-8">
                                <span className="text-2xl font-bold">$16.48</span>

                                <button className="rounded bg-[#2DC071] px-10 py-4 text-sm font-bold text-white">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>

                        <div className="flex h-full items-end">
                            <img
                                src="/promo-man.png"
                                alt="Vita Classic Product"
                                className="w-[50vh] object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default PromoSlider;