<template>
  <section>

    <div class="wrap-carousel">

      <!-- <div class="background-img"></div> -->
      <div class="titre">
        <h2>NOS SOINS</h2>
      </div>
      <VueSlickCarousel v-bind="settings" class="carousel">
        <div class="block line">
          <img src="~assets/images/hero3.jpg" alt="">
          <p>Services IPS</p>
        </div>
        <div class="block line">
          <img src="~assets/images/highfive.jpg" alt="">
          <p>Services IPS en santé mentale</p>
        </div><div class="block line">
          <img src="~assets/images/ph1.jpg" alt="">
          <p>Services en travail social</p>
        </div><div class="block line">
          <img src="~assets/images/hero3.jpg" alt="">
          <p>Traitement par ordonnance collective</p>
        </div><div class="block line">
          <img src="~assets/images/highfive.jpg" alt="">
          <p>Autres services infirmiers</p>
        </div>
        <!-- <div class="block line">
          <img src="~assets/images/ph1.jpg" alt="">
          <p>Services IPS</p>
        </div><div class="block line">
          <img src="~assets/images/hero3.jpg" alt="">
          <p>Services IPS</p>
        </div> -->
      </VueSlickCarousel>
      <div class="all-button-wrap">
        <a class="all-button" href="/services/tous-les-services">TOUS LES SOINS</a>
      </div>
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
        arrows: true,
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        focusOnSelect: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 13000,
        cssEase: "linear",
      },
    }
  },
}
</script>

<style scoped>
section {
  background-color: var(--main-pale-2);
  /* background-color: #424242; */
  padding: 0px;
}
h2 {
  font-style: normal;
    font-size: 9.55rem;
    /* font-size: 3.441rem; */
    /* max-width: 650px; */
    font-weight: 300;
    letter-spacing: 10px;
    line-height: 1.11;
    color: #333;
    margin-bottom: 0px;
    max-width: auto;
    text-align: center;
    font-family: var(--font);
    padding:50px 0 40px;
    position: relative;
    z-index: 200;
}

.all-button-wrap {
  padding: 50px 0 0;
  display: flex;
  justify-content: center;
}

.all-button {
  text-decoration: none;
  color: #000;
  font-weight:400;
  padding: 15px 25px 16px; 
  border:3px solid #333;
  border-radius: 3px;
  font-size: 1.2rem;
  line-height: 1;
}

.wrap-carousel {
  width: 100%;
  /* height: 700px; */
  position: relative;
  z-index: 2;
  padding: 30px 0;
  background-color: var(--main-pale-2);

}

.background-img {
  /* background: url('~assets/images/placeholder2.jpg') no-repeat center center; */
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
  max-width:95%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

p {
  text-align: center;
  color: #333;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  /* top: 20px; */
  padding: 1rem 0 10px;
  margin-bottom:0;
  position: relative;
}

.un {
  width: 33%;
}

@media only screen and (max-width:717px) {
  h2 {
    font-size: 10vw;
  }


.all-button {
  text-decoration: none;
  color: #000;
  font-weight:700;
  padding: 10px 25px 10px; 
  border:2px solid #333;
  border-radius: 3px;
  font-size: 0.9rem;
  line-height: 1;
}
}
</style>