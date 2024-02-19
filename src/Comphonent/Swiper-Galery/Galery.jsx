
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';
<link rel="stylesheet" href="/src/Comphonent/Swiper-Galery/Galery.css" />
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Galery = () => {
    return (
        <div>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='text-center border-2 p-4 rounded-xl'><img className='w-full mb-6' src="/public/resource/f1.png" alt="" /> <button className='md:p-4 bg-zinc-300 rounded-xl hover:bg-sky-900 text-blue-500'> Free Shopping</button></SwiperSlide>
        <SwiperSlide className='text-center border-2 p-4 rounded-xl'><img className='w-full mb-6' src="/public/resource/f2.png" alt="" /> <button className='md:p-4 bg-zinc-300 rounded-xl hover:bg-sky-900 text-blue-500'> Free Shopping</button></SwiperSlide>
        <SwiperSlide className='text-center rounded-xl border-2 p-4'><img className='w-full mb-6' src="/public/resource/f3.png" alt="" /> <button className='md:p-4 bg-zinc-300 rounded-xl hover:bg-sky-900 text-blue-500'> Free Shopping</button></SwiperSlide>
        <SwiperSlide className='text-center rounded-xl border-2 p-4'><img className='w-full mb-6' src="/public/resource/f4.png" alt="" /> <button className='md:p-4 bg-zinc-300 rounded-xl hover:bg-sky-900 text-blue-500'> Free Shopping</button></SwiperSlide>
        <SwiperSlide className='text-center rounded-xl border-2 p-4'><img className='w-full mb-6' src="/public/resource/f5.png" alt="" /> <button className='md:p-4 bg-zinc-300 rounded-xl hover:bg-sky-900 text-blue-500'> Free Shopping</button></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Galery;