<template>
    <Swiper :navigation="true" direction="horizontal" :pagination="{
        clickable: true,
        dynamicBullets: true,
    }" :modules="[SwiperAutoplay, Pagination, Navigation, EffectFade, Autoplay]" :slides-per-view="1"
        :slides-per-group="1" :loop="true" :effect="'fade'" :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
        }">
        <SwiperSlide>
            <img class="bg-auto full-height full-width-desktop"
                :style="{ maxWidth: '1920px', width: '100%', margin: '0 auto' }"
                src="https://logistics.asia/2021/wp-content/uploads/2021/04/logistics-fallback.jpg"
                alt="power-5" />
            <div>
                <div class="text-overlay">
                    <div class="white-text">Logistics</div>
                    <div class="white-text-sub">Our logistics arm strengthens the core of our business entities with the
                        nation's largest liquid bulking installation and steadfast fleets to drive growth of logistics
                        through innovation, technology and dedication.</div>
                </div>
                
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <img class="bg-auto full-height full-width-desktop"
                :style="{ maxWidth: '1920px', width: '100%', margin: '0 auto' }"
                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i3eeo0E7Jxxs/v1/-1x-1.jpg"
                alt="power-red" />

                <div>
                <div class="text-overlay">
                    <div class="white-text">Rubber</div>
                    <div class="white-text-sub">We are the largest in Malaysia.</div>

                </div>
                
            </div>
        </SwiperSlide>
    </Swiper>
</template>
<script setup>
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
</script>

<style>
.swiper-button-prev {
    color: white !important;
}

.swiper-button-next {
    color: white !important;
}

.swiper-pagination-bullet {
    background-color: white !important;
}

.text-overlay {
    width:100vw;
    height: 40vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.75);
  line-height: 2.5;
  backdrop-filter: blur(0);
    background-color: rgba(255, 255, 255, 0);
    transition: backdrop-filter 0.3s ease, background-color 0.3s ease;

}
.text-overlay:hover {
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.5);
}



/* Styles for desktop */
.white-text {
    color: white;
    font-size: 50px;
    width:80%;
    margin: 0 auto; /* Add this line to center the element horizontally */

}

.white-text-sub {
    color: white;
    font-size: 20px;
    width:80%;
    margin: 0 auto; /* Add this line to center the element horizontally */


}

/* Media query for mobile */
@media (max-width: 450px) {
    .white-text {
        font-size: 30px; /* Adjust the font size for mobile */
    }

    .white-text-sub {
        font-size: 16px; /* Adjust the font size for mobile */
    }
}




</style>