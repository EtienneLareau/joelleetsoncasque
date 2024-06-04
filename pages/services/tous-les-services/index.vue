<template>
  <div>
    <div class="section-titre">
      <h1>Nos <span style="color:var(--main-dark-2)">Services</span></h1>
    </div>

    <section class="added-fee grind bumpes">
      <div>
        <img src="~assets/icons/idee.svg" alt="">
      </div>
      <div>
        <p class="note-saaq">Nous procédons à la révision de notre liste de prix de services pour l'année 2024. Veuillez
          nous contacter pour plus de détail.</p>
      </div>
    </section>

    <div class="end-block">



      <div id="tous-admin" class="wid">
        <div class="grid-arrow" @click="openMenuUn" @keyup="openMenuUn">
          <h2 class="tous-titre">
            Services administratifs
          </h2>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-menu-one"
              viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </button>
        </div>
        <div class="shadow-one">
          <section>
            <div class="grid-quatre" style="border-bottom:none;">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-13.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Ouverture de dossier</p>
              </div>
              <!-- <div class="cost">
                <p>40<span class="small-cost">$</span></p>
              </div> -->
            </div>
            <div class="grid-quatre block-grid">
              <blockquote style="font-style:italic;padding-left:20px;color:grey">* Des frais d’ouverture de dossier au
                montant de 40$ seront appliqués lors de
                votre première
                visite et ceux-ci seront ajoutés annuellement à des fins de gestion de dossier. </blockquote>
              <div></div>
            </div>
          </section>
        </div>
      </div>






      <div class="gree">
        <div id="tous-ips-virtuel" class="wid">
          <div class="grid-arrow" @click="openMenuSept" @keyup="openMenuSept">
            <h2 class="tous-titre">
              Services IPS Virtuels
            </h2>
            <button>
              <!-- <svg class="arrow-menu-one" aria-hidden="true" width="16" height="16">
              <use xlink:href="#arrow" />
            </svg> -->
              <svg xmlns="http://www.w3.org/2000/svg" id="arrow-menu-sept"
                viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </button>
          </div>
          <div class="shadow-sept">
            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Acné (avec envoie de photo)</p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>1 heure</p>
                </div>
              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Contraception</p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>1 heure</p>
                </div>
              </div>
            </section>


            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Mycose des ongles (avec envoie de photo)</p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>1 heure</p>
                </div>
              </div>
            </section>



            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Mal de gorge (avec envoie de photo) </p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">

                <div class="titre-du-service">
                  <p>Renouvellement d’ordonnances simple (1-2 médicaments si bien contrôlé) ex. diabète stable,
                    hypertension contrôlée ***</p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-45.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Renouvellement d’ordonnances multiples (3 médicaments et plus si bien contrôlé) : 50$
                    additionnels à partir du 3e médicaments ***</p>
                </div>
                <!-- <div class="cost">
                  <p>185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Dépistage ITSS sans symptômes</p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-23.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Prophylaxie pré exposition (PreP) et post exposition (PPE)
                  </p>
                </div>
                <!-- <div class="cost">
                  <p>185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-34.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Infection urinaire</p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>


            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-24.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Congestion nasale</p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>
              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-25.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Perte vaginale (vaginite, vaginose)</p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>
              </div>
            </section>
            <section>
              <div class="grid-quatr">
                <div class="frais-en-sus">
                  <p>*** Des frais en sus peuvent s’appliquer</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div class="gree">
        <div id="tous-ips" class="wid">
          <div class="grid-arrow" @click="openMenuDeux" @keyup="openMenuDeux">
            <h2 class="tous-titre">
              Services IPS
            </h2>
            <button>
              <!-- <svg class="arrow-menu-one" aria-hidden="true" width="16" height="16">
              <use xlink:href="#arrow" />
            </svg> -->
              <svg xmlns="http://www.w3.org/2000/svg" id="arrow-menu-two"
                viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </button>
          </div>
          <div class="shadow-two">
            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Bilan de santé de la femme (incluant le Pap test sur lame)</p>
                </div>
                <!-- <div class="cost">
                  <p>450<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>1 heure</p>
                </div>
              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Bilan de santé de la femme (sans Pap test)</p>
                </div>
                <!-- <div class="cost">
                  <p>400<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>1 heure</p>
                </div>
              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Consultation pédiatrique 0-5 ans</p>
                </div>
                <!-- <div class="cost">
                  <p>160<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>1 heure</p>
                </div>
              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Évaluation complexe IPS</p>
                </div>
                <!-- <div class="cost">
                  <p>350<span class="small-cost">$</span></p>
                </div> -->
              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Urgences mineures</p>
                </div>
                <!-- <div class="cost">
                  <p>135 - 185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>1 heure</p>
                </div>
              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Bilan annuels</p>
                </div>
                <!-- <div class="cost">
                  <p>410<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Consultation simple ou complexe</p>
                </div>
                <!-- <div class="cost">
                  <p>135 - 185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>
              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-45.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Problèmes musculosquelettiques</p>
                </div>
                <!-- <div class="cost">
                  <p>185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>
              </div>
            </section>
            <!-- <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Infiltrations de cortisone non-radiologiques</p>
                </div>
                <div class="cost">
                  <p>60<span class="small-cost">$</span> par articulation</p>
                </div>
                <div class="temps">
                  <p>15min.</p>
                </div>
              </div>
            </section> -->
            <!-- <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Chirurgie mineure <span>(retrait lésion bénigne de la peau, drainage d'abcès)</span>
                  </p>
                </div>
                <div class="cost">
                  <p>295 - 350<span class="small-cost">$</span></p>
                </div>
                <div class="temps">
                  <p>15min.</p>
                </div>
              </div>
            </section> -->
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-34.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Contraception générale</p>
                </div>
                <!-- <div class="cost">
                  <p>185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>
              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-24.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Installation de stérilet</p>
                </div>
                <!-- <div class="cost">
                  <p>335<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>
              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-25.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Retrait de stérilet </p>
                </div>
                <!-- <div class="cost">
                  <p>75<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>


            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-25.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Installation de Nexplanon(MD)</p>
                </div>
                <!-- <div class="cost">
                  <p>250<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-25.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Retrait de Nexplanon</p>
                </div>
                <!-- <div class="cost">
                  <p>275<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-27.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Dépistage et traitement des infections transmises sexuellement (ITSS) avec symptômes</p>
                </div>
                <!-- <div class="cost">
                  <p>135<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>


            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-28.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Renouvellement de médicaments </p>
                </div>
                <!-- <div class="cost">
                  <p>135 - 360<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>


            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-29.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Cessation tabagique</p>
                </div>
                <!-- <div class="cost">
                  <p>185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-30.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Suture de lacération peu profonde (excepté visage, mains
                    et pieds)</p>
                </div>
                <!-- <div class="cost">
                  <p>235<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-31.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Apnée du sommeil</p>
                </div>
                <!-- <div class="cost">
                  <p>185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <!-- <section>
            <div class="grid-quatre">
              <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-32.svg" alt="">
              </div>
              <div class="titre-du-service">
                <p>Clinique de l'obésité</p>
              </div>
              <div class="cost">
                <p><span class="small-cost">$</span>45</p>
              </div>
              <div class="temps">
                <p>15min.</p>
              </div>
             
            </div>
          </section> -->
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-35.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Formulaire de la SAAQ | aucun accidenté de la route.</p>
                </div>
                <!-- <div class="cost">
                  <p>190<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-35.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Clinique de l'obésité</p>
                </div>
                <!-- <div class="cost">
                  <p>300<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-35.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Prophylaxie pré exposition (PreP)</p>
                </div>
                <!-- <div class="cost">
                  <p>185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-35.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Prophylaxie post exposition (PPE)</p>
                </div>
                <!-- <div class="cost">
                  <p>185<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>

            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-35.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Hormonothérapie (sur 3 rendez-vous différents) : 1er rendez-vous</p>
                </div>
                <!-- <div class="cost">
                  <p>385<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-35.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Hormonothérapie (sur 3 rendez-vous différents) : 2e rendez-vous</p>
                </div>
                <!-- <div class="cost">
                  <p>385<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <div class="titre-du-service">
                  <p>Hormonothérapie (sur 3 rendez-vous différents) : 3e rendez-vous</p>
                </div>
                <!-- <div class="cost">
                  <p>192,50<span class="small-cost">$</span></p>
                </div> -->
              </div>
            </section>

            <section>
              <div class="grid-quatre mush" @click="openModalCryoCollective">
                <div class="titre-du-service">
                  <p>Cryothérapie (Verrues plantaires) <span><img class="quest" src="~assets/icons/plus.svg"></span></p>
                </div>
                <!-- <div class="cost">
                  <p>90<span class="small-cost">$</span></p>
                </div> -->
              </div>
            </section>
          </div>
        </div>
      </div>
      <div class="gree">
        <div id="tous-ips-en-sante-mentale" class="wid">
          <div class="grid-arrow" @click="openMenuTrois" @keyup="openMenuTrois">
            <h2 class="tous-titre">
              Services IPS en santé mentale
            </h2>
            <button>
              <!-- <svg class="arrow-menu-one" aria-hidden="true" width="16" height="16">
              <use xlink:href="#arrow" />
            </svg> -->
              <svg xmlns="http://www.w3.org/2000/svg" id="arrow-menu-three"
                viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </button>
          </div>
          <div class="shadow-three">
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-17.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Évaluation et diagnostic de TDAH adulte</p>
                </div>
                <!-- <div class="cost">
                  <p>500<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>1 heure</p>
                </div>

              </div>
            </section>
            <section>
              <div class="grid-quatre">
                <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-19.svg" alt="">
                </div> -->
                <div class="titre-du-service">
                  <p>Évaluation et diagnostic de TDAH chez les enfants </p>
                </div>
                <!-- <div class="cost">
                  <p>650<span class="small-cost">$</span></p>
                </div> -->
                <div class="temps">
                  <p>15min.</p>
                </div>

              </div>
            </section>
          </div>
        </div>
      </div>

      <!-- <div id="tous-ips-en-travail-social" class="wid">
        <div class="grid-arrow" @click="openMenuQuatre" @keyup="openMenuQuatre">

          <h2 class="tous-titre">
            Services en travail social
          </h2>
          <button>
           
            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-menu-four"
              viewBox="0 0 448 512">
              <path
                d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </button>

        </div>
        <div></div>
        <div class="shadow-four">
          <section>
            <div class="grid-quatre">
             
              <div class="titre-du-service">
                <p>Consultation individuelle (anxiété, dépression, etc.)</p>
              </div>
              <div class="cost">
                <p>110<span class="small-cost">$</span></p>
              </div>
              <div class="temps">
                <p>1 heure</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre">
             
              <div class="titre-du-service">
                <p>Consultations familiales</p>
              </div>
              <div class="cost">
                <p>130<span class="small-cost">$</span></p>
              </div>
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre">
            
              <div class="titre-du-service">
                <p>Suivi individuel</p>
              </div>
              <div class="cost">
                <p>110<span class="small-cost">$</span></p>
              </div>
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre">
              
              <div class="titre-du-service">
                <p>Suivi familial</p>
              </div>
              <div class="cost">
                <p>130<span class="small-cost">$</span></p>
              </div>
              <div class="temps">
                <p>15min.</p>
              </div>
            </div>
          </section>
        </div>
      </div> -->


      <div id="tous-ips-en-ordonnance-collective" class="wid">
        <div class="grid-arrow" @click="openMenuCinq" @keyup="openMenuCinq">

          <h2 class="tous-titre">
            Traitement par ordonnance collective
          </h2>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-menu-cinq"
              viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </button>
        </div>
        <div class="shadow-five">
          <section>
            <div class="grid-quatre block-grid">
              <blockquote style="padding-left:20px;" class="ordone">Une ordonnance collective (OC) est une
                prescription
                donnée par une infirmière praticienne spécialisée, un médecin ou un autre
                professionnel habileté permettant aux infirmières d’initier de façon
                autonome des mesures diagnostiques et des traitements. L’OC permet ainsi
                d’augmenter l’accessibilité aux soins de santé. </blockquote>
            </div>
            <div></div>
            <div class="grid-quatre">
              <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-17.svg" alt="">
                </div> -->
              <div class="titre-du-service">
                <p>Mal de gorge (Âgé de 3 ans et +)</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>1 heure</p>
              </div>

            </div>
          </section>


          <section>
            <div class="grid-quatre">
              <!-- <div>
                  <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-20.svg" alt="">
                </div> -->
              <div class="titre-du-service">
                <p>Otite moyenne aiguë</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>15min.</p>
              </div>
            </div>
          </section>


          <section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Sinusite</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
            </div>
          </section>

          <section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Infection urinaire (Femme de + de 14 ans)</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
            </div>
          </section>

          <section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Feu sauvage</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
            </div>
          </section>


          <section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Écoulement urétral</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
            </div>
          </section>


          <section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Dépistage des ITSS sans symptômes</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
            </div>
          </section>

          <section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Maladie de Lyme</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
            </div>
          </section>

          <section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Conjonctivite bactérienne</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
            </div>
          </section>

          <section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Zona</p>
              </div>
              <!-- <div class="cost">
                <p>90<span class="small-cost">$</span></p>
              </div> -->
            </div>
          </section>
        </div>
      </div>


      <div id="tous-ips-autres-services" class="wid">
        <div class="grid-arrow" @click="openMenuSix" @keyup="openMenuSix">
          <h2 class="tous-titre">
            Autres services infirmiers
          </h2>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-menu-six"
              viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </button>

        </div>
        <div class="shadow-six">
          <section>
            <div class="grid-quatre mush" @click="openModalPansement">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-84.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Changements de pansements <span><img class="quest" src="~assets/icons/plus.svg"></span> </p>
              </div>
              <!-- <div class="cost">
                <p>à partir de 45<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>1 heure</p>
              </div>

            </div>
          </section>

          <section>
            <div class="grid-quatre mush" @click="openModalInjection">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-85.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Injection de médicaments <span><img class="quest" src="~assets/icons/plus.svg"></span>
                </p>
              </div>
              <!-- <div class="cost">
                <p>20<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-86.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Retrait de sutures</p>
              </div>
              <!-- <div class="cost">
                <p>25<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre mush" @click="openModalOreille">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-87.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Lavage d’oreilles <span><img class="quest" src="~assets/icons/plus.svg"></span> </p>
              </div>
              <!-- <div class="cost">
                <p>40<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-88.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Mesure de la pression artérielle ambulatoire (MAPA)</p>
              </div>
              <!-- <div class="cost">
                <p>80<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-89.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Électrocardiogramme au repos (ECG) </p>
              </div>
              <!-- <div class="cost">
                <p>55<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-90.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Cardio Stat 48 heures</p>
              </div>
              <!-- <div class="cost">
                <p>331,50<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-90.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Cardio Stat 7 jours</p>
              </div>
              <!-- <div class="cost">
                <p>435,50<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <section>
            <div class="grid-quatre">
              <!-- <div>
                <img src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-91.svg" alt="">
              </div> -->
              <div class="titre-du-service">
                <p>Cardio Stat 14 jours</p>
              </div>
              <!-- <div class="cost">
                <p>572<span class="small-cost">$</span></p>
              </div> -->
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section>
          <!--<section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Prélèvements sanguins</p>
              </div>
              <div class="cost">
                <p>Selon analyses demandées</p>
              </div>
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section> -->
          <!-- <section>
            <div class="grid-quatre">
              <div class="titre-du-service">
                <p>Dépistage des ITSS sans symptôme</p>
              </div>
              <div class="cost">
                <p>135<span class="small-cost">$</span></p>
              </div>
              <div class="temps">
                <p>15min.</p>
              </div>

            </div>
          </section> -->
        </div>
      </div>


    </div>

    <section class="added-fee grind">
      <div>
        <img src="~assets/icons/idee.svg" alt="">
      </div>
      <div>
        <p class="note-saaq">Nous ne voyons AUCUN cas de CNESST ni de SAAQ / accidenté de la route </p>
      </div>
    </section>


    <div class="directive">
      <h2>Directives avant certains rendez-vous</h2>
      <div class="grid-direct">
        <div>
          <img class="bas" src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-28.svg">
          <p class="direct-titre">
            Changement de pansement
          </p>
          <div class="direct-center" @click="openModalPansement">
            <p class="green-txt"><span><img class="question-small" src="~assets/icons/plus.svg"></span> Explorer</p>
          </div>
        </div>

        <div>
          <img class="bas" src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-50.svg">
          <p class="direct-titre">
            Injection de médicaments
          </p>
          <div class="direct-center" @click="openModalInjection">
            <p class="green-txt"><span><img class="question-small" src="~assets/icons/plus.svg"></span> Explorer</p>
          </div>
        </div>

        <div>
          <img class="bas" src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-66.svg">
          <p class="direct-titre">
            Cryothérapie
          </p>
          <div class="direct-center" @click="openModalCryo">
            <p class="green-txt"><span><img class="question-small" src="~assets/icons/plus.svg"></span> Explorer</p>
          </div>
        </div>

        <div>
          <img class="bas" src="~assets/icons/med/iStar_Design_Medicine_LineIcons_Live-21.svg">
          <p class="direct-titre">
            Lavage d’oreilles
          </p>
          <div class="direct-center" @click="openModalOreille">
            <p class="green-txt"><span><img class="question-small" src="~assets/icons/plus.svg"></span> Explorer</p>
          </div>
        </div>
      </div>
    </div>


    <div id="ze-modal">
      <div class="modal-overlay modal-overlay-oreille" id="modal-overlay" @click="closeModalOreille"></div>

      <div class="modal modal-oreille" id="modal">
        <button class="close-button ferme" id="close-button" @click="closeModalOreille">Fermer</button>
        <button class="close-button-mob ferme-mob" id="ferme-button" @click="closeModalOreille">X</button>
        <div class="modal-guts">
          <p class="grey-txt"><span><img class="quest-in" src="~assets/icons/plus.svg"></span> Quoi faire avant votre
            rendez-vous</p>
          <p class="titre-m">Lavage d’oreilles</p>
          <p>Le lavage ou nettoyage d'oreille consiste à enlever le bouchon
            de cérumen qui s'est logé dans le conduit auditif en injectant de l'eau via un équipement
            médical spécifique. Cette technique est sans douleur et fait par une infirmière. </p>
          <p class="titre-m-sub">
            Procédure :</p>
          <p>
            Avant votre rendez-vous, vous devez instiller 3 à 4 gouttes d’huile minérale matin et soir
            dans le conduit auditif nécessitant un lavage. Gardez la tête penchée 5 minutes. Cette
            préparation doit être effectuée durant 3 à 4 jours avant le lavage.</p>
          <p> Cette préparation est
            essentielle. Si celle-ci n’est pas effectuée selon les recommandations, le lavage peut
            s’avérer être inefficace. </p>
        </div>
      </div>

      <!-- <button id="open-button" class="open-button">Open Button</button> -->
    </div>

    <div id="ze-modal-cryo">
      <div class="modal-overlay modal-overlay-cryo" id="modal-overlay" @click="closeModalCryo"></div>

      <div class="modal modal-cryo" id="modal-cryo">
        <button class="close-button ferme" id="close-button" @click="closeModalCryo">Fermer</button>
        <button class="close-button-mob ferme-mob" id="ferme-button" @click="closeModalCryo">X</button>
        <div class="modal-guts">
          <p class="grey-txt"><span><img class="quest-in" src="~assets/icons/plus.svg"></span> Quoi faire avant votre
            rendez-vous</p>
          <p class="titre-m">Cryothérapie</p>
          <p>Ayez en main votre prescription médicale.</p>
        </div>
      </div>
      <!-- <button id="open-button" class="open-button">Open Button</button> -->
    </div>

    <div id="ze-modal-cryo-collective">
      <div class="modal-overlay modal-overlay-cryo-collective" id="modal-overlay" @click="closeModalCryoCollective">
      </div>

      <div class="modal modal-cryo-collective" id="modal-cryo-collective">
        <button class="close-button ferme" id="close-button" @click="closeModalCryoCollective">Fermer</button>
        <button class="close-button-mob ferme-mob" id="ferme-button" @click="closeModalCryoCollective">X</button>
        <div class="modal-guts">
          <p class="grey-txt"><span><img class="quest-in" src="~assets/icons/plus.svg"></span> Quoi faire avant votre
            rendez-vous</p>
          <p class="titre-m">Cryothérapie</p>
          <p>Ayez en main votre prescription médicale.</p>
        </div>
      </div>
    </div>

    <div id="ze-modal-pansement">
      <div class="modal-overlay modal-overlay-pansement" id="modal-overlay" @click="closeModalPansement">
      </div>

      <div class="modal modal-pansement" id="modal-pansement">
        <button class="close-button ferme" id="close-button" @click="closeModalPansement">Fermer</button>
        <button class="close-button-mob ferme-mob" id="ferme-button" @click="closeModalPansement">X</button>
        <div class="modal-guts">
          <p class="grey-txt"><span><img class="quest-in" src="~assets/icons/plus.svg"></span> Quoi faire avant votre
            rendez-vous</p>
          <p class="titre-m">Changement de pansement</p>
          <p>Si vous avez un suivi de plaie avec pansement, veuillez avoir votre plan de traitement en main lors de
            votre rendez-vous.</p>
        </div>
      </div>
    </div>

    <div id="ze-modal-injection">
      <div class="modal-overlay modal-overlay-injection" id="modal-overlay" @click="closeModalInjection">
      </div>

      <div class="modal modal-injection" id="modal-injection">
        <button class="close-button ferme" id="close-button" @click="closeModalInjection">Fermer</button>
        <button class="close-button-mob ferme-mob" id="ferme-button" @click="closeModalInjection">X</button>
        <div class="modal-guts">
          <p class="grey-txt"><span><img class="quest-in" src="~assets/icons/plus.svg"></span> Quoi faire avant votre
            rendez-vous</p>
          <p class="titre-m">Injection de médicaments</p>
          <p>Vous devez avoir votre médicament en votre possession lors de votre rendez-vous.</p>
          <p style="font-style:italic;">Une ordonnance médicale est requise pour ce service.</p>
          <p>Il est possible de faire différents types d'injections selon le médicament prescrit, soit les injections
            intramusculaires (IM), ou sous-cutanées (SC). Ex: Prolia, Dépo Provera, vitamine B12, Testostérone, Lupron
            Dépot et autres.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // layout: "tous-les-services",

  methods: {
    openMenuUn() {
      if (
        document.querySelector('.shadow-one').style
          .visibility !== 'visible'
      ) {
        document.querySelector('.shadow-one').style.visibility =
          'visible'
        document.querySelector('.shadow-one').classList.add('shadow-menu-un')
        document.querySelector('#arrow-menu-one').style.transform =
          'rotateX(180deg)'
      } else {
        document.querySelector('.shadow-one').style.visibility =
          'hidden'
        document.querySelector('.shadow-one').classList.remove('shadow-menu-un')
        document.querySelector('#arrow-menu-one').style.transform =
          'rotateX(0deg)'
      }

    },
    openMenuDeux() {
      if (
        document.querySelector('.shadow-two').style
          .visibility !== 'visible'
      ) {
        document.querySelector('.shadow-two').style.visibility =
          'visible'
        document.querySelector('.shadow-two').classList.add('shadow-menu-deux')
        document.querySelector('#arrow-menu-two').style.transform =
          'rotateX(180deg)'
      } else {
        document.querySelector('.shadow-two').style.visibility =
          'hidden'
        document.querySelector('.shadow-two').classList.remove('shadow-menu-deux')
        document.querySelector('#arrow-menu-two').style.transform =
          'rotateX(0deg)'
      }

    },
    openMenuTrois() {
      if (
        document.querySelector('.shadow-three').style
          .visibility !== 'visible'
      ) {
        document.querySelector('.shadow-three').style.visibility =
          'visible'
        document.querySelector('.shadow-three').classList.add('shadow-menu-trois')
        document.querySelector('#arrow-menu-three').style.transform =
          'rotateX(180deg)'
      } else {
        document.querySelector('.shadow-three').style.visibility =
          'hidden'
        document.querySelector('.shadow-three').classList.remove('shadow-menu-trois')
        document.querySelector('#arrow-menu-three').style.transform =
          'rotateX(0deg)'
      }

    },

    openMenuQuatre() {
      if (
        document.querySelector('.shadow-four').style
          .visibility !== 'visible'
      ) {
        document.querySelector('.shadow-four').style.visibility =
          'visible'
        document.querySelector('.shadow-four').classList.add('shadow-menu-quatre')
        document.querySelector('#arrow-menu-four').style.transform =
          'rotateX(180deg)'
      } else {
        document.querySelector('.shadow-four').style.visibility =
          'hidden'
        document.querySelector('.shadow-four').classList.remove('shadow-menu-quatre')
        document.querySelector('#arrow-menu-four').style.transform =
          'rotateX(0deg)'
      }

    },

    openMenuCinq() {
      if (
        document.querySelector('.shadow-five').style
          .visibility !== 'visible'
      ) {
        document.querySelector('.shadow-five').style.visibility =
          'visible'
        document.querySelector('.shadow-five').classList.add('shadow-menu-cinq')
        document.querySelector('#arrow-menu-cinq').style.transform =
          'rotateX(180deg)'
      } else {
        document.querySelector('.shadow-five').style.visibility =
          'hidden'
        document.querySelector('.shadow-five').classList.remove('shadow-menu-cinq')
        document.querySelector('#arrow-menu-cinq').style.transform =
          'rotateX(0deg)'
      }
    },

    openMenuSix() {
      if (
        document.querySelector('.shadow-six').style
          .visibility !== 'visible'
      ) {
        document.querySelector('.shadow-six').style.visibility =
          'visible'
        document.querySelector('.shadow-six').classList.add('shadow-menu-six')
        document.querySelector('#arrow-menu-six').style.transform =
          'rotateX(180deg)'
      } else {
        document.querySelector('.shadow-six').style.visibility =
          'hidden'
        document.querySelector('.shadow-six').classList.remove('shadow-menu-six')
        document.querySelector('#arrow-menu-six').style.transform =
          'rotateX(0deg)'
      }

    },


    openMenuSept() {
      if (
        document.querySelector('.shadow-sept').style
          .visibility !== 'visible'
      ) {
        document.querySelector('.shadow-sept').style.visibility =
          'visible'
        document.querySelector('.shadow-sept').classList.add('shadow-menu-sept')
        document.querySelector('#arrow-menu-sept').style.transform =
          'rotateX(180deg)'
      } else {
        document.querySelector('.shadow-sept').style.visibility =
          'hidden'
        document.querySelector('.shadow-sept').classList.remove('shadow-menu-sept')
        document.querySelector('#arrow-menu-sept').style.transform =
          'rotateX(0deg)'
      }

    },

    openModalOreille() {
      document.querySelector('.modal-oreille').style.display = 'block'
      document.querySelector('.modal-overlay-oreille').style.display = 'block'
    },

    closeModalOreille() {
      document.querySelector('.modal-oreille').style.display = 'none'
      document.querySelector('.modal-overlay-oreille').style.display = 'none'
    },

    openModalCryo() {
      document.querySelector('.modal-cryo').style.display = 'block'
      document.querySelector('.modal-overlay-cryo').style.display = 'block'
    },

    closeModalCryo() {
      document.querySelector('.modal-cryo').style.display = 'none'
      document.querySelector('.modal-overlay-cryo').style.display = 'none'
    },

    openModalCryoCollective() {
      document.querySelector('.modal-cryo-collective').style.display = 'block'
      document.querySelector('.modal-overlay-cryo-collective').style.display = 'block'
    },

    closeModalCryoCollective() {
      document.querySelector('.modal-cryo-collective').style.display = 'none'
      document.querySelector('.modal-overlay-cryo-collective').style.display = 'none'
    },

    openModalPansement() {
      document.querySelector('.modal-pansement').style.display = 'block'
      document.querySelector('.modal-overlay-pansement').style.display = 'block'
    },

    closeModalPansement() {
      document.querySelector('.modal-pansement').style.display = 'none'
      document.querySelector('.modal-overlay-pansement').style.display = 'none'
    },

    openModalInjection() {
      document.querySelector('.modal-injection').style.display = 'block'
      document.querySelector('.modal-overlay-injection').style.display = 'block'
    },

    closeModalInjection() {
      document.querySelector('.modal-injection').style.display = 'none'
      document.querySelector('.modal-overlay-injection').style.display = 'none'
    },
  }
}
</script>
<style scoped>
svg {
  margin: 0;
  padding: 0;
  position: relative;
  width: 30px;
  top: 3px;
  fill: var(--main-dark-2);
}

a {
  text-decoration: none;
  color: var(--main-dark-2);
  font-weight: 500;
  border-bottom: 2px solid var(--main-dark-2);
  padding-bottom: 1px;
  cursor: pointer;
  font-size: 1rem;
  padding-top: 6px;
  /* background-color: var(--main-dark-2); */
  /* color: #fff; */
  /* padding: 6px 18px 8px; */
}

p {
  padding: 0;
  margin: 0;
  line-height: 1.3;
  font-size: 1.15rem;
}

img {
  max-width: 110px;
  max-height: 90px;
  cursor: pointer;
  display: block;
  transition: 300ms ease-in-out;
}

button {
  background-color: #fff;
  border: none;
  right: 28px;
  position: relative;
}

.bumpes {
  margin-bottom: 50px !important;
}

.grind {
  margin: 0 auto;
  max-width: 960px;
  width: 93%;
  padding: 30px;
  /* margin-bottom:100px; */
}

.grind-top {
  margin: 0 auto;
  max-width: 960px;
  width: 93%;
  padding: 0px 30px 50px;
}

.note-saaq {
  font-size: 1.4rem;
  color: #333;
}


.section-titre h1 {
  font-size: 6rem;
  text-align: center;
  padding: 100px 0 0;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin-bottom: 100px;
}

#arrow-menu-one,
#arrow-menu-two,
#arrow-menu-three,
#shadow-menu-four,
#shadow-menu-five,
#shadow-menu-six,
#shadow-menu-sept {
  transition: 300ms;
  fill: var(--main-dark-2);
  position: relative;
  cursor: pointer;
}

.grey-txt {
  text-transform: uppercase;
  font-size: 0.8rem !important;
  color: grey;
}

.quest {
  width: 20px;
  display: inline-block;
  top: 4px;
  left: 2px;
  position: relative;
}

.frais-en-sus p {
  font-style: italic;
  padding: 20px 0 0;
  font-weight: 500;
}


.quest-in {
  width: 16px;
  display: inline-block;
  top: 4px;
  left: 2px;
  position: relative;
}

.small-cost {
  font-size: 1rem;
}

.grid-arrow {
  display: grid;
  grid-template-columns: auto 50px;
  gap: 0;
  cursor: pointer;
}

.green {
  background-color: var(--main-bg);
}

.rubber {
  padding: 50px 0 30px;
}

.wid {
  margin: 0 auto;
  padding: 1rem 25px;
  max-width: 950px;
}

/* 
.wid>div {
  width: 90%;
  max-width: 1480px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 6rem;
  row-gap: 1rem;
} */
/* 
.wid>div:last-child {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
} */

.ordone {
  margin-bottom: 20px !important;
}

.shadow-one,
.shadow-two,
.shadow-three,
.shadow-four,
.shadow-five,
.shadow-six,
.shadow-sept {
  height: 0;
  overflow: hidden;
  transition: 200ms ease-in;
}

.shadow-menu-un {
  height: auto;
  padding: 10px 0;
}

.shadow-menu-deux {
  height: auto;
  padding: 10px 0;
}

.shadow-menu-trois {
  height: auto;
  padding: 10px 0;
}

.shadow-menu-quatre {
  height: auto;
  padding: 10px 0;
}

.shadow-menu-cinq {
  height: auto;
  padding: 10px 0;
}

.shadow-menu-six {
  height: auto;
  padding: 10px 0;
}

.shadow-menu-sept {
  height: auto;
  padding: 10px 0;
}



.grid-quatre {
  display: grid;
  grid-template-columns: 1fr 250px;
  gap: 2rem;
  padding: 0px 20px 3px;
  transition: 200ms;
  border-bottom: 2px dotted var(--main-dark-2);
  box-sizing: border-box;
  /* margin-top: 40px; */
}

.mush {
  cursor: pointer;
}

/* 
.grid-quatre:active,
.grid-quatre:focus,
.grid-quatre:hover {
  background-color: var(--main-dark-2);
  color: #fff !important;
} */

.grid-quatre:active a,
.grid-quatre:focus a,
.grid-quatre:hover a {
  color: #fff;
  border-color: #fff;
}


.grid-quatre:active img,
.grid-quatre:focus img,
.grid-quatre:hover img {
  filter: brightness(10%);
}


.grid-quatre a {
  text-align: center;
}

/* 
.grid-quatre>div:first-child {
  display: flex;
  justify-content: center;
} */

.titre-du-service>p {
  font-weight: 400;
  padding: 5px 0 3px;
}

.cost {
  padding-top: 5px;
  text-align: right;
}

.temps {
  display: none;
}

.note {
  display: none
}

.note p {
  font-size: 0.9rem;
  padding-top: 3px;
}



.explorez {
  position: relative;
  /* display: flex; */
  /* justify-content: center; */
  /* padding-top: 0.3rem; */
  display: none;
}

.sec-titre {
  font-weight: 500;
  font-size: 1.4rem;
  padding-bottom: 1.2rem;
  padding-top: 7px;
  display: block;
}

.sec-desc {
  max-width: 800px;
  line-height: 1.5;
  padding-bottom: 10px;
}

/* 
.grid-quatre {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 10px;
}

.grid-quatre div {
  height:50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  
  background-color: rgb(251, 251, 251);
}



.grid-quatre div:nth-child(2) {
  padding: 5px 20px 8px;
  background-color: rgb(251, 251, 251);
  display: flex;
  justify-content: center;
  width: 110px
}

.grid-quatre div:nth-child(3) {
  padding: 5px 20px 8px;
  background-color: rgb(251, 251, 251);
  display: flex;
  justify-content: center;
  width: 110px
} */
/* 
.grid-quatre div:last-child {
  padding: 5px 20px 8px;
  background-color: var(--main-dark-2);
  display: flex;
  justify-content: center;
  width: 130px;
} */




.tous-titre {
  font-size: 2rem;
  color: #333;
  font-family: var(--sophia);
}

.end-block {
  padding-bottom: 50px;
}

.directive {
  padding-top: 150px;
  padding-bottom: 100px;
}

.directive h2 {
  text-transform: uppercase;
  font-size: 2.55rem;
  font-weight: 300;
  text-align: center;
  padding-bottom: 50px;
}

.grid-direct {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4rem;
  width: 90%;
  max-width: 1480px;
  margin: 0 auto;
}

.grid-direct img.bas {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.direct-titre {
  text-align: center;
  font-weight: 400;
}

.direct-center {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  color: var(--main-dark-2);
  cursor: pointer;
}

.direct-center p {
  border-bottom: 2px solid var(--main-dark-2);
}

.question-small {
  width: 16px;
  display: inline-block;
  top: 4px;
  left: 2px;
  position: relative;
  left: 0 !important;
  transform: translateX(0%);
}

@media only screen and (max-width:1180px) {

  .section-titre h1 {
    font-size: 3rem;
    text-align: center;
    padding: 100px 0 0;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
}

@media only screen and (max-width:900px) {

  .grid-direct {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem 1rem;
    width: 90%;
    max-width: 1480px;
    margin: 0 auto;
  }

  .grid-direct img.bas {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .direct-titre {
    text-align: center;
    font-weight: 400;
  }

  .direct-center {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    color: var(--main-dark-2);
    cursor: pointer;
  }

  .direct-center p {
    border-bottom: 2px solid var(--main-dark-2);
  }

  .question-small {
    width: 16px;
    display: inline-block;
    top: 4px;
    left: 2px;
    position: relative;
    left: 0 !important;
    transform: translateX(0%);
  }
}

@media only screen and (max-width:717px) {
  svg {
    margin: 0;
    padding: 0;
    position: relative;
    width: 1rem;
    top: 0px;
    fill: var(--main-dark-2);
  }

  p,
  a {
    font-size: 0.9rem;
    font-weight: 300;
  }

  img {
    max-width: 50px;
    max-height: 40px;

    display: block;
    transition: 300ms ease-in-out;

  }

  button {
    background-color: #fff;
    border: none;
    right: 0px;
    position: relative;
    width: 30px;
    padding: 0 0px;
  }

  blockquote {
    font-size: 0.8rem;
    color: rgb(39, 39, 39) !important;
  }


  .bumpes {
    margin-bottom: 0px !important;
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

  .block-grid blockquote {
    margin-left: 0px !important;
    padding-left: 10px !important;
    font-size: 0.8rem;
  }

  .block-grid {
    display: block !important;
  }


  .small-cost {
    font-size: 0.7rem;
  }


  .shadow-menu-un {
    height: auto;
    padding: 0px 0 10px;
  }

  .shadow-menu-deux {
    height: auto;
    padding: 0px 0 10px;
  }

  .shadow-menu-trois {
    height: auto;
    padding: 0px 0 10px;
  }

  .shadow-menu-quatre {
    height: auto;
    padding: 0px 0 10px;
  }

  .shadow-menu-cinq {
    height: auto;
    padding: 0px 0 10px;
  }

  .shadow-menu-six {
    height: auto;
    padding: 10px 0;
  }

  .shadow-menu-sept {
    height: auto;
    padding: 10px 0;
  }


  .grid-arrow {
    display: grid;
    grid-template-columns: auto 26px;
    gap: 0;
    cursor: pointer;
  }


  .tous-titre {
    font-size: 1rem;
    /* color: var(--main-dark-2) */
  }

  .titre-du-service {
    font-weight: 300;
  }

  .wid {
    margin: 0px 0;
    padding: 5px 0;
    width: 90%;
    margin: 0 auto;
  }


  .grid-quatre {
    display: grid;
    grid-template-columns: 1fr 0px;
    gap: 0rem;
    padding: 0px 5px 3px;
    transition: 200ms;
    border-bottom: 2px dotted var(--main-dark-2);
    box-sizing: border-box;
    /* margin-top: 40px; */
  }

  .cost {
    padding: 5px 0 3px;
  }

  .note p {
    font-size: 0.8rem !important;
    font-style: italic;
    padding: 6px 0;
  }

  .sec-titre {
    font-size: 1.1rem;
    padding-bottom: 10px;
  }

  .rubber {
    padding: 0 0 0;
  }

  .end-block {
    padding: 20px 0 50px;
  }

  .grind {
    padding-left: 15px;
    padding-right: 15px;
  }


  .grind-top {
    padding-left: 15px;
    padding-right: 15px;
  }

  .note-saaq {
    font-size: 0.9rem;
    color: #333;
  }

  .directive {
    padding-top: 50px;
  }


  .directive h2 {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
    padding: 0 5% 26px;
  }


}
</style>







<style scoped>
/* MMMMOOOOODDDDAAAAALLLLLLLLLL*/

.modal {
  width: 700px;
  max-width: 95%;
  height: 550px;
  max-height: 95%;
  position: fixed;
  z-index: 10000000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 0.15em 0.25em rgb(0 0 0 / 25%);
  border: 10px solid var(--main-pale-2);
}

.modal-oreille,
.modal-cryo,
.modal-cryo-collective,
.modal-pansement,
.modal-injection {
  display: block;
  display: none;
}

.modal-cryo,
.modal-cryo-collective,
.modal-pansement {
  height: 230px;
}

.modal-injection {
  max-height: 420px;
}

.closed {
  display: none;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(255, 255, 255, 0.6);
  /* display: none; */
  cursor: pointer;
}

.modal-overlay-oreille,
.modal-overlay-cryo,
.modal-overlay-cryo-collective,
.modal-overlay-pansement,
.modal-overlay-injection {
  display: none;
}

.modal-guts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 26px 50px 20px 30px;
}



* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.modal .close-button {
  position: absolute;

  /* don't need to go crazy with z-index here, just sits over .modal-guts */
  z-index: 1;

  top: 20px;

  /* needs to look OK with or without scrollbar */
  right: 20px;
  cursor: pointer;
  border: 0;
  background: var(--main-dark-2);
  color: white;
  padding: 5px 10px;
  font-size: 1rem;
}

.modal .close-button-mob {
  position: absolute;

  /* don't need to go crazy with z-index here, just sits over .modal-guts */
  z-index: 1;

  top: -10px;

  /* needs to look OK with or without scrollbar */
  right: -10px;
  cursor: pointer;
  border: 0;
  background: var(--main-dark-2);
  color: white;
  padding: 5px 10px;
  font-size: 1rem;
}

.modal p {
  margin-bottom: 26px;
  font-size: 1.2rem;
}

.titre-m {
  font-size: 1.6rem !important;
  font-weight: 500;
  margin-bottom: 1rem !important;


}

.titre-m-sub {
  margin-bottom: 5px !important;
  font-weight: 400;
}

.ferme-mob {
  display: none;
}

@media only screen and (max-width:717px) {

  .modal {
    display: block;
    display: none;
    width: 100%;
    max-width: 90%;
    /* height: 100%; */
    max-height: 90%;
    position: fixed;
    z-index: 10000000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0.15em 0.25em rgb(0 0 0 / 25%);
    border: 10px solid var(--main-dark-2);
  }

  .ferme {
    display: none;
  }

  .ferme-mob {
    display: block;
    font-weight: 700;
  }

  .titre-m {
    font-size: 1.1rem !important;
    font-weight: 500;

  }

  .modal p {
    margin-bottom: 16px;
    font-size: 0.9rem;
  }

  .modal-guts {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 26px 30px 20px 16px;
  }
}
</style>