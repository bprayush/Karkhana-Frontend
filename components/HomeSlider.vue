<template>
  <section class="home-slider">
    <div class="slides">
      <VueSlickCarousel v-bind="sliderSettings" ref="carousel">
        <div class="slide" v-for="(slide, index) in sliderImages" :key="index">
          <h1 class="slide-title">{{slide.title}}</h1>
          <div class="slide-image" :style="'background-image: url(' + slide.image + ')'"></div>
          <div class="overlay"></div>
          <!-- <button class="btn btn-primary btn-cta slide-cta">{{slide.cta}}</button> -->
        </div>
      </VueSlickCarousel>

      <!-- shown only from md -->
      <div class="slider-arrow arrow-prev d-none d-md-block" @click="prev">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="slider-arrow arrow-next d-none d-md-block" @click="next">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

// import style
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "HomeSlider",
  components: { VueSlickCarousel },
  props: ["sliderImages"],
  data() {
    return {
      sliderSettings: null
    };
  },

  mounted() {
    if (process.client) {
      this.disableSliderForPhone();
      $(window).resize(() => {
        this.disableSliderForPhone();
      });
    }
  },

  methods: {
    next() {
      this.$refs.carousel.next();
    },

    prev() {
      this.$refs.carousel.prev();
    },

    disableSliderForPhone() {
      let autoPlayStatus = !($(window).width() < 768);
      this.sliderSettings = {
        dots: false,
        arrows: false,
        infinite: autoPlayStatus,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoPlayStatus,
        autoplaySpeed: 10000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false
            }
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/_home_slider.scss";
</style>