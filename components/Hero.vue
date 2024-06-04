<template>
  <div class="good-blue">
    <section class="masthead" role="" aria-label="Image Description">
      <div class="shadow-ninja"></div>
      <div class="mid">
        <div class="wrap-title">
          <div class="box-wrapee">
            <div>
              <h1 class="">Des soins médicaux personnalisés,
                une approche <span style="font-style: italic;font-weight:400;">humaine.</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.good-blue {
  padding: 0;
  margin: 0;
}

.masthead {
  position: relative;
  width: 100%;
  /* max-width:1840px; */
  padding: 0 0;
  height: calc(65vh - 151px);
  /* if you don't want it to take up the full screen, reduce this number */
  min-height: 700px;
  /* overflow: hidden; */

  background: url('~assets/images/indexhero.jpg') no-repeat center right;
  background-size: cover;
  background-color: var(--beige);
  background-color: #fff;
  background-color: var(--fond);
}

.shadow-ninja {
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  left:0;
  background: linear-gradient(90deg, #000000c9, #000000c9 1%, #ffffff00);
}

.mid {
  position: relative;
  width:90%;
  max-width:2100px;
  margin: 0 auto;
  min-height:700px;
}

.wrap-title {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  max-width: 900px;

}

.box-wrapee {
  padding: 100px 0;
}

h1 {
  font-style: normal;
  font-size: 3.375rem;
  /* font-size: 3.441rem; */
  /* max-width: 650px; */
  line-height: 1.31;
  color: #fff;
  margin-bottom: 40px;
  text-align: left;
  text-transform: uppercase;
}

@media only screen and (max-width:1024px) {
  a {
    font-size: 1.1rem;
  }

  .masthead {
    padding-left: 2%;
    padding-right: 2%;
  }

}

@media only screen and (max-width: 820px) {
  h1 {
    margin-bottom: 40px;
  }

  a {
    width: fit-content;
  }


  .wrap-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }


  .box-wrapee {
    /* max-width: 100%;
  margin: 0 auto;
  width: 95%; */
    /* background-color: #e1d0be17; */
    padding: 20px;
  }

  .sous {
    margin-bottom: 20px;
  }

  .masthead {
    min-height:550px;
    /* background: url('~assets/images/hero.jpg') no-repeat center; */
  }

  .bottom-wrap {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    /* width: 100%; */
    position: relative;
    left: 0;
    transform: translateX(0%);
    bottom: auto;
  }
}

@media only screen and (max-width: 734px) {
  .masthead {}

  /* 
  .box-wrapee {
    padding-top:25vh;
    max-width:90%;
  } */



  .bottom-wrap {
    gap: 0.6rem;
  }

  h1 {
    font-size: 8vw;
    margin-bottom: 1.2rem;
    /* font-weight: 700; */
    /* line-height: 1.21; */
  }

  button {
    padding: 12px 20px 12px;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 0.9rem;
    line-height: 1.4;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  a {
    /* background: none;
        border: 2px solid var(--main-grey); */
    font-size: 18px;
    /* color: var(--main-grey); */
    margin-top: 0px;
    font-weight: 600;
    transition: 250ms;
    font-size: 0.9rem;
    padding: 8px 10px 8px;
    border-radius: 3px;
  }

  .sous {
    font-size: 1.2rem;
    font-weight: 400 !important;
  }
}
</style>