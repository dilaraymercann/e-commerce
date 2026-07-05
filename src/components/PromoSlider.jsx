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
                    <div className="mx-auto flex h-[600px] max-w-[1050px] items-center justify-between px-8">
                        <div className="max-w-[420px] font-montserrat text-white">
                            <p className="mb-6 text-sm font-bold">SUMMER 2026</p>

                            <h2 className="mb-6 text-6xl font-bold leading-tight">
                                Vita Classic Product
                            </h2>

                            <p className="mb-8 text-sm leading-6">
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

                        <div className="flex h-[600px] items-end">
                            <img
                                src="/promo-man.png"
                                alt="Vita Classic Product"
                                className="h-[520px] object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="mx-auto flex h-[600px] max-w-[1050px] items-center justify-between px-8">
                        <div className="max-w-[420px] font-montserrat text-white">
                            <p className="mb-6 text-sm font-bold">SUMMER 2020</p>

                            <h2 className="mb-6 text-6xl font-bold leading-tight">
                                Vita Classic Product
                            </h2>

                            <p className="mb-8 text-sm leading-6">
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

                        <div className="flex h-[600px] items-end">
                            <img
                                src="/promo-man.png"
                                alt="Vita Classic Product"
                                className="h-[520px] object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default PromoSlider;