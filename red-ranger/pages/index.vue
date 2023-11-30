<template>
  <Swiper  style="height:100vh; width:100vw" direction="vertical" :slides-per-view="1" :slides-per-group="1" :loop="false" :mousewheel="{ sensitivity: 2 }" :keyboard="{
      enabled: true,
    }" :modules="[Mousewheel, Keyboard]" :effect="'smooth'" :speed="900"
   >
    <SwiperSlide>
      <DashSlide></DashSlide>
    </SwiperSlide>
    <SwiperSlide>
      <ImageViewer></ImageViewer>
    </SwiperSlide>
    
    <SwiperSlide>
      <Map></Map>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { EffectFade, Pagination, Navigation, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';

</script>

<style scoped>

.swiper-button-prev {
  color: white !important;
}

.swiper-button-next {
  color: white !important;
}

.swiper-pagination-bullet {
  background-color: white !important;
}
</style>