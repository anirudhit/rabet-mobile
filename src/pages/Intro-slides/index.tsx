import React, { useState, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SlideLeft, SlideRight } from 'svgs/longArrowCircle';
import SlidesLayout from 'components/common/Layouts/SlidesLayout';

import config from 'config';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';

import { Navigation } from 'swiper';

import * as S from './styles';

export default function App() {
  return (
    <>
      <div>
        <SlidesLayout>
          <Swiper navigation modules={[Navigation]}>
            <S.SlidesContainer>
              <SwiperSlide>
                <Slide1 />
              </SwiperSlide>
              <SwiperSlide>
                <Slide2 />
              </SwiperSlide>
              <SwiperSlide>
                <Slide3 />
              </SwiperSlide>
              <SwiperSlide>
                <Slide4 />
              </SwiperSlide>
            </S.SlidesContainer>
          </Swiper>
        </SlidesLayout>
      </div>
    </>
  );
}
