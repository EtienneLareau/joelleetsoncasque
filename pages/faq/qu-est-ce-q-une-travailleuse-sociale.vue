<template>
  <div>
    <section class="masthead" role="" aria-label="Image Description">
      <div class="">
        <!-- <div class="wrap-title">
          <div class="box-wrapee">
            <div>
              <h1 class="">Qu'est-ce qu'une <span style="font-style: italic;font-weight:400;">infirmière praticienne
                  spécialisée</span> ?
              </h1>
            </div>

          </div>
        </div> -->
      </div>
    </section>
    <article class="page-wrap">
      <div>
        <h1>Qu'est-ce qu'une travailleuse sociale</h1>
      </div>
      <div class="paragraph">
        <p>Une travailleuse sociale est une professionnelle qui vise à aider les personnes, les familles et les
          communautés à surmonter les défis et les obstacles qui entravent leur bien-être. Elles utilisent généralement
          une approche holistique pour aider leurs
          clients à évaluer leurs besoins, à comprendre leurs forces et leurs faiblesses, et à accéder
          aux ressources dont ils ont besoin pour améliorer leur vie. </p>
        <p class="score">Voici une liste des services proposés :</p>
        <div>
          <ul>
            <li>Consultations familiales</li>
            <li>Deuil et perte</li>
            <li>Transitions étapes de vie (via adulte, études, parentalité, retraite)</li>
            <li>Difficultés de comportements chez les enfants</li>
            <li>Gestion du stress, estime de soi</li>
            <li>Épuisement professionnel</li>
            <li>Problème relationnel</li>
            <li>Défis conjugaux</li>
            <li>Séparation/divorce</li>
            <li>Situation de crise</li>
            <li>Trouble de l’anxiété</li>
            <li>Trouble dépressif</li>
            <li>Dépendance</li>
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

.sub {
  font-weight: 600;
  padding: 10px 0 5px;
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

  background: url('~assets/images/travailleusesociale.jpg') no-repeat center right;
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


.score {
    font-weight:400;
    padding-bottom:8px !important;
    margin-bottom:16px;
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
  color:var(--main-dark-2);
  margin-bottom: 50px;
  /* font-family: var(--sophia); */
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
    /* font-size: 8vw; */
    margin-bottom: 0rem;
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
    font-size: 1rem;
    padding: 8px 10px 8px;
    border-radius: 3px;
  }

  p,li {
    font-size:1rem;
  }


  h1 {
    font-size: 1.2rem;
    font-weight:500;
    padding-bottom:15px;
  }

  .masthead {
    height:200px;
    min-height: 200px;
  }

  .page-wrap {
    padding:50px 0 50px
  }

  .page-wrap p {
    padding-bottom:26px;
    margin-bottom:0;
  }
  .score {
    font-weight:400;
    padding-bottom:16px !important;
  }
  ul {
    padding-left:21px;
  }
  li {
    padding-bottom:15px;
  }
}
</style>