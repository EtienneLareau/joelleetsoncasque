<template>
  <div class="bg">
    <div class="container">
      <h1>Demande de prise en charge</h1>

      <div class="form-contact">
        <h3>Formulaire</h3>

        <form name="Demande de prise en charge" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/pharmacie/demande-de-prise-en-charge/"
          enctype="multipart/form-data">
          <input type="hidden" name="form-name" value="Demande de prise en charge">
          
          <div>
            <label for="nom-pec">Numéro de dossier</label>
            <input id="nom-pec" class="fifty" type="text" name="Numéro de dossier" required>
          </div>
          <div class="grid-form">
            <div>
              <label for="nom">Nom</label>
              <input id="pharma-nom" type="text" name="Nom">
            </div>
            <div>
              <div>
                <label for="prenom">Prénom</label>
                <input id="pharma-prenom" type="text" name="Prénom">
              </div>
            </div>
          </div>

          <div class="grid-pec-trois">
            <div>
              <label for="ddn">DDN</label>
              <input id="ddn" type="text" name="DDN">
            </div>
            <div>
              <label for="nam">NAM</label>
              <input id="nam" type="text" name="NAM">
            </div>
            <div>
              <label for="exp">Exp.</label>
              <input id="exp" type="text" name="exp">
            </div>
          </div>

          <div>
            <label for="prenom">Classification</label>
            <textarea class="fifty" name="Classification" id="" cols="30" rows="4"></textarea>
          </div>
          <!-- <div>
            <label for="votre-message">Note à ajouter au dossier</label>
            <textarea name="Message" id="pharma-votre-message" cols="30" rows="10"></textarea>
          </div> -->
          <div class="demande-de-prise-en-charge groupe">
            <div>
              <p class="titre-centre" style="font-weight:500;">Demande de prise en charge d'une maladie chronique par le
                pharmacien communautaire
              </p>
            </div>
            <div>
              <label for="pharmacie-nom">PHARMACIE COMMUNAUTAIRE</label>
              <input id="pharmacie-nom" type="text" name="Nom de la pharmacie communautaire">
            </div>
            <div class="grid-form">
              <div>
                <label for="telephone-pec">Téléphone</label>
                <input id="telephone-pec" type="text" name="Tél de la pharmacie communautaire">
              </div>
              <div>
                <label for="fax-pec">Télécopieur</label>
                <input id="fax" type="text" name="Fax de la pharmacie communautaire">
              </div>
              <div>
                <label for="pharma-nom-pec">Pharmacien</label>
                <input id="pharma-nom-pec" type="text" name="Nom du pharmacien de la pharmacie communautaire">
              </div>
              <div>
                <label for="licence-pec">Licence</label>
                <input id="licence-pec" type="text" name="Numéro de licence de la pharmacie communautaire">
              </div>

            </div>
          </div>
          <div class="intervenant groupe">
            <div>
              <p class="titre-centre" style="margin-bottom:0;">INTERVENANT (IPS OU MÉDECIN RÉPONDANT) </p>
            </div>
            <div class="grid-form">
              <div>
                <label for="inter-nom-pec">Nom et Prénom</label>
                <input id="inter-nom-pec" type="text" name="Nom du pharmacien répondant">
              </div>
              <div>
                <label for="inter-fax-pec">Télécopieur</label>
                <input id="inter-fax" type="text" name="Fax du pharmacien répondant">
              </div>
              <div>
                <label for="inter-licence-pec">Licence</label>
                <input id="inter-licence-pec" type="text" name="Licence du pharmacien répondant">
              </div>
              <div>
                <label for="inter-phone-pec">Téléphone</label>
                <input id="inter-phone-pec" type="text" name="Tél du pharmacien répondant">
              </div>
            </div>
          </div>
          <div class="autorize">
            <fieldset>
              <legend>J'autorise : </legend>
              <div>
                <label>
                  <input id="cible-stipule" type="radio" name="autorise"
                    value="le pharmacien à ajuster selon les cibles stipulées par les lignes
                  directrices en vigueur.">
                  J’autorise le pharmacien à ajuster selon les cibles stipulées par les lignes
                  directrices en vigueur.</label>
              </div>
              <div>
                <label>
                  <input id="cible-mentionne" type="radio" name="autorise"
                    value="le pharmacien à ajuster selon les cibles mentionnées ci-dessous :">
                  J’autorise le pharmacien à ajuster selon les cibles mentionnées ci-dessous :</label>
              </div>
            </fieldset>
          </div>
          <div class="trouble-pec shadowed">
            <div class="grid-quatre">
              <section>
                <div>
                  <p class="grave-titre">Hypertension</p>
                </div>
                <div class="choix-pec">
                  <input id="hypertension-140" type="radio" name="hypertension" value="< 140/90 mmHg">
                  <label>&#x3c; 140/90 mmHg</label><br>
                  <input id="hypertension-130" type="radio" name="hypertension" value="< 130/80 mmHg">
                  <label>&#x3c; 130/80 mmHg</label><br>
                  <input id="hypertension-autre" type="radio" name="hypertension" value="Autre">
                  <label>Autre :</label>
                  <textarea name="Hypertension = Explication : " id="" cols="30" rows="4"></textarea>
                </div>
              </section>
              <section>
                <div>
                  <p class="grave-titre">Diabète</p>
                </div>
                <div class="choix-pec">
                  <input id="diabete-a1c" type="radio" name="Diabète" value="A1C < 7%">
                  <label> A1C &#x3c; 7%</label><br>
                  <input id="diabete-AC-4-7mmolL" type="radio" name="Diabète" value="AC 4-7mmol/L">
                  <label>AC 4-7mmol/L</label><br>
                  <input id="diabete-AC-5-10mmolL" type="radio" name="Diabète" value="AC 5-10mmol/L">
                  <label>AC 5-10mmol/L</label><br>
                  <input id="diabete-autre" type="radio" name="Diabète" value="Autre">
                  <label>Autre :</label>
                  <textarea name="diabete :autre explication" id="" cols="30" rows="4"></textarea>
                </div>
              </section>
              <section>
                <div>
                  <p class="grave-titre">Hypothyroïdie</p>
                </div>
                <div class="choix-pec">
                  <input id="hypothyroidie-tsh" type="radio" name="Hypothyroïdie" value="TSH entre 0.4-4">
                  <label>TSH entre 0.4-4</label><br>
                  <input id="hypothyroidie-autre" type="radio" name="Hypothyroïdie" value="Autre">
                  <label>Autre :</label>
                  <textarea name="hypothyroidie : Autre explication" id="" cols="30" rows="4"></textarea>
                </div>
              </section>
              <section>
                <div>
                  <p class="grave-titre">Dyslipidémie</p>
                </div>
                <div class="choix-pec">
                  <input id="dyslipidemie-ldl" type="radio" name="dyslipidemie" value="LDL">
                  <label>LDL &#x3c; <input class="underline-input" type="text"></label><br>

                  <input id="dyslipidemie-non-hdl" type="radio" name="dyslipidemie" value="non-hdl">
                  <label>non-HDL &#x3c; <input class="underline-input2" type="text"></label><br>

                  <input id="dyslipidemie-apo-b" type="radio" name="dyslipidemie" value="Apo-B">
                  <label>Apo-B &#x3c; <input class="underline-input3" type="text"></label><br>

                  <input id="dyslipidemie-autre" type="radio" name="dyslipidemie" value="Autre">
                  <label>Autre :</label>
                  <textarea name="dyslipidemie: Autre explication" id="" cols="30" rows="4"></textarea>
                </div>
              </section>


            </div>
          </div>

          <div class="thera-two">
            <fieldset>
              <legend>Thérapie actuelle</legend>
              <p style="font-weight:400;">J’autorise le pharmacien :</p>
              <input id="therapie-actuelle-max" type="radio" name="Thérapie actuelle"
                value="J’autorise le pharmacien à ajuster jusqu’aux doses maximales de l’agent connues dans la littérature ">
              <label>à ajuster jusqu’aux doses maximales de l’agent connues dans la
                littérature</label><br>

              <input id="therapie-actuelle-new" type="radio" name="Thérapie actuelle"
                value=" J’autorise le pharmacien à ajouter le/les médicament(s) suivant(s) si nécessaires">
              <label>à ajouter le/les médicament(s) suivant(s) si nécessaires :</label><br>

              <div class="med-list">
                <input type="text" name="Médicament #1"><input type="text" name="Médicament #2"><input type="text" name="Médicament #3"><input type="text" name="Médicament #4"><br>
              </div>
              
              <input id="dyslipidemie-autre" type="radio" name="Thérapie actuelle" value="Autre">
              <label>Autre :</label>
              <textarea name="therapie actuelle : Autre explication" id="" cols="30" rows="4"></textarea>
            </fieldset>
          </div>

          <div class="antecedents">
            <label>Problèmes de santé actuels et antécédents : </label>
            <textarea id="antecedents" name="Problèmes de santé et antécédents" cols="30" rows="8"></textarea>
          </div>

          <div class="prise-en-charge">
            <label>Prise en charge réalisée (ex : dernier suivi, autre professionnel impliqué ou
              toute autre particularité) : </label>
            <textarea id="prise-en-charge" name="Prise en charge réalisée" cols="30" rows="8"></textarea>
          </div>

          <div class="walk-the-line"></div>
          <div>
            <button type="submit" value="fichier-medical-envoye">ENVOYER</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  head() {
    return {
      meta: [
        {
          hid: 'Fichiers médicals',
          name: 'Fichiers Médicals',
          content: 'Transfert de dossiers'
        },
        { name: "robots", content: "index, follow" }
      ]
    }
  },

  methods: {
    uploadEmp() {
      document.querySelector('#fichier-medical').click()
    },
  }
}
</script>

<style scoped>
h1 {
  font-size: 4rem;
  text-align: center;
  font-weight: 300;
  padding-bottom: 50px;
  letter-spacing: 10px;
  text-align: left;
}
h2 {
  font-size: 4rem;
  text-align: center;
  font-weight: 300;
  padding-bottom: 50px;
  letter-spacing: 10px;
  text-align: left;
}

h3 {
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 30px;
  letter-spacing: 8px;
  ;
}

a,
p,
legend {
  font-size: 1.4rem;
  text-decoration: none;
  color: #333;
  padding-bottom: 10px;
}

label {
  display: block;
  padding-bottom: 5px;
  font-size: 1.2rem;
}

input {
  height: 44px;
  width: 100%;
  background-color: transparent;
  border: 1px solid #333;
  text-decoration: none;
  border-radius: 2px;
  padding-left: 20px;
}

fieldset {
  padding: 30px;
}

form {
  padding-bottom: 100px;
}

.autorize {
  padding-top: 2rem;
}

.autorize input,
.autorize-two input {
  width: 30px;
  margin-right:5px;
  position: relative;
  top:16px !important;
}

.autorize label,
.autorize-two label {
  display: inline-block;
  top: -16px;
  padding-left: 10px;
  position: relative;
}


.thera {
  padding-top: 2rem;
}

.thera input,
.thera-two input {
  width: 30px;
  
}

.thera label,
.thera-two label {
  display: inline-block;
  top: -16px;
  padding-left: 10px;
  position: relative;
}

.trouble-pec input {
  width: 25px;
}

.walk-the-line {
  width: 100%;
  height: 10px;
  background-color: var(--main-pale-2);
  margin: 20px 0 10px;
}

.antecedents,
.prise-en-charge {
  padding-top: 75px;
}

.med-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
}

.med-list input {
  width: 100%;
}

.underline-input {
  border: none;
  border-bottom: 1px solid #000;
  width: 100px !important;
  border-radius: 0;
  height: 25px;
}


.underline-input2 {
  border: none;
  border-bottom: 1px solid #000;
  width: 53px !important;
  border-radius: 0;
  height: 25px;
}


.underline-input3 {
  border: none;
  border-bottom: 1px solid #000;
  width: 76px !important;
  border-radius: 0;
  height: 25px;
}

.trouble-pec label {
  display: inline-block;
  top: -16px;
  padding-left: 10px;
  position: relative;
}

textarea {
  width: 100%;
  background-color: transparent;
  border: 1px solid #333;
  padding-left: 20px;
  padding-top: 20px;
}

button {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  padding: 16px 50px 17px;
  border: 1px solid var(--main-dark-2);
  border-radius: 1px;
  font-size: 1.2rem;
  line-height: 1;
  margin: 1rem 0 0;
  background-color: var(--main-dark-2);
  transition: 400ms;
  letter-spacing: 2px;
}

button:hover,
button:focus {
  background-color: var(--hover);
  border-color: var(--hover);
}

.grid-quatre {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0rem;
  padding-top: 50px;
}

.grid-quatre section {
  padding: 0 20px;
}

.grid-quatre section:nth-child(1),
.grid-quatre section:nth-child(3),
.grid-quatre section:nth-child(2) {
  border-right: 2px solid var(--main-pale-2);
}

.trouble-pec {
  padding-bottom: 100px;
}

.grave-titre {
  margin-bottom: 0;
}

.full {
  width: 50% !important;
}

.fifty {
  width: calc(50% - 1rem);
}

.titre-centre {
  background-color: var(--main-dark-2);
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 20px;
  text-align: center;
}

.poker-face {
  position: relative;
}

#fichier-medical {
  padding: 6px;
}


.trick {
  border-radius: 3px;
  background-color: transparent;
  top: 3px;
  left: 6px;
  position: absolute;
  z-index: 1000;
  font-size: 1.2rem;
  padding: 3px 9px 3px 8px;
  border: 1px solid #000;
  border: none;
  background-color: var(--main-bg);
  cursor: pointer;
  font-family: var(--sophia);
  font-weight: 300;

}

input[type="file" i] {
  padding: 6px;
}

.bg {
  background-color: #5fbd751e;
  background-color: var(--main-bg);
  background-color: #fff;
  /* background-color: var(--main-dark-2); */
  padding: 100px 0 0;
}

.container {
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
}

.grid-contact-adresse {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding-bottom: 100px;
}

.grid-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-top: 30px;
  padding-bottom: 0rem;
}

.grid-pec-trois {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding-top: 30px;
  padding-bottom: 30px;
}

.nous-trouver {
  padding-top: 150px;
}

.groupe {
  padding-top: 75px;

}

/* 
.shadowed {
  opacity: 0.5;
  color: grey !important;
} */

@media only screen and (max-width: 734px) {

  h1,h2 {
    font-size: 10vw;
    text-align: left;
    font-weight: 300;
    padding-bottom: 90px;
    letter-spacing: 10px;
    text-align: left;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 8px;
    ;
  }

  a,
  p {
    font-size: 1rem;
    text-decoration: none;
    color: #333;
    padding-bottom: 10px;
  }

  label {
    display: block;
    padding-bottom: 2px;
    font-size: 0.9rem;
    padding-left: 10px;
  }

  input {
    height: 44px;
    width: 100%;
    background-color: transparent;
    border: 1px solid #333;
    text-decoration: none;
    border-radius: 2px;
    padding-left: 20px;
  }

  textarea {
    width: 100%;
    background-color: transparent;
    border: 1px solid #333;
    padding-left: 20px;
    padding-top: 20px;
  }

  button {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    padding: 16px 26px 17px;
    border: 1px solid var(--main);
    border-radius: 1px;
    font-size: 1rem;
    line-height: 1;
    margin: 1rem 0 0;
    background-color: var(--main);
    transition: 400ms;
    letter-spacing: 2px;
  }

  button:hover,
  button:focus {
    background-color: #333;
    border-color: #333;
  }


  .bg {
    background-color: #5fbd751e;
    padding: 100px 0 0;
  }

  .container {
    width: 90%;
  }

  .grid-contact-adresse {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 10px;
  }

  .grid-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: 30px;
    padding-bottom: 2rem;
  }

  .nous-trouver {
    padding-top: 150px;
  }
}
</style>