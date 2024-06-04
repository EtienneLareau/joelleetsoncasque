<template>
  <div>
    <div>
      <div class="section-titre">
        <h1><span style="color:var(--main-dark-2)">PHARMACIE</span></h1>
      </div>
    </div>

    <div class="section-grid">
      <NuxtLink to="/pharmacie/demande-de-prise-en-charge/">
        <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-4.svg" alt="">
          <p>Demande de<br>prise en charge</p>
        </div>
      </nuxtlink>
      <NuxtLink to="/pharmacie/fiche-de-reference/">
        <div><img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-4.svg" alt="">
          <p>Fiche de<br>communication</p>
        </div>
      </nuxtlink>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
p {
  font-family: var(--audrey-bold);
  font-weight:600;
  color:var(--main-dark-2);
  text-align: center;
  font-size: 3rem;
}
.section-titre h1 {
  font-size: 6rem;
  text-align: center;
  padding: 100px 0 0;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin-bottom: 100px;
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5%;
  max-width:1280px;
  padding: 0 5%;
  margin: 0 auto 150px;
}

.section-grid div {
  transition: 200ms;
}

.section-grid div:hover {
  filter: grayscale(100%);
}

.section-grid div {
  padding: 20px;
  border: 6px solid var(--main-pale-2);
  border-radius: 10px;
}

img {
  width:50%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}



@media only screen and (max-width:1180px) {

  .section-titre h1 {
    font-size: 3rem;
    text-align: center;
    padding: 100px 0 0;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

p {
  font-family: var(--audrey-bold);
  font-weight:600;
  color:var(--main-dark-2);
  text-align: center;
  font-size: 1.6rem;
}
}

@media only screen and (max-width:734px) {

  p {
  font-family: var(--audrey-bold);
  font-weight:600;
  color:#333;
  text-align: center;
  font-size: 1rem;
}
  .section-titre h1 {
    letter-spacing: 2px;
  }

  .section-titre h1 {
    font-size: 1.4rem;
    text-align: left;
    font-weight: 300;
    padding: 50px 0 0;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 0px;
  }


.section-grid {
  display: grid;
  grid-template-columns: 1fr ;
  gap: 5%;
  max-width:1280px;
  padding: 0 5%;
  margin: 0 auto 150px;
}
}
</style>