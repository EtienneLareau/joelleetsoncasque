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
                <h1>Votre Portail patient</h1>
            </div>
            <div class="paragraph">
                <p>Votre portail patient est une plateforme qui a pour but de vous offrir un accès privilégié à votre
                    dossier médical sécurisé de la Clinique IPS de Quartier. Vous y trouverez vos informations personnelles,
                    les honoraires à payer,
                    des formulaires et vos résultats.</p>
                <p>
                    Voici ci-dessous les indications afin de vous donner accès à votre compte et à mieux comprendre son
                    fonctionnement.</p>
            </div>
            <div class="paragraph">
                <p class="le-titre">Accéder à votre compte</p>

                <p>Pour votre première connexion, vous aurez besoin d'un nom d’utilisateur ainsi que d’un mot de passe
                    temporaire. Ces derniers vous serons envoyé
                    par la Clinique IPS de Quartier après l’ouverture de votre dossier. Si vous n’avez pas reçu de courriel
                    incluant ces informations, vérifiez dans vos
                    courriers indésirables, il pourrait s’être glissé à cet endroit.
                </p>
                <!-- <blockquote>
                    Vous recevrez un courriel contenant votre nom d’utilisateur ainsi qu’un mot de passe temporaire.</blockquote> -->

                <p class="etape">Les étapes :</p>
                <div class="retro">
                    <ul>
                        <li class="num1">Cliquez sur le lien internet afin de vous rendre sur le <span
                                style="font-style:italic;">portail
                                patient</span></li>
                        <li class="num2">Dans la case « Nom d’utilisateur », saisissez votre <span
                                style="font-weight:500;">adresse
                                courriel</span>.</li>
                        <li @click="openPassword" class="num3"> Dans la case « Mot de passe », entrez le <span
                                style="font-weight:500;">mot de
                                passe temporaire reçu par
                                courriel</span>. <span><img class="question-small" src="~assets/icons/plus.svg"></span></li>

                        <li @click="openModalOreille" class="num4">Appuyer sur le bouton CONNEXION <span><img
                                    class="question-small" src="~assets/icons/plus.svg"></span>
                        </li>
                    </ul>
                </div>

                <p>
                    🎉 Félicitations! Vous avez maintenant accès au portail patient.</p>
            </div>
            <div class="paragraph">
                <p class="le-titre">Pour modifier votre mot de passe</p>
                <p>Si vous désirez modifier votre mot de passe et que vous êtes connecté à votre portail patient, vous devez
                    sélectionner l’onglet <span font-weight:500;>informations personnelles</span>. Vous pourrez ensuite
                    effectuer la modification.
                </p>
                <p>
                    Veuillez prendre note que si vous avez oublié votre mot de passe, vous pouvez nous contacter
                    par courriel au : <a href="email:CLINIQUE@IPSDEQUARTIER.COM">clinique@ipsdequartier.com</a> ou encore
                    par téléphone au 819 253-0168. Nous pourrons vous
                    envoyer un mot de passe temporaire afin d’avoir accès à votre plateforme patient.
                </p>
            </div>
            <div class="paragraph">
                <!-- <p class="le-titre">Les IPS peuvent intervenir auprès de diverses personnes.</p> -->
                <p class="le-titre">Pour ouvrir un nouveau formulaire</p>
                <p>
                    Pour ouvrir un formulaire, appuyez sur l’onglet de gauche appelé <span
                        style="font-weight:500;">Formulaire</span>. Vous y trouverez les
                    formulaires ajoutés à votre portail. Vous pouvez les ouvrir en appuyant sur l’icône situé totalement à
                    droite du nom du professionnel.
                </p>
            </div>
            <div class="paragraph">
                <!-- <p class="le-titre">Les IPS peuvent intervenir auprès de diverses personnes.</p> -->
                <p class="le-titre">Pour accéder à vos résultats</p>
                <p>
                    Pour avoir accès à vos résultats, vous devez aller dans votre boite de réception en haut à droite de la
                    page.
                </p>
                <p>
                    Si vous remarquez qu’une information est inexacte, vous pouvez faire la modification
                    à partir de votre portail patient ou vous pouvez nous joindre afin de nous en informer.
                </p>
            </div>
        </article>









        <div id="connexion">
            <div class="modal-overlay modal-overlay-oreille" id="modal-overlay" @click="closeModalOreille"></div>

            <div class="modal modal-oreille" id="modal">
                <button class="close-button ferme" id="close-button" @click="closeModalOreille">Fermer</button>
                <button class="close-button ferme-mob" id="ferme-button" @click="closeModalOreille">X</button>
                <div class="modal-guts">
                    <!-- <p class="grey-txt"><span><img class="quest-in" src="~assets/icons/plus.svg"></span> Appuyer sur le
                        bouton CONNEXION</p> -->
                    <p>En appuyant sur le bouton connexion, vous pourrez faire la modification de
                        votre mot de passe.
                    </p>
                </div>
            </div>

            <!-- <button id="open-button" class="open-button">Open Button</button> -->
        </div>

        <div id="password">
            <div class="modal-overlay modal-overlay-password" id="modal-overlay" @click="closePassword"></div>

            <div class="modal modal-password modal-height-password" id="modal">
                <button class="close-button ferme" id="close-button" @click="closePassword">Fermer</button>
                <button class="close-button ferme-mob" id="ferme-button" @click="closePassword">X</button>
                <div class="modal-guts">
                    <!-- <p class="grey-txt"><span><img class="quest-in" src="~assets/icons/plus.svg"> </span> Dans la case « Mot
                        de passe », entrez le <span style="font-weight:500;">mot de
                            passe temporaire reçu par
                            courriel</span>.</p> -->
                    <p>
                        ***Attention***<br>Vous devez entrer chacune des lettres et des chiffres à la main puisque le
                        copier-coller ne
                        fonctionne pas pour le mot de passe. Veuillez prendre note que si vous ne vous souvenez pas de votre
                        mot
                        de passe, vous pouvez nous contacter par courriel au : <a href="email:clinique@ipsdequartier">clinique@ipsdequartier.com</a> ou encore par téléphone au
                        819 253-0168. Nous pourrons vous envoyer un nouveau mot de passe temporaire afin de vous connecter
                        au
                        Portail Patient.
                    </p>
                </div>
            </div>

            <!-- <button id="open-button" class="open-button">Open Button</button> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {

        openModalOreille() {
            document.querySelector('.modal-oreille').style.display = 'block'
            document.querySelector('.modal-overlay-oreille').style.display = 'block'
        },

        closeModalOreille() {
            document.querySelector('.modal-oreille').style.display = 'none'
            document.querySelector('.modal-overlay-oreille').style.display = 'none'
        },


        openPassword() {
            document.querySelector('.modal-password').style.display = 'block'
            document.querySelector('.modal-overlay-password').style.display = 'block'
        },

        closePassword() {
            document.querySelector('.modal-password').style.display = 'none'
            document.querySelector('.modal-overlay-password').style.display = 'none'
        },
    }
}

</script>
  
<style scoped>
ul {
    /* list-style-type: disc; */
    color: #fff;
    padding-left: 40px;
}

li {
    color: #333;
    font-weight: 400;
    display: list-item;
    /* list-style-type: none; */
    /* padding-left:10px; */
}
a {
    font-size: 1.4rem;
    font-weight:500;
    color:var(--main);
}

@counter-style numerals {
    system: fixed;
    symbols: "\2780" "\2781" "\2782" "\2783";
    suffix: " ";
}

ul {
    list-style: numerals;
}

::marker {
    font-size: 1.7rem;
    position: relative;
    ;
    /* margin-top:10px; */
    color: var(--main);
}

.retro {
    margin-bottom: 30px;
}


.question-small {
    width: 22px;
    display: inline-block;
    top: 4px;
    left: 2px;
    position: relative;
    left: 0 !important;
    transform: translateX(0%);
}

.etape {
    margin-bottom:10px;
}


.quest-in {
    width: 22px;
    display: inline-block;
    top: 4px;
    left: 2px;
    position: relative;
}

/* 
li::before {
    content: "\278A";
    font-size: 1.4rem;
    color: var(--main);
    padding-right: 10px;
} */

h3 {
    color: var(--main);
    font-family: var(--mont);
    font-size: 1.6rem;
}

span,
blockquote {
    font-size: 1.4rem;
    /* padding: 0 0 28px; */
    max-width: 800px;
}

p {
    padding-bottom: 0;
}

blockquote {
    margin-left: 5px !important;
    margin-top: 0;
    margin-bottom: 50px !important;
    font-weight: 500;
    padding-right: 10px;
    /* padding-bottom:126px !important; */
}

.paragraph {
    margin-bottom: 90px;
}

p.le-titre {
    margin: 0;
    padding-bottom: 0.7rem;
    font-weight: 500;
}

/* 
li.num1::before {
    content: "\2780";
    font-size: 1.9rem;
    position: relative;
    top: 3px;
    color: var(--main);
}

li.num2::before {
    content: "\2781";
    font-size: 1.9rem;
    position: relative;
    top: 3px;
    color: var(--main);
}


li.num3::before {
    content: "\2782";
    font-size: 1.9rem;
    position: relative;
    top: 3px;
    color: var(--main);
} */
/* 

li.num4::before {
    content: "\2783";
    font-size: 1.9rem;
    position: relative;
    top: 3px;
    color: var(--main);
} */







.chalk {
    margin-bottom: 50px;
}

.chalk li::first-letter {
    text-transform: capitalize;
}

.chalk li {
    list-style-type: disc;
    color: #333;
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

    background: url('~assets/images/photos/IMG_2502-Edit.jpg') no-repeat bottom right;
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

    .paragraph {
        margin-bottom:50px;
    }

    .etape {
        padding-bottom:5px !important;
        font-weight:500;
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
    li,
    span {
        font-size: 1rem;
    }


    h1 {
        font-size: 1.2rem;
        font-weight: 500;
        padding-bottom: 15px;
        font-weight: 500 !important;
        font-family: var(--sophia);
    }

    .page-wrap p.le-titre {
        margin: 0;
        padding-bottom: 10px;
        text-transform: uppercase;
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



<style scoped>
/* MMMMOOOOODDDDAAAAALLLLLLLLLL*/

.modal {
    width: 700px;
    max-width: 95%;
    height: 210px;
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

.modal-height-password {
    height: 490px;
}

.modal-oreille,
.modal-password {
    display: block;
    display: none;
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
.modal-overlay-password {
    display: none;
}

.modal-guts {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 60px 120px 20px 30px;
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
    padding: 5px 10px 6px;
    font-size: 1rem;
    font-weight: 600;
}

.modal p {
    margin-bottom: 26px;
    font-size: 1.4rem;
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
        height: 150px;
        max-height: 90%;
        position: fixed;
        z-index: 10000000;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: white;
        box-shadow: 0 0.15em 0.25em rgb(0 0 0 / 25%);
        border: 10px solid var(--main-pale-2);
    }



.modal-height-password {
    height: 380px;
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
        padding: 26px 60px 20px 16px;
    }
}
</style>