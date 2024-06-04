<template>
  <div>
    <section class="masthead" role="" aria-label="Image Description">
      <div class="">
        <div class="wrap-title">
        </div>
      </div>
    </section>
    <article class="page-wrap">
      <div>
        <h1>Qu'est-ce que l'ostéopathie</h1>
      </div>
      <div class="paragraph">
        <p>L'ostéopathie est une médecine alternative de plus en plus recherchée, car elle évite dans certains cas la
          prise de médicaments. L'ostéopathe a une approche globale. Il traite non seulement la douleur, mais également
          les causes de celle-ci, les différents symptômes accompagnant cette douleur et suggère finalement des
          changements au niveau du mode de vie, afin d'éliminer le plus possible la récidive des symptômes de cette
          douleur. </p>
        <p>L'ostéopathe fait preuve d'une grande habileté au niveau de ses palpations. Après avoir établit un portrait
          type du patient en évaluant son mode de vie, le seuil de sa douleur, le genre de travail et d'activités
          exercées, son alimentation, les chutes ou accidents antérieurs et sa posture, l'ostéopathe pourra cibler et
          déterminer une série de traitements spécifiques à son cas. Il aura une approche unique. </p>
        <p>Son but premier est de rétablir la motricité, la souplesse du corps et d'apporter un soulagement de la douleur.
          Par sa formation, l'ostéopathe aura une incidence sur presque toutes les composantes du corps humain comme les
          os, les tendons, les articulations et même les composantes du crâne pour les gens souffrants de migraine. Ses
          manipulations ou palpations rétablissent toutes les circulations dans le corps (sanguine et lymphatique), ainsi
          que le métabolisme entier.</p>
        <p class="score">Voici quelques exemples des différentes conditions dans lesquelles l'ostéopathe peut intervenir:
        </p>
        <div>
          <ul class="grid-liste">
            <li>lombalgie</li>
            <li>rhumatismes</li>
            <li>entorse</li>
            <li>torticolis</li>
            <li>cervicalgies</li>
            <li>rachialgies</li>
            <li>constipation</li>
            <li>diarrhées</li>
            <li>ballonnements</li>
            <li>syndrome du côlon irritable</li>
            <li>migraine</li>
            <li>céphalées</li>
            <li>otites chroniques</li>
            <li>vertiges</li>
            <li>bourdonnements d'oreilles</li>
            <li>sinusites</li>
            <li>congestion nasale</li>
            <li>coliques</li>
            <li>insomnies</li>
            <li>concentration</li>
            <li>mémoire</li>
            <li>névralgie faciale</li>
            <li>gestion du stress</li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
h3 {
  color: var(--main);
  font-family: var(--mont);
  font-size: 1.6rem;
}

li {
  padding-bottom: 5px;
}

.grid-liste {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0rem 6rem;
}

.sub {
  font-weight: 600;
  padding: 10px 0 5px;
}

.score {
  font-weight: 400;
  padding-bottom: 8px !important;
  margin-bottom: 16px;
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

  background: url('~assets/images/osteopathe.jpg') no-repeat center right;
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
  width: 1100px;
}

.box-wrapee {
  /* max-width: 100%;
  margin: 0 auto;
  width: 95%; */
  /* background-color: #e1d0be17; */
  padding: 100px;
}

h1 {
  font-family: var(--mont);
  font-weight: 600;
  font-size: 2.8rem;
  color: var(--main-dark-2);
  padding-bottom:50px;
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
    margin-bottom: 0px;
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


  h1 {
    font-size: 8vw;
    margin-bottom: 0rem;
    font-weight: 500 !important;
    font-family: var(--sophia);
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
    font-size: 1rem;
    padding: 8px 10px 8px;
    border-radius: 3px;
  }


  p,
  li {
    font-size: 1rem;
  }


  h1 {
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 15px;
  }

  .masthead {
    height: 200px;
    min-height: 200px;
  }

  .page-wrap {
    padding: 50px 0 50px
  }

  .page-wrap p {
    padding-bottom: 26px;
    margin-bottom: 0;
  }

  .score {
    font-weight: 400;
    padding-bottom: 14px !important;
  }

  ul {
    padding-left: 21px;
  }

  li {
    padding-bottom: 10px;
  }

  li {
    padding-bottom: 5px;
  }

  .grid-liste {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0rem 0rem;
  }
}
</style>