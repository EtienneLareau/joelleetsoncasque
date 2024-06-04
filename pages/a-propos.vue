<template>
  <div class="bg">
    <HeroAPropos />
    <div class="title">
      <h1>À PROPOS</h1>
      <h1 class="title-left">DE NOTRE</h1>
      <h1 class="title-right">CLINIQUE</h1>
    </div>
    <div class="hi">
      <CarouselAPropos />
    </div>
    <div class="mega-centre">
      <div class="petit-centre">
        <p>
          Fondée par une IPS complètement passionnée par les soins infirmiers et médicaux, elle se distingue des autres
          cliniques de par son approche humaine axée sur la prévention de la maladie et la promotion de la santé.
        </p>
      </div>
    </div>
    <div class="notre-mission">
      <NotreMission />
    </div>
    <div class="exp">
      <div class="grid-exp">
        <div><img src="~assets/images/valeurs.jpg" alt="">
        </div>
        <div>
          <h2>NOS VALEURS</h2>
          <p>Nos valeurs sont la compassion, l’excellence et la responsabilité. Nous sommes
            convaincus que chaque patient mérite une attention personnelle et ainsi de vivre
            une expérience agréable de la santé. Nous nous efforçons de maintenir un
            environnement de travail respectueux et collaboratif pour nos employés.</p>
        </div>
      </div>
      <div class="grid-exp second">
        <div class="prem">
          <h2>NOTRE VISION</h2>
          <p>Nous travaillons sans relâche pour devenir la clinique de référence dans notre communauté, en
            offrant des soins médicaux de qualité supérieure et en contribuant à améliorer
            la santé et le bien-être de nos patients. </p>
          <p>Nous sommes déterminés à atteindre ces objectifs en continuant de développer
            et de perfectionner nos pratiques médicales et infirmières, en investissant dans
            les technologies de pointe et en formant constamment notre personnel afin de
            garantir des soins exceptionnels à chaque être humain qui passe notre porte.</p>
        </div>
        <div class="sec"><img src="~assets/images/vision.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import HeroAPropos from '~/components/HeroAPropos.vue'
import CarouselAPropos from '~/components/blocks/CarouselAPropos.vue'
import NotreMission from '~/components/blocks/NotreMission.vue'

export default {
  components: {
    HeroAPropos,
    CarouselAPropos,
    
    NotreMission,
  },

  head() {
    return {
      title: 'À propos de la clinique | Clinique médicale privée',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Fondée par une IPS complètement passionnée par les soins infirmiers et médicaux, cette clinique médicale privée se distingue des autres de par son approche humaine axée sur la prévention de la maladie et la promotion de la santé.'
        }
      ]
    }
  }
}
</script>


<style scoped>
.bg {
  background-color: var(--main-bg);
  min-height: 100vh;
  width: 100%;
}

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
  font-size: 2.55rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  /* color: grey; */
  color: #333;
  font-weight: 300;
  letter-spacing: 0px;
}

.title {
  width: 90%;
  max-width: 1120px;
  margin: 0 auto 100px;
  padding-top: 30px;
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
}

.hi {
  top: -60px;
  position: relative;
  z-index: 2;
}

.mega-centre {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding-bottom:25px;
}

.petit-centre {
  width: 90%;
  max-width: 800px;
}

.petit-centre p {
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: center;
  line-height: 1.2;
}

.exp {
  max-width: 1680px;
  width: 90%;
  margin: 0 auto;
  padding: 100px 0 100px;
}

.grid-exp {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  padding-bottom: 100px;
}

.grid-exp p {
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-weight: 300;
  line-height: 1.5;
}

.second {
  grid-template-areas: "prem sec";
}

.prem {
  grid-area: prem;
}

.sec {
  grid-area: sec;
}

.mega-centre-bas {
  padding: 100px 0;
  background-color: var(--main-bg);
}

.petit-centre-bas {
  width: 90%;
  margin: 0 auto;
  max-width: 1000px;
}

.petit-centre-bas p {
  font-size: 3rem;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: center;
  line-height: 1.4;
  color: rgb(0, 0, 77);
  color: var(--bleu);
  /* font-family: "ivypresto-display", serif; */
  font-family: Audrey-Normal, serif;
  font-weight: 300;
  font-style: normal;
  text-transform: uppercase;
}

.signe {
  padding-top: 70px;
}

.signe p {
  font-size: 1.2rem;
  font-family: inherit;
  color: var(--bleu);
}

.signe p:first-child {
  font-weight: 600;
}

@media only screen and (max-width:1480px) {
  p {
    font-size: 1.2rem;
  }


  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    padding-top: 1rem;
    color: grey
  }

  .grid-exp p {
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: 300;
    line-height: 1.5;
  }

  .petit-centre-bas p {
    font-size: 2.3rem;
    letter-spacing: 1px;
    font-weight: 300;
    text-align: center;
    line-height: 1.4;
    color: rgb(0, 0, 77);
    font-family: "ivypresto-display", serif;
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
  }

  .signe p {
    font-size: 0.9rem;
    font-family: inherit;
    margin-bottom: 5px;
  }

  .signe p:first-child {
    font-weight: 600;
    font-size: 0.8rem;
  }
}

@media only screen and (max-width:734px) {
  h1 {
    font-size: 8vw;
    text-align: center;
    font-weight: 300;
    color: #333;
    letter-spacing: 10px;
    position: relative;
    z-index: 10;
  }

  h2 {
    font-size: 1.55rem;
    margin-bottom: 0rem;
    padding-top: 0.3rem;
    color: #333
  }


  .title {
    width: 90%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 30px 0 60px;
  }


  .title-right {
    text-align: right;
    padding-right: 10%;
    line-height: 1.6;
    color: var(--main);
  }


  .hi {
    top: 0px;
    position: relative;
    z-index: 2;
  }

  .hi {
    display: none;
  }


  .mega-centre {
    display: flex;
    justify-content: center;
    align-items: auto;
    height: auto;
    /* padding-top:20px; */
  }

  .petit-centre {
    width: 90%;
    max-width: auto;
  }

  .petit-centre p {
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    font-weight: 300;
    text-align: center;
    line-height: 1.5;
  }


  .exp {
    max-width: 1680px;
    width: 90%;
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 0;
  }

  .grid-exp {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-bottom: 50px;
  }

  .grid-exp p {
    font-size: 1rem;
    letter-spacing: 0px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 14px;
  }

  .second {
    grid-template-areas: "sec"
      "prem";
  }

  .mega-centre-bas {
    padding: 0 0 50px;
  }

  .petit-centre-bas p {
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-weight: 300;
    text-align: center;
    line-height: 1.4;
    color: rgb(0, 0, 77);
    font-family: "ivypresto-display", serif;
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
  }

  .signe {
    padding-top: 0px;
  }

  .signe p {
    font-size: 0.7rem;
    font-family: inherit;
    margin-bottom: 5px;
  }

  .signe p:first-child {
    font-weight: 600;
    font-size: 0.8rem;
  }
}
</style>