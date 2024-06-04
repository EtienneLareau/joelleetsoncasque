<template>
  <div>
    <section class="masthead" role="" aria-label="Image Description">
      <div class="">
        <div class="wrap-title">
          <div class="box-wrapee">
            <div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <div id="partenaires" class="title">
        <!-- <h1>À PROPOS</h1> -->
        <h1 class="title-left">NOS FIERS</h1>
        <h1 class="title-right">PARTENAIRES</h1>
      </div>
      <div class="grid-team">
        <div class="comp-card">
          <div class="wrap-comp-logo">
            <img class="comp-logo do-max" src="~assets/images/logojbr.png" alt="">
          </div>
        </div>
        <!-- <div class="comp-card">
          <div class="wrap-comp-logo">
            <img class="comp-logo" src="~assets/images/uniprix.png" alt="">
          </div>
        </div> -->
        <div class="comp-card">
          <div class="wrap-comp-logo">
            <img class="comp-logo do-max" src="~assets/images/jmnlego.jpg" alt="">
          </div>
        </div>
        <div class="comp-card">
          <div class="wrap-comp-logo">
            <img class="comp-logo" src="~assets/images/kopers.jpeg" alt="">
          </div>
        </div>
        <div class="comp-card">
          <div class="wrap-comp-logo">
            <img class="comp-logo" src="~assets/images/deco.png" alt="">
          </div>
        </div>
        <div class="comp-card">
          <div class="wrap-comp-logo">
            <img class="comp-logo" src="~assets/images/studiogrif.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="more">
      <div class="">
        <div><img class="uni-logo" src="~assets/images/unicercle.png" alt=""></div>
        <div class="grid-face">
          <img class="face-nic" src="~assets/images/uniface.jpg" alt="">
          <div>
            <div>
              <p>Nicolas Blanchette</p>
              <p>Pharmacien et propriétaire</p>
            </div>
          </div>
        </div>
      </div>
      <div class="midjourney">
        <p class="titre"></p>
        <p>La clinique IPS de Quartier et la pharmacie Nicolas Blanchette s'unissent dans la création d'un projet pilote
          unique et novateur. Le but : augmenter l'accessibilité des soins et services. Ainsi, les patients avec ou sans
          médecin de famille pourront être rencontrés et traités rapidement.</p>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
p {
  /* margin-bottom: 0; */
  text-align: left;
  font-weight: 300;
  font-size: 1.4rem;
}

img {
  /* width: 100%; */
  border-radius: 2px;
}

img {
  /* width: auto; */
  /* height: auto; */
  max-height: 160px;
  max-width: 300px;
}

.do-max {
  max-height: 110px;
}

button {
  background-color: var(--main-dark-2);
  padding: 10px 25px;
  border-radius: 3px;
  border: 1px solid var(--main-dark-2);
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
}

.more {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin: 100px auto;
  padding: 75px 25px;
  max-width: 1360px;
  background-color: var(--main-bg);

}

.uni-logo {
  position: relative;
  display: block;
  width: 200px;
  height: 200px;
  max-height: 100%;
  left: 50%;
  transform: translateX(-50%);

}

.grid-face {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  margin-top: 20px;
}

.grid-face>div {
  display: flex;
  align-items: center;
}

.grid-face p {
  font-weight: 500;
  font-size: 1rem;
  color: #124da4;
  padding: 0;
  margin: 0;
}

.face-nic {
  border-radius: 100px;
  max-width: 100px;
}

.midjourney {
  display: flex;
  align-items: center;
}

.title {
  padding-top: 50px;
  padding-bottom:30px;
}

.slag {
  padding-top: 60px;
}

.grid-equipe {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 5vw;
  width: 90%;
  max-width: 1500px;
  margin: 100px auto 0px;
}

.grid-equipe:last-child {
  margin-bottom: 100px;
}

.wight {
  grid-template-columns: auto 1fr 1fr !important;
}

.floaty {
  width: 5vw;
}


.pull-left {
  left: 0px;
  position: relative;
}


.pull-right {
  right: 0;
  position: relative;

}

.show-un,
.show-deux {
  height: 0;
  overflow: hidden;
}

.show-me-un {
  transition: 200ms ease-in-out;
  height: 410px;
  padding: 0px 0;
}


.show-me-deux {
  transition: 200ms ease-in-out;
  height: 1580px;
  padding: 0px 0;
}

.nom {
  font-size: 2rem;
  color: var(--main-dark-2);
  /* font-weight:600; */
  font-family: var(--audrey-bold);
  margin-bottom: 0px;
}

.job {
  font-weight: 400;
}

.wrap-comp-logo {
  padding: 30px 0 20px;
  width: 100%;
  height: 80px;
  position: relative;
  margin-bottom: 20px;
}

.comp-logo {
  /* width: 90%; */
  /* height: auto; */
  /* border-radius: 100px; */
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}

.bump-top {
  bottom: 5px;
}

.grid-team {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
  width: 90%;
  max-width: 1380px;
  margin: 100px auto;

}





@media only screen and (max-width:1250px) {

  .grid-equipe {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
    width: 90%;
    max-width: 1500px;
    margin: 100px auto 0px;
  }

  .grid-equipe:last-child {
    margin-bottom: 100px;
  }

  .wight {
    grid-template-columns: 1fr 1fr !important;
  }

  .floaty {
    display: none;
    width: 5vw;
  }

}
</style>


<style scoped>
h1 {
  font-size: 6.5rem;
  text-align: center;
  font-weight: 300;
  color: #333;
  letter-spacing: 10px;
  position: relative;
  z-index: 10;
}

h2 {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  color: grey
}

.title {
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 100px;
}

.title-left {
  text-align: left;
  margin-bottom: 0;
  line-height: 1.4;
}

.title-right {
  text-align: right;
  padding-right: 10%;
  line-height: 1.2;
  color: var(--main-dark-2);
  top: 0px;
}


@media only screen and (max-width:717px) {
  h1 {
    font-size: 1.4rem;
    /* font-size: 8vw; */
    text-align: center;
    font-weight: 300;
    color: #333;
    letter-spacing: 10px;
    position: relative;
    z-index: 10;
  }

  h2 {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    padding-top: 1rem;
    color: grey
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 30px;
  }

  li {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  .more {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 100px auto 20px;
    padding: 30px 25px;
    max-width: 1260px;
  }


  .uni-logo {
    position: relative;
    display: block;
    width: 150px;
    height: 150px;
    max-height: 100%;
    left: 50%;
    transform: translateX(-50%);

  }

  .grid-face {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 0rem;
    max-width: 350px;
    /* margin: 0 auto; */
  }

  .grid-face>div {
    display: flex;
    align-items: center;
  }

  .grid-face p {
    font-weight: 500;
    font-size: 1rem;
    color: #124da4;
    padding: 0;
    margin: 0;
  }

  .face-nic {
    border-radius: 100px;
    /* left: 50%; */
    position: relative;
  }


  .show-me-un {
    transition: 200ms ease-in-out;
    height: 370px;
    padding: 0px 0;
  }

  .show-me-deux {
    height: 1396px;
  }


  .nom {
    font-size: 1.4rem;
    color: var(--main-dark-2);
    /* font-weight:600; */
    font-family: var(--audrey-bold);
    margin-bottom: 0px;
  }

  .job {
    font-weight: 400;
    font-size: 1rem;
  }

  .grid-equipe {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 90%;
    max-width: 1300px;
    margin: 0px auto 0px;
    padding-top: 50px;
  }

  .grid-equipe:last-child {
    margin-bottom: 0px;
  }

  .pull-left {
    left: 0px;
    position: relative;
  }


  .pull-right {
    left: 0px;
    position: relative;
  }


  .grid-team {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    width: 90%;
    max-width: 1380px;
    margin: 20px auto 50px;
  }


  .wrap-comp-logo {
    padding: 30px 0 20px;
    width: 100%;
    height: 80px;
    position: relative;
    margin-bottom: 20px;
  }

  .comp-logo {
    width: 90%;
    height: auto;
    /* border-radius: 100px; */
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }





}
</style>



<style scoped>
.masthead {
  position: relative;
  width: 100%;
  /* max-width:1840px; */
  padding: 0 0;
  height: calc(65vh - 151px);
  /* if you don't want it to take up the full screen, reduce this number */
  min-height: 600px;
  /* overflow: hidden; */

  background: url('~assets/images/highfive.jpg') no-repeat center right;
  background-size: cover;
  background-color: var(--beige);
  background-color: #fff;
  background-color: var(--fond);
}

.wrap-title {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  width: 900px;
}

.box-wrapee {
  /* max-width: 100%;
  margin: 0 auto;
  width: 95%; */
  /* background-color: #e1d0be17; */
  padding: 100px;
}

.box-wrapee p {
  font-style: normal;
  font-size: 4.375rem;

  font-family: "ivypresto-display", serif;
  font-weight: 600;
  font-style: normal;
  /* font-size: 3.441rem; */
  /* max-width: 650px; */
  font-weight: 300;
  line-height: 1.11;
  color: #fff;
  margin-bottom: 40px;
  text-align: left;
  /* max-width: auto; */
  /* text-shadow: 1px 1px 0 var(--main-fade-blue); */
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
  .box-wrapee p {
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
}

@media only screen and (max-width: 734px) {
  .masthead {
    position: relative;
    width: 100%;
    /* max-width:1840px; */
    padding: 0 0;
    height: 200px;
    /* if you don't want it to take up the full screen, reduce this number */
    min-height: auto;
    /* overflow: hidden; */
    background: url('~assets/images/highfive.jpg') no-repeat center right;
    background-size: cover;
    background-color: var(--beige);
    background-color: #fff;
    background-color: var(--fond);
  }

  .title {
    padding-top: 50px;
  }

  .box-wrapee p {
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
}
</style>