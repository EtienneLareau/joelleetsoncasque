<template>
  <div>
    <section class="masthead" role="" aria-label="Image Description">
      <!-- <div class="">
        <div class="wrap-title">
          <div class="box-wrapee">
            <div>
              <h1 class="">Qu'est-ce qu'une <span style="font-style: italic;font-weight:400;">infirmière praticienne
                  spécialisée</span> ?
              </h1>
            </div>

          </div>
        </div>
      </div> -->
    </section>
    <article class="page-wrap">
      <div>
        <h1>Qu’est-ce qu’une infirmière praticienne spécialisée (IPS)</h1>
      </div>
      <div class="paragraph">
        <p>L’IPS est une infirmière en pratique avancée dont l’exercice est encadré par le champ d’exercice infirmier. En
          plus des activités professionnelles réservées aux infirmières, l’IPS peut exercer des activités
          additionnelles. </p>
      </div>
      <div>
        <p class="le-titre">Les IPS peuvent :</p>
        <ul class="chalk">
          <li>
            diagnostiquer des maladies</li>
          <li>
            prescrire des examens diagnostiques </li>
          <li>
            utiliser des techniques diagnostiques invasives ou présentant des risques de préjudice (ex. : biopsie
            cutanée, ponction lombaire, etc.)</li>
          <li>
            déterminer et prescrire des traitements médicaux (ex. : physiothérapie, alimentation particulière)</li>
          <li>
            prescrire, administrer ou ajuster des médicaments et d'autres substances </li>
          <li>
            faire différentes interventions comme : des points de suture, une infiltration dans une articulation, etc.
          </li>
        </ul>
      </div>
      <div>
        <p class="le-titre">Les IPS pratiquent également les activités réservées aux infirmières, par exemple :</p>
        <ul class="chalk">
          <li>
            évaluer la condition physique et mentale d'une personne</li>
          <li>
            faire le suivi des personnes ayant certains problèmes de santé</li>
          <li>
            traiter des plaies et des altérations de la peau</li>
          <li>
            appliquer des techniques invasives (ex. : installer une sonde urinaire ou un cathéter veineux)</li>
          <li>
            vacciner</li>
          <li>
            évaluer un enfant de O à 5 ans qui présente des indices de retard de développement afin de le diriger, si
            nécessaire, vers des services de réadaptation et d'adaptation répondant à ses besoins</li>
        </ul>
      </div>
      <div>
        <p class="le-titre">Les IPS peuvent intervenir auprès de diverses personnes.</p>
        <div class="sub-gras">Première ligne</div>
        <p>
          Personnes de tout âge qui nécessitent des soins de santé de proximité, dont celles avec des problèmes de santé
          mentale. Les IPS accompagnent ces personnes dans la prise en charge de maladies chroniques (ex. : diabète,
          hypertension, etc.) et dans le traitement de problèmes de santé courants (otite, infection urinaire, etc.).
          Elles peuvent également faire des suivis de grossesse ou accompagner les patients en fin de vie.
        </p>
      </div>
    </article>
  </div>
</template>

<style scoped>
ul {
  list-style-type: disc;
  color:#fff;
}

h3 {
  color: var(--main);
  font-family: var(--mont);
  font-size: 1.6rem;
}

p.le-titre {
  margin: 0;
  padding-bottom: 1rem;
  font-weight: 500;
}

.chalk {
  margin-bottom: 50px;
}

.chalk li::first-letter {
  text-transform: capitalize;
}

.chalk li {
  list-style-type: disc;
  color:#333;
}

.sub-gras {
  font-weight: 600;
  font-size: 1.4rem;
  margin-top: 10px;
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

  background: url('~assets/images/ips2.jpg') no-repeat bottom right;
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
  margin-bottom: 50px;
  color: var(--main-dark-2)
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
  button {
    padding: 12px 20px 12px;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
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
    font-weight: 500 !important;
    font-family: var(--sophia);
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
    padding-bottom: 15px;
  }

  .grid-liste {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0rem 0rem;
  }
}
</style>