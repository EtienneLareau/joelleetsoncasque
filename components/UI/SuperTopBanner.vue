<template>
  <div class="borderland">
    <!-- <div class="float"></div> -->
    <div class="ban-cnt">
      <div>
        <p class="first">
          <!-- <img src="~assets/images/leaf.png" alt="" />  -->
          La clinique sera ouverte de 8h à 16h pour une période indéterminée.
          <!-- <img src="~assets/images/leaf.png" alt=""> -->
        </p>
        <div class="mid-line"></div>
        <!-- <p>Appelez dès maintenant pour céduler un rendez-vous</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  color: #fff;
  font-weight: 400;
  font-size: 1.2rem !important;

  position: relative;
}
img {
  max-width:20px;
  position: relative;
  top:5px;
  display:inline-block;margin: 0 5px;
}
.borderland {
  background-color: #fa2200;
  position: relative;
  z-index: 100;
  /* margin-top: -2px; */
  padding: 0;
  /* height:50px; */
  display: flex;
  align-items: center;
}

.float {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: url('~assets/images/fondbar.png') no-repeat center; */
  background-color: var(--main);
  background-size: cover;
  z-index: 101;
  /* opacity: 0.6; */
}

.ban-cnt {
  width: 95%;
  max-width: 2100px;
  margin: 0 auto;
  /* padding: 9px 0 9px; */
  text-align: center;
  padding: 0.1rem 0 0.2rem;
  padding: 10px 0 10px;
  z-index: 102;
}

.trunk {
  padding-left: 0 !important;
}

.lang-wrap {
  padding: 0;
  margin: 0;
  display: inline-block;
  box-sizing: border-box;
}

.nav-tx {
  color: #fff !important;
  font-size: 0.9rem;
}

a {
  text-decoration: none;
  /* border-bottom: 2px solid rgba(255, 255, 255, 0.379); */
  cursor: pointer;
  font-size: 1rem;
  /* line-height:1; */
  color: #fff;
  font-weight: 500;
  transition: 300ms;
  padding: 0px 0.9rem;
  box-sizing: border-box;
  /* margin: 0 8px 0 8px; */
}

.glow-line {
  /* border-left: 2px solid var(--main-blue); */
  box-sizing: border-box;
  /* padding-right: 5px; */
}

/* 
a:hover {
  
  color: var(--main-blue);
} */

p {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 5px;
  margin: 0;

  /* opacity: 0.5; */
}

p.first {
  padding-bottom: 5px;
}


@media only screen and (max-width: 767px) {
img {
  width:12px;
}

  .ninja-mobile {
    display: none;
  }

  .ban-cnt {
    width: 94%;
  }

  .request-doc {
    display: none;
  }

  a {
    color: var(--main-grey);
    color: #fff;
    font-weight: 500;
    font-size: 0.9rem;
  }


  p {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    /* padding-bottom: 5px; */
    margin: 0;
    /* line-height: 1.2; */

    /* opacity: 0.5; */
  }

  p.first {
    /* padding-bottom: 0px; */
  }
}
</style>