import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const Hero = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero lg:h-[700px]" style={{ backgroundImage: 'url(https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=1000&format=pjpg&exif=0&iptc=0)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero lg:h-[700px]" style={{ backgroundImage: 'url(https://dlcdnwebimgs.asus.com/files/media/f51fde1c-87d3-4f1a-8b48-c28bdbeba76e/v1/assets/image/proart/article_cover.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero lg:h-[700px]" style={{ backgroundImage: 'url(https://asset.gallup.com/p/WORKPLACEV9CMS/49821ce7-b62a-4bcb-9013-0a21bed58ed5.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Hero;