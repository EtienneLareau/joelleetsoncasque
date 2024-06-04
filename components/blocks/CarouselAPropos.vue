<template>
  <section>

    <div class="wrap-carousel">

      <!-- <div class="background-img"></div> -->
      <div class="titre">

      </div>
      <VueSlickCarousel v-bind="settings" class="carousel">
        <div class="block line">
          <img src="~assets/images/photos/EI__2339-Edit.jpg" alt="">
          <p>Injection</p>
        </div>
        <div class="block line">
          <img src="~assets/images/carousel1.jpg" alt="">
          <p>Injection</p>
        </div>
        <div class="block line">
          <img src="~assets/images/clinique2.jpg" alt="">
          <p>Injection</p>
        </div>
        <div class="block line">
          <img src="~assets/images/clinique3.jpg" alt="">
          <p>Injection</p>
        </div>
       
        <div class="block line">
          <img src="~assets/images/photos/IMG_2493-Edit.jpg" alt="">
          <p>Injection</p>
        </div>
        <div class="block line">
          <img src="~assets/images/clinique4.jpg" alt="">
          <p>Injection</p> 
        </div>
        <!-- <div class="block line">
          <img src="~assets/images/photos/IMG_2624-Edit.jpg" alt="">
          <p>Injection</p>
        </div> -->
      </VueSlickCarousel>
      <!-- <div class="all-button-wrap">
        <a class="all-button" href="">CONSULTEZ TOUS LES SOINS</a>
      </div> -->
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import "vue-slick-carousel/dist/vue-slick-carousel.css"
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },

  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        focusOnSelect: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
      },
    }
  },
}
</script>

<style scoped>
section {
  /* background-color: var(--fond); */
  /* background-color: #424242; */
  /* padding: 100px 0 00px; */
}

h2 {
  font-style: normal;
  font-size: 9.55rem;
  /* font-size: 3.441rem; */
  /* max-width: 650px; */
  font-weight: 300;
  letter-spacing: 10px;
  line-height: 1.11;
  color: #fff;
  margin-bottom: 0px;
  max-width: auto;
  text-align: center;
  font-family: var(--font);
  padding-top: 100px;
  position: relative;
  z-index: 200;
}

.all-button-wrap {
  padding: 100px 0;
  display: flex;
  justify-content: center;
}

.all-button {
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  padding: 25px 40px 27px;
  border: 3px solid #fff;
  border-radius: 3px;
  font-size: 1.6rem;
  line-height: 1;
}

.wrap-carousel {
  width: 100%;
  /* height: 700px; */
  position: relative;
  z-index: 2;
  padding: 30px 0;
  /* background-color: var(--main-grey); */

}

.background-img {
  /* background: url('~assets/images/photos/placeholder2.jpg') no-repeat center center; */
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  opacity: 0.3;
}

.carousel {
  position: relative;
  z-index: 700;
  /* padding-top: 200px; */
  /* background-color: rgba(128, 128, 128, 0.194); */
  /* top: 32%; */
  /* transform: translateY(-50%); */
  width: 80%;
  margin: 0 auto;
  /* opacity: 0.8; */
}


.block {
  /* background-color: rgba(240, 248, 255, 0.217); */
}

.line {
  /* border-right: 2px solid #e1d0be39; */
}

img {
  /* width: 500px; */
  max-width: 95%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  aspect-ratio: 5/3.5;
}

p {
  text-align: center;
  color: #fff;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 400;
  /* top: 20px; */
  padding: 1rem 0 30px;
  position: relative;
  display: none;
}

.un {
  width: 33%;
}

@media only screen and (max-width:717px) {
  h2 {
    font-size: 8vw;
  }
}</style>