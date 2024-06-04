<template>
  <div class="cmon">
    <div class="full-btm">
      <div class="copyright">

        <p class="copytxt">
          <a href="/la-clinique/politique-de-confidentialite/">Politique de confidentialité</a> | <a
            href="/la-clinique/conditions-d-utilisation/">Conditions d'utilisation</a> | <a
            href="/pharmacie/">Pharmacie</a>
          <!-- | <a href="/medias/">Médias</a> -->
        </p>
        <p class="copytxt pale">
          Clinique IPS de Quartier - Tous droits réservés
        </p>
      </div>
    </div>
    <!-- <div class="supa">
      <div class="overline">
        <div class="auto-3">
          <div class="center"></div>
          <div class="right">
            <a href="">Prendre rendez-vous</a><a href="">Portail patient</a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.cmon {
  position: relative;
  z-index: 500;
}

.supa {
  width: 100%;
  padding: 20px 0;
  background-color: #000;
}

.auto-3 {
  display: grid;
  grid-template-columns: auto 500px;
  gap: 0;
  margin: 0 auto;
  width: 95%;
  max-width: 1860px;
}

.left p {
  color: #333;
}

.supa a {
  background-color: none;
  border: 1px solid var(--beige);
  padding: 8px 18px;
  line-height: 1rem;
  font-size: 1rem;
  color: #333;
  font-weight: 300;
  /* border-radius: 100px; */
  float: right;
}
</style>

<style scoped>
.full-btm {
  background-color: var(--very-dark);
  width: 100%;
  /* padding: 0px 0 40px; */
  margin-bottom: -10px;
  padding: 24px 0 14px;
  position: relative;
  z-index: 10000;
}

.copyright {
  width: 85%;
  max-width: 1460px;
  margin: 0 auto;
}

.copytxt {
  text-align: center;
  margin-bottom: 10px;
}

.copytxt,
.copytxt>a {
  font-weight: 500;
  font-style: normal;
  font-size: 0.9rem;
  padding: 0px 0 0px;
}

a {
  margin: 0 0.8vw;
}

p,
a {
  color: var(--main-dark-2);
  font-size: 0.8rem !important;
  text-decoration: none;
  /* font-size: 1rem !important; */
}

@media only screen and (max-width: 595px) {
  .grid-luck {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;
    width: 80%;
    margin: 0 auto;
    max-width: 1540px;
    padding: 70px 0 40px;
  }
}
</style>