<template>
  <div>
    <section class="masthead" role="" aria-label="Image Description">
    </section>
    <div class="title">
      <h1>COMMENT</h1>
      <h1 class="title-left">PRENDRE</h1>
      <h1 class="title-right">RENDEZ-VOUS</h1>
    </div>
    <section id="rdv">
      <div class="grid-groups">
        <div class="grid-card">
          <div>
            <img src="~assets/illustrations/byphone.svg" alt="" width="200">
          </div>
          <div class="wrap-info">
            <p class="titre">Prenez rendez-vous par téléphone</p>
            <p class="desc">Vous pouvez prendre un rendez-vous, par téléphone, en composant le <span
                style=" white-space: nowrap; "><a href="tel:8192530168">819 253-0168</a></span>. Ayez en main votre carte
              d'assurance maladie du Québec (RAMQ) ainsi que votre liste de médicament.</p>
            <p class="desc">Une confirmation de rendez-vous vous sera envoyée par courriel ou par texto lors de la prise
              de rendez-vous.</p>
          </div>
        </div>
        <div class="grid-card">
          <div>
            <img src="~assets/illustrations/inperson.svg" alt="" width="200">
          </div>
          <div class="wrap-info">
            <p class="titre">Prenez rendez-vous en personne</p>
            <p class="desc">Vous pouvez prendre rendez-vous en vous présentant à la clinique. Ayez en main votre carte
              d'assurance maladie du Québec (RAMQ), votre liste de médicament, ainsi que votre sourire.</p>
            <p class="desc">Une confirmation de rendez-vous vous sera envoyée par courriel ou par texto lors de la prise
              de rendez-vous.</p>
          </div>
        </div>
        <div class="grid-card">
          <div>
            <img src="~assets/illustrations/online.svg" alt="" width="200">
          </div>
          <div class="wrap-info">
            <p class="titre">Prenez rendez-vous en ligne</p>
            <p class="desc">Appuyez sur l'onglet ci-dessous pour effectuer une demande de rendez-vous en ligne.</p>
            <p class="desc">Une confirmation de rendez-vous vous sera envoyée par courriel ou par texto lors de la prise
              de rendez-vous.</p>
            <!-- <a href="https://www.gorendezvous.com/cliniqueipsdequartier?companyId=132377"><button>Prenez rendez-vous</button></a> -->

            <!-- <div data-professionalpagename="cliniqueipsdequartier" data-bookingwidgeturlparams="companyId=132377"
              data-language="fr" data-label="PRENEZ RENDEZ-VOUS" data-url="https://www.gorendezvous.com/"
              class="gorendezvous-button bende" data-buttoncolor="custom" data-width="280px" data-height="80px"><a
                id="gobutton" class="" href="https://www.gorendezvous.com/cliniqueipsdequartier?companyId=132377"
                target="GOrendezvous">PRENEZ
                RENDEZ-VOUS</a></div> -->

            <div class="gorendezvous-button bende"><a id="gobutton" class=""
                href="https://clients3.clicsante.ca/65319">PRENEZ
                RENDEZ-VOUS</a></div>

          </div>
        </div>
      </div>
    </section>

    <section class="added-fee">
      <div>
        <img src="~assets/icons/idee.svg" alt="">
      </div>
      <div>
        <p>Des frais de 25$ vous serons administré pour toutes demandes de rendez-vous cédulé après 17h00 ou durant les
          fins
          de semaine. </p>
      </div>
    </section>

    <div class="title la-suite">
      <h1>UNE FOIS</h1>
      <h1 class="title-left">LE RENDEZ-VOUS</h1>
      <h1 class="title-right">PRIS</h1>
    </div>

    <section id="confirme">
      <div class="fond-pale">
        <div class="grid-sujet-texte area-up">
          <div class="down">
            <p class="titre fonce">
              Confirmation de rendez-vous
            </p>
            <p>Une confirmation de rendez-vous vous sera envoyée par courriel ou par texto lors de la prise de votre
              rendez-vous.</p>
            <p>Un premier rappel vous sera envoyé 72h avant votre rendez-vous. Un deuxième rappel vous sera acheminé 48h
              avant,
              afin de
              confirmer votre présence. Enfin, un 3ème et dernier rappel vous sera envoyé la veille, soit 24h avant votre
              rendez-vous.</p>
            <p>Si vous n'avez pas confirmer votre présence avant votre rendez-vous, nous communiquerons avec vous.</p>
            <!-- <p>Dans le cas où vous ne vous présentiez pas à votre rendez-vous OU dans le cas d'une cancellation, veuillez
              consulter notre <NuxtLink style="color:var(--bleu); font-weight:600;" to="#cancel">Politique d'annulation
              </NuxtLink>
            </p> -->
            <p>COVID-19 ***
              Pour le respect et la santé de l’équipe et de notre clientèle, si vous avez des symptômes
              grippaux ou apparentés à la Covid 19, veuillez-nous en aviser. Le type de rendez-vous qui
              vous a été attribué pourra être déplacé ou ajusté au besoin. </p>
          </div>
          <div class="up">
            <div class="bg-img-2" />
            <!-- <img src="~assets/images/confirm.jpg" alt=""> -->
          </div>
        </div>
      </div>
    </section>


    <div class="title la-suite-de-la-suite">
      <h1>LORS DE MON</h1>
      <h1 class="title-left">PREMIER</h1>
      <h1 class="title-right">RENDEZ-VOUS</h1>
    </div>

    <section id="quoi">
      <div class="fond-pale">
        <div class="grid-sujet-texte">
          <div>
            <div class="bg-img-1" />
          </div>
          <div>
            <p class="titre fonce">
              Que dois-je avoir en ma possession lors de mon premier rendez-vous ?
            </p>
            <div>

              <ul>
                <li class="mark-arrow">
                  Votre liste de médicaments à jour s’il y a lieu
                </li>
                <li class="mark-arrow">
                  Tous documents médicaux pouvant nous être utile lors de la consultation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="cancel"></div>
    </section>


    <!-- 
    <div class="title la-suite-de-la-suite">
      <h1>NOTRE</h1>
      <h1 class="title-left">POLITIQUE</h1>
      <h1 class="title-right">D'ANNULATION</h1>
    </div> -->

    <!-- 
    <section id="politique-d-annulation">
      <div class="fond-pale">
        <div class="grid-sujet-texte">
          <div>
            <div class="bg-img-3" />
          </div>
          <div>
            <p class="titre fonce">
              Politique d'annulation
            </p>
            <p>
              Ouverture de dossier pour chaque membre de la famille, 1 fois par année Non remboursable /Remboursement de
              50% si annulation moins de 24 heures de préavis.</p>
            <p>
              Prendre un dépôt par carte de crédit lors de la planification du RDVS (50%) et aviser que non remboursable
              si annule moins de 24 heures avant ou ne se présente pas.</p>
            <p>

              Si un patient annule son rdv moins de 24h à l'avance ou ne se présente pas à son RDV sans aviser...

            </p>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {


  // mounted() {
  //   !function (d, s) { var js, sid = "gorendezvous-bookingwidget-script"; var sEl = d.getElementById(sid); if (sEl) { sEl.parentNode.removeChild(sEl); } js = d.createElement(s); js.id = sid; js.src = "https://www.gorendezvous.com/Scripts/gorendezvous.bookingWidgetV2.min.js?v=" + (Math.floor(new Date().getTime() / (1000 * 60 * 30)) * (1000 * 60 * 30)).toString(); d.body.appendChild(js); }(document, "script");
  // },

  head() {
    return {
      title: 'Comment prendre rendez-vous | Clinique médicale privée',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Vous pouvez prendre un rendez-vous, par téléphone, en composant le 819 253-0168, vous pouvez prendre rendez-vous en vous présentant à la clinique ou vous pouvez effectuer une demande de rendez-vous en ligne via le site web.'
        }
      ]
    }
  }
}
</script>

<style scoped>
p,
a,
li {
  /* margin-bottom: 0; */
  text-align: left;
  font-weight: 300;
  font-size: 1.4rem;
  text-decoration: none;
}

a {
  color: var(--main-dark-2);
  font-weight: 400;
}

li {
  list-style-type: decimal;
  margin-bottom: 26px;
}


img {
  width: 100%;
  height: auto;
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
  transition: 200ms;
}

button:active,
button:focus,
button:hover {
  background-color: #333;
  border-color: #333;
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
  font-size: 4rem;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  color: grey
}

#rdv {
  padding: 150px 0 0;
}

.bender {
  background-color: var(--main-dark-2);
  padding: 15px 25px;
  font-family: var(--sophia) !important;
  font-weight: 400 !important;
  display: inline-block;
  color: #fff !important;
  text-decoration: none !important;

}

.bender>a {
  color: #fff !important;
  font-weight: 700 !important;
  /* letter-spacing: 1px; */
  text-decoration: none !important;
  font-size: 1.1rem;
  border-radius: 5px !important;
}

.mark-arrow:before {
  content: '\2192';
  color: var(--main);
}

.grid-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  width: 90%;
  max-width: 1180px;
  margin: 0 auto 120px;
}

.grid-card:last-child {
  margin-bottom: 70px;
}

.titre {
  font-weight: 400;
  font-size: 2rem;
}

.added-fee {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 2rem;
  max-width: 960px;
  margin: 0 auto 150px;
  padding: 30px 30px 30px;
  ;
  background-color: var(--main-bg);
  border: 10px;
}

.added-fee>div:last-child {
  display: flex;
  align-items: center;
}

.added-fee img {
  max-height: 100px;
  display: block;
}

.added-fee p {
  padding: 0;
  margin: 0;
  font-weight: 400;
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

.fond-pale {
  background-color: var(--main-pale-2);
  width: 90%;
  max-width: 1580px;
  margin: 0 auto;
}

.fond-pale-deux {
  background-color: var(--main-pale);
  width: 90%;
  max-width: 1580px;
  margin: 0 auto;
}


.fond-pale-trois {
  background-color: var(--main-dark-2);
  width: 90%;
  max-width: 1580px;
  margin: 0 auto;
}

.grid-sujet-texte {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  padding: 70px 0;
  max-width: 1480px;
  margin: 50px auto;
  width: 90%;
  z-index: 2;
  position: relative;
  /* border-top: 1px solid #333;
  border-bottom: 1px solid #333;  */
}

.grid-sujet-texte div {}

.fonce {
  color: #000;
}


.bg-img-1 {
  background: url('~assets/images/photos/EI__2564-Edit.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  /* height: 160%; */
  /* top:-100px;
  left: -50px;
  position: relative; */
}


.bg-img-2 {
  background: url('~assets/images/reception.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.bg-img-3 {
  background: url('~assets/images/cancel.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.area-up {
  grid-template-areas: "down up";
}

.up {
  grid-area: up;
}

.down {
  grid-area: down;
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
    padding-left: 10px;
  }

  li {
    font-size: 1rem;
    padding-bottom: 0px;
    margin-bottom: 10px;
    padding-top: 10px;
  }

  .grid-card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 90%;
    max-width: 1180px;
    margin: 0 auto 50px;
  }

  #rdv {
    padding-top: 50px;
    padding-bottom: 0px;
  }

  #rdv img {
    width: 50%;
    max-width: 150px;
  }

  .titre {
    font-weight: 400;
    font-size: 1.4rem;
    /* font-family: var(--audrey-bold); */
    line-height: 1.21;
    padding-top: 10px;
  }

  .fond-pale,
  .fond-pale-deux {
    width: 100%;
  }

  .grid-sujet-texte {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 7.5vw 0;
    /* max-width: 1480px; */
    margin: 5vw auto;
    width: 85%;
    z-index: 2;
    position: relative;
    /* border-top: 1px solid #333;
  border-bottom: 1px solid #333;  */
  }

  .grid-sujet-texte div {
    min-height: 150px;
  }

  .area-up {
    grid-template-areas: "up"
      "down";
  }

  .la-suite {
    padding-top: 0px !important;
    padding-bottom: 10px;
  }

  .la-suite-de-la-suite {
    padding-top: 50px !important;
    padding-bottom: 10px;
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

  background: url('~assets/images/rdv.jpg') no-repeat center right;
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
    background: url('~assets/images/rdv.jpg') no-repeat center right;
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

  .added-fee {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 960px;
    margin: 0 auto 70px;
    padding: 30px 30px 30px;
    ;
    background-color: var(--main-bg);
    border: 10px;
  }

  .added-fee>div:last-child {
    display: flex;
    align-items: center;
  }

  .added-fee img {
    max-height: 50px;
    display: block;
  }

  .added-fee p {
    padding: 0;
    margin: 0;
    font-weight: 400;
  }
}
</style>