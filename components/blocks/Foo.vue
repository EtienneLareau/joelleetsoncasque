<template>
  <div class="bg" id="foo">
    <div class="content-wrap">
      <div>
        <img src="~assets/images/IPS_Logo-final_Horizontal-fondfonce.svg" alt="">
      </div>
      <div class="grid-foo">
        <div>
          <h3>Liens rapides</h3>
          <a href="/la-clinique/notre-equipe/">L'équipe</a>
          <a href="/services/tous-les-services">Nos services</a>
          <a href="/prendre-rendez-vous/">Comment prendre rendez-vous</a>
          <!-- <a href="">Urgence</a> -->
          <!-- <a href="https://www.uniprix.com/fr/succursales/blanchette-nicolas-drummondville" rel="noopener noreferrer"
            target="_blank">Pharmacie Nicolas Blanchette</a> -->

        </div>
        <div>
          <h3>horaire</h3>
          <p>Lundi : 8h à 12h - 13h à 17h</p>
          <p>Mardi : 8h à 12h - 13h à 17h</p>
          <p>Mercredi : 8h à 12h - 13h à 17h</p>
          <p>Jeudi : 8h à 12h - 13h à 17h</p>
          <p>Vendredi : 8h à 12h - 13h à 17h</p>
          <p>Samedi : fermé</p>
          <p>Dimanche : fermé</p>
        </div>
        <div>
          <h3>
            Contact
          </h3>
          <p>Clinique IPS de Quartier </p>
          <p>
            950 rue Ste-Thérèse</p>
          <p>
            Drummondville, Québec</p>
          <p>
            J2B 4V8</p><br>
          <a href="tel:8192530168">Tél: 819 253-0168</a>
          <a href="tel:8198050288">Fax: 819 805-0288</a>
          <a class="desktop" href="email:clinique@ipsdequartier.com">clinique@ipsdequartier.com</a>
          <a class="mobile" href="email:clinique@ipsdequartier.com">ECRIVEZ-NOUS 👋🏼</a>
          <div class="social">
            <a  aria-label="Explorer la page Facebook de la clinique médicale privée" href="https://www.facebook.com/profile.php?id=100089456949770" rel="noopener noreferrer" target="_blank">
              <img src="~assets/icons/facebook.svg" alt="">
            </a>
            <a aria-label="Explorer la page Instagram de la clinique médicale privée" href="https://www.instagram.com/cliniqueipsdequartier/" rel="noopener noreferrer" target="_blank">
              <img class="boup" src="~assets/icons/square-instagram.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Footer from '~/components/blocks/Footer'

export default {
  components: {
    Footer,
  },
}
</script>

<style scoped>
h3 {
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: var(--main-dark-2);
  padding-bottom: 36px;
  text-transform: uppercase;
  ;
}

a,
p {
  color: #fff;
  font-size: 1.15rem;
  text-transform: uppercase;
  padding-bottom: 10px;
  letter-spacing: 2px;
  margin-bottom: 0;
  /* color: var(--main-bg) */
}

a {
  display: block;
  text-decoration: none;
  transition: 200ms;
}

a:hover {
  filter: brightness(200%);
}

img {
  width: 100%;
  max-width: 400px;
  /* filter: brightness(130%); */
}

.social img {
  width: 40px;
  display: inline-block;
  padding-right: 10px;
  padding-top: 10px;
  transition: 200ms;
}

.social img:hover {
  filter: brightness(200%);
}

.social a {
  display:inline-block;
}

.boup {
  top: 1px;
  position: relative;
}

.bg {
  background-color: var(--very-dark);

}

.content-wrap {
  width: 90%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 100px 0;
}

.grid-foo {
  padding: 80px 0 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

}

.mobile {
  display: none;
}

@media only screen and (max-width: 1480px) {

  a,
  p {
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: var(--main);
    padding-bottom: 21px;
    text-transform: uppercase;
    ;
  }

  img {
    width: 100%;
    max-width: 200px;
    filter: brightness(130%);
  }

  .grid-foo {
    padding-top: 70px;
    padding-bottom: 0;
  }

  .content-wrap {
    padding-bottom: 50px;
  }





}

@media only screen and (max-width: 700px) {

  img {
    width: 100%;
    max-width: 200px;
    /* filter: brightness(170%); */
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: var(--main-dark-2);
    padding-bottom: 12px;
    text-transform: uppercase;
    ;
  }

  a,
  p {
    color: #fff;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding-bottom: 12px;
    letter-spacing: 2px;
    /* color: var(--main-pale-2) */
  }

  p {
    padding-bottom: 0;
    margin-bottom: 12px;
  }

  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }

  .content-wrap {
    padding-top: 50px;
  }

  .grid-foo {
    padding: 50px 0 10px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

}
</style>
