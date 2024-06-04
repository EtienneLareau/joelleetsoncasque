<template>
  <div>
    <div class="wrap-services">
      <div class="grid-services">

        <div class="services-card">
          <div class="grid-prem">
            <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-10.svg" alt=""></div>
            <div class="text-wrap">
              <p class="titre">Contraception</p>
              <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Coût  : $45</p>
              <a href="/services/nos-services-ips/contraception/">
                <button>Explorer</button>
              </a>
              
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="grid-prem">
            <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-11.svg" alt=""></div>
            <div class="text-wrap">
              <p class="titre">Contraception</p>
              <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Coût  : $45</p>
              <button>Explorer</button>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="grid-prem">
            <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-12.svg" alt=""></div>
            <div class="text-wrap">
              <p class="titre">Contraception</p>
              <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Coût  : $45</p>
              <button>Explorer</button>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="grid-prem">
            <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-13.svg" alt=""></div>
            <div class="text-wrap">
              <p class="titre">Contraception</p>
              <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Coût  : $45</p>
              <button>Explorer</button>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="grid-prem">
            <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-14.svg" alt=""></div>
            <div class="text-wrap">
              <p class="titre">Contraception</p>
              <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Coût  : $45</p>
              <button>Explorer</button>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="grid-prem">
            <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-15.svg" alt=""></div>
            <div class="text-wrap">
              <p class="titre">Contraception</p>
              <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Coût  : $45</p>
              <button>Explorer</button>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="grid-prem">
            <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-16.svg" alt=""></div>
            <div class="text-wrap">
              <p class="titre">Contraception</p>
              <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Coût  : $45</p>
              <button>Explorer</button>
            </div>
          </div>
        </div>

        <div class="services-card">
          <div class="grid-prem">
            <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-17.svg" alt=""></div>
            <div class="text-wrap">
              <p class="titre">Contraception</p>
              <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Coût  : $45</p>
              <button>Explorer</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 75px;
  height: auto;
  position: relative;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  padding-top: 10px;
}

p.titre {
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: left;
}

p {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 0;
  text-align: left;
  padding-top: 5px;
}

.services-card {
  /* display: grid;
  grid-template-columns: 75px 1fr 1fr;
  gap: 2rem; */
  background-color: var(--main-bg);
  /* padding-bottom: 24px; */
  padding: 25px 35px;
}


.services-card {
  background-color: var(--main-bg);
  /* padding-bottom: 24px; */
  padding: 25px 35px;
}

.grid-prem {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2rem;
}

.grid-sec {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.desc {
  /* display:none; */
  padding-bottom:10px;
}

.wrap-services {
  width: 90%;
  margin: 100px auto;
}

.grid-services {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}

.text-wrap {
  /* max-width: 400px; */
  /* padding: 15px 0; */

}

button {
  background-color: var(--main);
  border: none;
  padding: 10px 15px 12px;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  border-radius: 2px;
  position: relative;
  /* left: 50%;
  transform: translateX(-50%); */
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 200ms;
  box-shadow: 0;
  font-family: "sofia-pro", serif;
  font-style: normal;
  margin-top:20px;
}


button:hover,
button:focus {
  background-color: #fff;
  color: var(--main);
  ;
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

  background: url('~assets/images/ph3.jpg') no-repeat center right;
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

@media only screen and (max-width: 1590px) {

.grid-services {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
}


@media only screen and (max-width: 1150px) {

.grid-services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

p.titre {
  font-size: 1.1rem;
  text-transform: uppercase;
  text-align: left;
}

p {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0;
  text-align: left;
  padding-top: 5px;
}
button {
  font-size: 0.9rem;
  margin-top: 10px;
}




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

  .grid-services {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

  .box-wrapee p {
    font-size: 8vw;
    margin-bottom: 1.2rem;
    /* font-weight: 700; */
    /* line-height: 1.21; */
  }

  button {
    padding: 12px 20px 12px;
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