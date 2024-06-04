<template>
  <div>
    <!-- <section class="masthead" role="" aria-label="Image Description">
      <div>
        <div class="wrap-title">
          <div class="box-wrapee">
            <div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="hero-img-top">
      <img src="~assets/images/photos/IMG_3145-Edit.jpg" alt="Les employés de la clinique médicale privée">
    </section>
    <div class="title">
      <!-- <h1>À PROPOS</h1> -->
      <!-- <h1 class="title-left"></h1> -->
      <h1 class="title-righ slag">NOTRE ÉQUIPE</h1>
    </div>
    <div class="bump-on-mobile">
      <section id="mctessier" class="pull-left">
        <div class="grid-equipe">
          <div class="left">
            <img src="~assets/images/photos/EI__2769-Edit-3.jpg" alt="">
          </div>
          <div class="right">
            <p class="nom">Marie-Claude Tessier</p>
            <p class="job">IPS | Fondatrice</p>
            <div class="descript">
              <p>
                À la recherche d'une carrière, c'est après son inscription au DEP en plomberie que Marie-Claude décida de
                changer de cap et faire le saut en soins infirmiers au Cégep de Drummondville, une révélation absolue !
              </p>
              <p>
                Après un parcours varié entre autres, en traumatologie, soins intermédiaires à l'hôpital de Sacré-Cœur, en
                gériatrie et aux urgences d'Anna-Laberge à Châteauguay ainsi qu'aux soins intensifs de La Malbaie Pointe
                aux
                pics, l'hôpital de Verdun et Châteauguay, elle débuta son Baccalauréat à l'Université de Montréal durant
                sept ans ou elle y tira une expertise solide en toxicomanie, en soins communautaires, en soins critiques
                ainsi qu'en santé mentale. </p>
              <button class="bouton-deux" @click="Revealdestess">Voir plus</button>
              <div class="show-deux">
                <p>
                  Curieuse et avide de connaissances, Marie-Claude entama sa Maitrise en sciences cliniques à l'Université
                  de
                  Sherbrooke ainsi que le DESS en pratique avancée, menant au diplôme comme infirmière praticienne
                  spécialisée
                  (IPS). </p>
                <p>
                  Passionnée de la santé mentale, elle orienta son essai de maitrise sur les troubles envahissants du
                  développement. </p>
                <p>
                  Insatiable au niveau des défis professionnels et voulant répondre à un besoin de rapprochements de la
                  communauté, elle trimbala sa jeune famille dans le Grand Nord afin de se perfectionner et de vivre des
                  expériences humaines enrichissantes.</p>
                <p>
                  Elle ajouta au fil du temps plusieurs autres cordes à son arc comme tutrice, chargée de cours au
                  baccalauréat en soins infirmiers à l'Université de Sherbrooke ainsi qu'à l'université de Sudbury en
                  Ontario.
                </p>
                <p>
                  Ce n'est que quelques années plus tard quelle fera le saut vers le privé ou elle y développera une
                  expertise
                  incomparable en télémédecine entre autre comme première consultante IPSPL volet développement médical
                  d'Olive, votre clinique virtuelle santé.</p>
                <p>
                  Passionnée des zones grises et de la santé de la femme, Marie-Claude possède un vif intérêt pour la
                  médecine
                  interne ainsi que pour l'hormonothérapie féminine. </p>
                <p>
                  C'est en toute simplicité et sincérité qu'elle vous accueillera à la Clinique IPS de Quartier. </p>
                <p>
                  Soyez les bienvenus </p>
                <div>
                  <p>Le plus sincère des merci d'avoir contribué à mon évolution personnelle et professionnelle sans qui
                    je
                    ne
                    serais sans doute pas la même personne sans vous :
                  </p>
                  <ul>
                    <li>
                      Dre Pascale Garnier</li>
                    <li>
                      Dre France Quintal</li>
                    <li>
                      Dr Louis Laneville </li>
                    <li>
                      Dr Jean Tran</li>
                    <li>
                      Dr Daniel Biron </li>
                    <li>
                      Dre Sylvie Larocque (PhD)</li>
                    <li>
                      Nancy Guillemette (IPSPL)</li>
                    <li>
                      Geneviève Dubé (Praxis)</li>
                    <li>
                      Kevin Girard (IPSPL)</li>
                    <li>
                      Alexandre Ménard (Mon mentor en tableau Excel et en finances) </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div class="floaty"></div>
        </div>
      </section>

      <section id="kim" class="pull-right">
        <div class="grid-equipe wight">
          <div class="floaty"></div>
          <div class="left">
            <img src="~assets/images/photos/IMG_2591-Edit-5.jpg" alt="">
          </div>
          <div class="right">
            <p class="nom">Kimberly Anne Call</p>
            <p class="job">Infirmière</p>
            <div class="descript">
              <p>
                Infirmière depuis 2020, Kimberly travaille en première ligne depuis 2021. Ayant un désir
                d'apprendre qui ne cesse de grandir, elle cherche toujours à se surpasser. C'est d'ailleurs pour cette
                raison qu'elle s'est jointe à l'équipe de la Clinique IPS de Quartier.
                Son écoute, son empathie, son professionnalisme et son sens de l'humour se retrouvent au cœur de
                ses soins. Elle sera en mesure d'instaurer un lien de confiance dès votre première rencontre.
                Toujours souriante et de bonne humeur, Kimberly saura bien vous accueillir lors de votre
                prochaine visite à la Clinique IPS de Quartier.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section id="stephanie" class="pull-left">
        <div class="grid-equipe">
          <div class="left">
            <img src="~assets/images/photos/IMG_2841-Edit-3.jpg" alt="">
          </div>
          <div class="right">
            <p class="nom">Stéphanie Tessier</p>
            <p class="job">Infirmière</p>
            <div class="descript">
              <p>
                Après 20 ans dans le domaine pharmaceutique, j'ai réorienté ma carrière vers un secteur connexe, les soins
                infirmiers, en ayant à cœur le bien-être des gens. Au cours de ma formation, je me suis démarquée par mon
                approche humaine, mon professionnalisme et mon intérêt marqué par tout le volet clinique de la profession.
              </p>
              <p>
                J'ai par la suite commencé à exercer comme infirmière au département de médecine de l'Hôpital Sainte-Croix
                à
                Drummondville, puis assistante infirmière-chef, tout en poursuivant ma formation au baccalauréat en
                sciences
                infirmières. C'est alors que l'opportunité de me joindre à la belle équipe de la nouvelle Clinique IPS de
                Quartier s'est offerte à moi, et c'est avec un immense plaisir que je traiterai mes patients avec toute la
                passion qui m'anime !
              </p>
              <p>
                Au plaisir de vous rencontrer !
              </p>
            </div>
          </div>
          <div class="floaty"></div>
        </div>
      </section>

      <section id="antoine" class="pull-right">
        <div class="grid-equipe wight">
          <div class="floaty"></div>
          <div class="left">
            <img src="~assets/images/photos/IMG_2375-Edit-5.jpg" alt="">
          </div>
          <div class="right">
            <p class="nom">Antoine Durocher</p>
            <p class="job">Infirmier auxiliaire</p>
            <div class="descript">
              <p>
                Après avoir occupé un poste de préposé aux bénéficiaires durant deux ans, Antoine désirait
                optimiser ses compétences et apporter davantage de soins aux patients. Il poursuivi ainsi ses
                études pour obtenir son diplôme du programme de formation Santé, assistance et soins
                infirmiers qu’il obtenu en 2016. Depuis, il a travaillé à titre d’infirmier auxiliaire principalement
                à l’hôpital Ste-Croix en médecine générale et en soins palliatifs. Les soins qu’il apporte reflète
                ses valeurs fondamentales. Antoine est une personne humaine, compréhensible et dévoué. Le
                bien-être de ses patients est au cœur des soins qu’il apporte.
              </p>
              <p>
                Toujours soucieux de rendre le meilleur de lui-même pour mieux vous servir.
                Nous sommes honorés de l’accueillir, il apportera un peu de masculinité dans l’équipe.
              </p>
              <p>
                Au plaisir de vous rencontrer !
              </p>
            </div>
          </div>
          
        </div>
      </section>
<!-- 
      <section id="sonia" class="pull-left">
        <div class="grid-equipe">
          
          <div class="left">
            <img src="~assets/images/photos/IMG_2293-Edit-5.jpg" alt="">
          </div>
          <div class="right">
            <p class="nom">Sonia Parenteau</p>
            <p class="job">Secrétaire médicale</p>
            <div class="descript">
              <p>
                Sonia est une mère de deux grands enfants et grand-mère de cinq petits enfants
                avec une vie bien remplie.
              </p>
              <p>Elle a travaillé plus de 20 ans au service à la clientèle. Sa soif de connaissance et
                son intérêt marqué pour le domaine de la santé l'ont menée à effectuer un retour
                aux études, afin d'obtenir un diplôme en secrétariat médical en 2008.</p>
              <p>Elle a occupé ce poste dans quelques secteurs, dont principalement au GMF
                Centre de santé à Drummondville plus de 10 ans.</p>
              <p>Elle saura vous accueillir de façon conviviale, avec le sourire.</p>
            </div>
          </div>
          <div class="floaty"></div>
        </div>
      </section> -->
<!-- 
      <section id="nathalie" class="pull-left">
        <div class="grid-equipe">
          
          <div class="left">
            <img src="~assets/images/photos/IMG_2830-Edit-3.jpg" alt="">
          </div>
          <div class="right">
            <p class="nom">Nathalie Desfossés</p>
            <p class="job">Travailleuse sociale</p>
            <div class="descript">
              <p>
                J'ai le privilège d'apprendre de cette profession depuis 2010. J'ai commencé ma carrière dans le milieu
                public, et ce durant plus de dix ans. Ensuite je me suis orienté vers le milieu privé pour œuvrer auprès
                des
                clientèles provenant principalement de programme d'aide aux employés. J'ai ainsi pu œuvrer auprès des
                familles et des clientèles adultes vivant des enjeux en santé mentale. J'ai également un parcours
                approfondi
                auprès des personnes qui vivent des situations psychosociales d'ordre plus général, tel des séparations,
                deuil, problème relationnel, estime de soi, etc. À travers mon chemin, j'ai également œuvré au sein d'un
                groupe de médecine familiale de même qu'à info sociale, à titre de travailleuse sociale et de formatrice
                régionale.
              </p>
              <button class="bouton-un" @click="Revealdesfosses">Voir plus</button>
              <div class="show-un">
                <p>
                  Je me suis ainsi perfectionnée durant toutes ces années à accompagner une clientèle très variée à
                  surmonter
                  des problématiques très variées. J'ai suivi des formations continues me permettant de toujours
                  m'améliorer
                  dans ma pratique professionnelle et ainsi être en mesure de m'adapter rapidement et donner les meilleurs
                  services que possibles à chacun. Il me fera plaisir de partager avec vous mon expérience et mettre au
                  profit
                  de votre mieux-être ma personnalité et mes connaissances afin de vous aider à atteindre vos objectifs.
                </p>
                <p>
                  Au plaisir de vous rencontrer,
                </p>
              </div>

            </div>
          </div>
        </div>
      </section> -->

      <section id="chantale" class="pull-left">
        <div class="grid-equipe">
          <!-- <div class="floaty"></div> -->
          <div class="left">
            <img src="~assets/images/photos/IMG_2949-Edit-3.jpg" alt="">
          </div>
          <div class="right">
            <p class="nom">Chantale Goulet</p>
            <p class="job">Osthéopathe</p>
            <div class="descript">
              <p>
                Chantale a débuté sa carrière en obtenant son cours de praticienne en massage
                en 2004, voulant se perfectionner, elle obtient son diplôme en massothérapie et
                en orthothérapie en 2006. Son désir constant d’améliorer ses connaissances
                explique son intérêt pour de nouvelles approches thérapeutiques, elle compléta
                ainsi sa formation en ostéopathie en 2010. Durant toutes ses années, elle cumula
                son expérience en pratiquant, entres autres, chez Bioterra Spa Santé Urbain, et
                pour sa propre entreprise depuis 2019.</p>
              <p> Chantale est passionnée des soins
                holistiques. Avec l’ensemble de ses formations et son professionnalisme, elle
                saura vous offrir le traitement spécifique à vos besoins. C’est avec un immense
                plaisir qu’elle se joindra à l’équipe de la Clinique IPS de Quartier.
              </p>
            </div>
          </div>
          <div class="floaty"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    Revealdesfosses() {
      document.querySelector('.show-un').classList.toggle('show-me-un')
      document.querySelector('.bouton-un').style.display = "none"
      // if (document.querySelector('.bouton-un').innerHTML != 'Voir moins') {
      //   document.querySelector('.bouton-un').innerHTML = 'Voir moins'
      // } else {
      //   document.querySelector('.bouton-un').innerHTML = 'Voir plus'
      // }

    },

    Revealdestess() {
      document.querySelector('.show-deux').classList.toggle('show-me-deux')
      document.querySelector('.bouton-deux').style.display = "none"
      // if (document.querySelector('.bouton-un').innerHTML != 'Voir moins') {
      //   document.querySelector('.bouton-un').innerHTML = 'Voir moins'
      // } else {
      //   document.querySelector('.bouton-un').innerHTML = 'Voir plus'
      // }

    }
  }
}
</script>

<style scoped>
p {
  /* margin-bottom: 0; */
  text-align: left;
  font-weight: 300;
  font-size: 1.4rem;
}

img {
  border-radius: 2px;
  height: auto;
  width: 100%;
  
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
.hero-img-top {
  max-width:2100px;
  margin: 0 auto;
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
  /* height: 410px; */
  height:auto;
  padding: 0px 0;
}


.show-me-deux {
  transition: 200ms ease-in-out;
  /* height: 1580px; */
  height:auto;
  
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
  width: 90%;
  height: auto;
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





@media only screen and (max-width:1280px) {

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
  top: 0px;
}

@media only screen and (max-width:1580px) {
  h1 {
  font-size: 3rem;
  text-align: center;
  font-weight: 300;
  color: #333;
  letter-spacing: 10px;
  position: relative;
  z-index: 10;
}
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

  .bump-on-mobile {
    padding-bottom:70px;
  }

/* 
  .show-me-un {
    transition: 200ms ease-in-out;
    height: 370px;
    padding: 0px 0;
  } */
/* 
  .show-me-deux {
    height: 1396px;
  } */


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


  .wight {
    grid-template-columns: 1fr !important;
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
    gap: 1rem;
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

  background: url('~assets/images/photos/IMG_3145-Edit.jpg') no-repeat center center;
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
    background: url('~assets/images/photos/IMG_3145-Edit.jpg') no-repeat center right;
    background-size: cover;
    background-color: var(--beige);
    background-color: #fff;
    background-color: var(--fond);
  }

  .title {
    padding-top: 0px;
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