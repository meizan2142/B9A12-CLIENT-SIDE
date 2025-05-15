// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

const TestimonialSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
                enabled: true,
            }}
            breakpoints={{
                769: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop= {true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
            className="mySwiper mt-6"
        >
            <SwiperSlide>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/WfxzcSJ/photo-1573878221976-aab98adadabc.jpg" alt="Shoes" className="rounded-xl h-44 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Iftekhar Aziz</h2>
                        <p className='text-gray-400'>Using this site has made managing my projects a breeze!</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/8s0YxSk/premium-photo-1661544010200-ea07bc18f8d5.jpg" alt="Shoes" className="rounded-xl h-44 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Rahat Salim</h2>
                        <p className='text-gray-400'>The task tracking feature has significantly boosted my productivity.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/fY38CWL/photo-1544717297-fa95b6ee9643.jpg" alt="Shoes" className="rounded-xl h-44 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Nasiful Islam</h2>
                        <p className='text-gray-400'>The customizable features make it perfect for any workflow.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/kcLK8dS/premium-photo-1661302816947-ba7c46fbc8ff.jpg" alt="Shoes" className="rounded-xl h-44 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Abu Jaher</h2>
                        <p className='text-gray-400'>I can not imagine organizing my tasks without this site now!</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/t2jQKMm/photo-1713947501966-34897f21162e.jpg" alt="Shoes" className="rounded-xl h-44 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salman Shamil</h2>
                        <p className='text-gray-400'>Customer support has been fantastic and incredibly helpful.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card lg:w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Tt59nXF/premium-photo-1664304140690-bbd58c577a45.jpg" alt="Shoes" className="rounded-xl h-44 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Imraan Hossain</h2>
                        <p className='text-gray-400'>This site has transformed the way I approach my daily tasks.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default TestimonialSlider;