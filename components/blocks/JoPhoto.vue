<template>
  <div class="max">
    <div class="grid-carousels-multi">
      <div class="grid-carousels">
        <img src="~assets/images/jo/IMG_2998.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_3002.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_8992.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_8993.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_9003.jpg" alt="" class="contain">

      </div>

      <div class="grid-carousels">
        <img src="~assets/images/jo/IMG_9004.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_9006.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_9023.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_9026.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_9027.jpg" alt="" class="contain">
      </div>

      <div class="grid-carousels">
        <img src="~assets/images/jo/IMG_9028.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_9030.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_9033.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_9034.jpg" alt="" class="contain">
        <img src="~assets/images/jo/IMG_9035.jpg" alt="" class="contain">
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.max {
  width: calc(100% - 1rem);
  margin: 0.5rem auto 0;
}

.container {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  /* Your container needs a fixed height, and it 
   * needs to be taller than your tallest column. */
  height: 3000px;
}

.item {
  width: 33%;
  margin-bottom: 0.5%;
  /* Optional */
}

/* Re-order items into 3 rows */
.item:nth-child(3n+1) {
  order: 1;
}

.item:nth-child(3n+2) {
  order: 2;
}

.item:nth-child(3n) {
  order: 3;
}

/* Force new columns */
.container::before,
.container::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}

.grid-carousels-multi {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
}

.grid-carousels {
  display: grid;
  grid-auto-columns: 1fr;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
}

.contain {
  width: auto;
  height: 100%;
  object-fit: cover;
}


.giant {
  width: 100%;
  height: 300px;
  /* background: url("~/assets/images/wavelanding/wlimg14.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;
}


.mega-title {
  line-height: 0.6;
  font-size: 8rem;
  text-align: center;
  padding: 30px;
  /* max-width: 600px; */
  font-family: var(--font-hyper-one);
  letter-spacing: 6px;
  font-weight: 100;
  color: yellow;
  text-shadow: 3px 3px var(--main-color);
  transform: rotate(-6deg);
  /* transform-origin: top right; */
}


.ricky-ki {
  /* display:none; */
  position: absolute;
  top: 20px;
  right: 1rem;
  width: 150px;
  height: 150px;
  /* background: greenyellow; */
  /* display: none; */
  justify-content: center;
  align-items: center;
}

.ricky-ki>p {
  text-align: center;
  padding: 5px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}


.ricky-ki>img {
  position: absolute;
  width: 120px;

  height: 120px;
  filter: invert(100%);
}



.house-title {
  padding: 30px 20px;
}

h1 {
  font-size: 3rem;
}

.address {
  font-size: 1.4rem;
  font-weight: 700;
}


#rolling {
  /* background: linear-gradient(130deg, var(--main-accent), var(--main-color));
    background-size: 200% 200%; */
  transform-origin: center;
  -webkit-animation: roll 10s linear infinite;
  -moz-animation: roll 10s linear infinite;
  animation: roll 10s linear infinite;
}

@-webkit-keyframes roll {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@-moz-keyframes roll {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes roll {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width:590px) {
  .mega-title {
    font-size: 16vw;
  }

  .giant {
    height: 200px;
  }


  .item {
    width: 33%;
    margin-bottom: 0.5%;
    /* Optional */
  }

  /* Re-order items into 3 rows */
  .item:nth-child(3n+1) {
    order: 1;
  }

  .item:nth-child(3n+2) {
    order: 2;
  }

  .item:nth-child(3n) {
    order: 3;
  }

  /* Force new columns */
  .container::before,
  .container::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
  }

  .grid-carousels-multi {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0rem;
  }

  .grid-carousels {
    display: grid;
    grid-auto-columns: 1fr;
    gap: 0.5rem;
    padding-bottom: 2.5vw;
  }




}
</style>