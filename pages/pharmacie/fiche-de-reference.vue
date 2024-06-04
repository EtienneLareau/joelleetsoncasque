<template>
  <div class="bg">
    <div class="container">
      <h1>Fiche de communication</h1>

      <div class="form-contact">
        <h3>Clinique IPS de Quartier <br>et<br>pharmacien communautaire</h3>

        <form name="Fiche de communication" method="POST" data-netlify="true" netlify-honeypot="bot-field"
          action="/pharmacie/fiche-de-reference/" enctype="multipart/form-data">
          <input type="hidden" name="form-name" value="Fiche de communication">
          <div>
            <label for="nom-ref">Numéro de dossier</label>
            <input id="nom-ref" class="fifty" type="text" name="Numéro de dossier" required>
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

          <div class="grid-ref-trois">
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
              <input id="exp" type="text" name="Expiration">
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
              <p class="titre-centre" style="font-weight:500;">Fiche de communication Clinique IPS de Quartier et
                pharmacie communautaire
              </p>
            </div>
            <fieldset>
              <div>
                <label for="pharmacie-nom">PHARMACIE COMMUNAUTAIRE</label>
                <input id="pharmacie-nom" type="text" name="Nom de la pharmacie communautaire">
              </div>
              <div class="grid-form">
                <div>
                  <label for="telephone-ref">Téléphone</label>
                  <input id="telephone-ref" type="text" name="Téléphone de la pharmacie communautaire">
                </div>
                <div>
                  <label for="fax-ref">Télécopieur</label>
                  <input id="fax" type="text" name="Fax de la pharmacie communautaire">
                </div>
                <div>
                  <label for="pharma-nom-ref">Intervenant</label>
                  <input id="pharma-nom-ref" type="text" name="Intervenant de la pharmacie communautaire">
                </div>
                <div>
                  <label for="licence-ref">Licence</label>
                  <input id="licence-ref" type="text" name="Licence de la pharmacie communautaire">
                </div>

              </div>
            </fieldset>
          </div>

















          <div class="intervenant groupe">
            <div>
              <p class="titre-centre" style="margin-bottom:0;">RÉFÉRENCE DE LA PHARMACIE VERS LA CLINIQUE IPS DE QUARTIER
              </p>
            </div>
            <div class="grid-for">
              <fieldset class="autori">
                <div>
                  <input id="consentement-donne" type="checkbox" value="VALIDÉ"
                    name="L'usager à donné son consentement pour le partage d'information"><label>L'usager à donné son
                    consentement pour le partage d'information
                    avec la Clinique IPS de Quartier.</label>
                </div>
                <div>
                  <input id="accepte-la-consulte" type="checkbox" value="VALIDÉ"
                    name="L'usager accepte la consultation hors RAMQ"><label>L'usager accepte la consultation hors
                    RAMQ à ses frais à la
                    Clinique IPS de Quartier.</label>
                </div>
              </fieldset>
            </div>
          </div>













          <div class="autorize">
            <div>
              <p class="titre-centre" style="margin-bottom:0;">RAISON DE LA CONSULTATION
              </p>
            </div>
            <fieldset class="autori">
              <div class="grid-raison-consulte">
                <div class="autorize-gauche">
                  <div>
                    <input id="periode-max-atteinte" type="checkbox"
                      name="Période maximale admissible de prolongation atteinte" value="VALIDÉ">
                    <label>Période maximale admissible de prolongation atteinte</label>
                  </div>
                  <div>
                    <input id="reevaluation" type="checkbox" name="Réévaluation médicale requise par un professionnel"
                      value="VALIDÉ">
                    <label>Réévaluation médicale requise par un professionnel</label>
                  </div>
                  <div class="date-fix">
                    <div></div>
                    <div>
                      <label>Date et endroit de la dernière visite</label>
                      <input style="padding-left:20px;" id="date-et-endroit-derniere-visite" type="text"
                        name="Date et endroit de la dernière visite médicale">
                    </div>

                  </div>
                </div>
                <div class="autorize-droite">
                  <p class="raison-titre">Consultation médicale ponctuelle</p>
                  <div>
                    <input id="loi31" type="checkbox" name="Condition mineure non-éligible à la loi 31" value="VALIDÉ">
                    <label>Condition mineure non-éligible à la loi 31 (svp spécifier) :</label>
                    <div></div>
                    <input id="loi31-spec" name="Condition mineure non-éligible à la loi 31 - spécification" type="text">
                  </div>
                  <div>
                    <div></div>
                    <div class="date-fix-2">
                      <label style="margin-bottom:5px;font-weight:400;margin-top:10px;">Autres
                        :</label>
                      <input id="loi31-autres" type="text" name="Consultation médicale ponctuelle - Autres">
                    </div>
                  </div>

                </div>
              </div>
            </fieldset>
          </div>

          <div class="reeval">
            <div>
              <p class="titre-centre" style="margin-bottom:0;">Réévaluation médicale requise
              </p>
            </div>
            <fieldset>
              <div>
                <input id="reeval-opti" type="checkbox" value="VALIDÉ" name="Traitement n'est plus jugé optimal">
                <label>Traitement n'est plus jugé optimal (ex. : ajout de molécule
                  requis)</label>
              </div>
              <div>
                <input type="checkbox" name="Signaux d'alarme" value="VALIDÉ">
                <label>Signaux d'alarme (signes, symptômes ou labos anormaux)</label>
                <div class="reeval-left">
                  <input id="reeval-preci" placeholder="Préciser" type="text" name="Précision">
                </div>
              </div>
              <div class="reeval-left">
                <label style="font-weight: 400;">Autres</label><input type="text" name="Autres">
              </div>
            </fieldset>
          </div>

          <div class="autre-infos">
            <div>
              <p class="titre-centre" style="margin-bottom:0;">Autres informations pertinentes à partager
              </p>
            </div>
            <fieldset>
              <div>
                <input id="autre-infos-ajustement" type="checkbox"
                  name="Ajustement de la médication déjà réalisée par le pharmacien et pourra être poursuivie après l'évaluation médicale"
                  value="VALIDÉ"><label>Ajustement de la médication déjà réalisée par le pharmacien et pourra être
                  poursuivie après l'évaluation médicale</label>
              </div>
              <div>
                <textarea style="background-color: #fff;" placeholder="Préciser"
                  name="Ajustement de la médication - Précision" id="autre-infos-precision" cols="30" rows="10"
                  autofocus></textarea>
              </div>
              <div class="mod-input">
                <input id="maladie-chronique" type="checkbox" name="Usager référé au programme de
                  maladie chronique" value="VALIDÉ"><label>Usager référé au programme de
                  maladie chronique ?</label>
                <input id="chro-oui" type="radio" name="Usager référé" value="Oui"><label>Oui</label>
                <input id="chro-non" type="radio" name="Usager référé" value="Non"><label>Non</label>
              </div>
            </fieldset>
          </div>

          <div class="priorite">
            <div>
              <p class="titre-centre" style="margin-bottom:0;">PRIORITÉ POUR RENDEZ-VOUS
              </p>
            </div>
            <fieldset>
              <div>
                <input id="a1" type="radio" name="PRIORITÉ POUR RENDEZ-VOUS" value="36h"><label>A1 <span>&#8804;</span>
                  36h</label>
                <input id="a2" type="radio" name="PRIORITÉ POUR RENDEZ-VOUS" value="72h"><label>A2 <span>&#8804;</span>
                  72h</label>
                <input id="b" type="radio" name="PRIORITÉ POUR RENDEZ-VOUS" value="10 jours"><label>B <span>&#8804;</span> 10
                  jours</label>
                <input id="c" type="radio" name="PRIORITÉ POUR RENDEZ-VOUS" value="28 jours"><label>C <span>&#8804;</span> 28
                  jours</label>
                <input id="d" type="radio" name="PRIORITÉ POUR RENDEZ-VOUS" value="3 mois"><label>D <span>&#8804;</span> 3
                  mois</label>
              </div>
            </fieldset>
          </div>



          <div class="commentaires">
            <div>
              <p class="titre-centre" style="margin-bottom:0;">COMMENTAIRES
              </p>
            </div>
            <div>
              <textarea placeholder="Préciser" name="commentaires" id="" cols="30" rows="10" autofocus></textarea>
            </div>
          </div>



          <div class="pharma">
            <fieldset>
              <div class="grid-pharma">
                <div>
                  <div>
                    <label for="nom-du-pharmacien">Nom du pharmacien</label>
                    <input id="nom-du-pharmacien" type="text" name="Nom du pharmacien">
                  </div>
                  <div>
                    <label>AAAA/MM/JJ</label>
                    <input id="aaaa-mm-jj" type="date" name="Date">
                  </div>
                </div>
                <div>
                  <div>
                    <label>Licence</label>
                    <input id="pharma-licence" type="text" name="Licence du Pharmacien">
                  </div>
                  <div>
                    <label>HH:MM</label>
                    <input id="hhmm" type="text" name="HH:MM">
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <input style="opacity:0;pointer-events:none;" type="text" name="">
          <input style="opacity:0;pointer-events:none;" type="text" name="RÉFÉRENCE DE LA CLINIQUE IPS DE QUARTIER">
          <input style="opacity:0;pointer-events:none;" type="text" name="">

          <div>
            <h2 class="ref">RÉFÉRENCE DE LA CLINIQUE IPS DE QUARTIER</h2>
          </div>

          <div class="reference-de-la-clinique-ips">
            <div>
              <p class="titre-centre" style="margin-bottom:0;">Raison de la consultation
              </p>
            </div>
            <fieldset>


              <div class="grid-raison-consu">
                <div>
                  <div>
                    <input id="prolong" type="checkbox" name="Prolongation des ordonnances"
                      value="VALIDÉ"><label>Prolongation des ordonnances</label>
                  </div>
                  <div>
                    <input id="ajustement-et-suivi" type="checkbox" name="Ajustement et suivi par un médecin :"
                      value="VALIDÉ"><label>Ajustement et suivi
                      par le pharmacien</label>
                  </div>
                  <div class="tarea">
                    <label>Condition mineure :</label>
                    <textarea name="Expliquer la condition mineure" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>

                <div>
                  <div>
                    <input type="checkbox" id="vacci" name="Vaccination" value="VALIDÉ"><label>Vaccination :</label><input
                      class="underline" placeholder="Préciser" type="text" name="Vaccination - Précision :">
                  </div>
                  <div class="tarea">
                    <label>Autre</label>
                    <textarea name="Vaccination : Autre" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div>
                    <input type="checkbox" name="Suivi en alternance" value="VALIDÉ"><label>Suivi en alternance / demande
                      de prise en charge d'une maladie
                      chronique appliquée par le pharmacien communautaire.</label>
                  </div>
                </div>
              </div>
            </fieldset>


            <div>
              <p class="titre-centre" style="margin-bottom:0;">DÉLAI ATTENDU POUR RECEVOIR LE SERVICE
              </p>
            </div>
            <fieldset class="delai-service">
              <div>
                <input id="moin8" type="radio" name="délai attendu pour recevoir le service"
                  value="Moins de 8 heures"><label><span>&#8804;</span> 8 heures</label>
                <input id="moin36" type="radio" name="délai attendu pour recevoir le service"
                  value="Moins de 36 heures"><label>A2 <span>&#8804;</span> 36 heures</label>
                <input id="moin72" type="radio" name="délai attendu pour recevoir le service"
                  value="Moins de 72 heures"><label>B <span>&#8804;</span> 72 heures</label>
                <input id="moin10j" type="radio" name="délai attendu pour recevoir le service"
                  value="Moins de 10 jours"><label>C <span>&#8804;</span> 10 jours</label>
              </div>
              <div>
                <p>***Le pharmacien doit contacter le patient dans un délai de 4 heures ouvrables***</p>
              </div>
            </fieldset>
          </div>

          <div>
            <p class="titre-centre" style="margin-bottom:0;">RÉPONSE DE LA PHARMACIE À ENVOYER À LA CLINIQUE IPS DE
              QUARTIER
            </p>
          </div>
          <fieldset class="accept-refuse">
            <div>
              <input type="radio" id="accept" value="Référence acceptée"
                name="RÉPONSE DE LA PHARMACIE À ENVOYER À LA CLINIQUE IPS DE QUARTIER">
              <label>Référence acceptée</label>
            </div>
            <div>
              <input type="radio" id="refused" value="Référence refusée"
                name="RÉPONSE DE LA PHARMACIE À ENVOYER À LA CLINIQUE IPS DE QUARTIER">
              <label>Référence refusée</label>
            </div>
            <div class="accept-refuse-text">
              <textarea name="Justification du refus" id="refused-why" placeholder="Justification du refus" cols="30"
                rows="10"></textarea>
            </div>
          </fieldset>


          <div class="commentaires">
            <div>
              <p class="titre-centre" style="margin-bottom:0;">COMMENTAIRES
              </p>
            </div>
            <div>
              <textarea placeholder="Préciser" name="Commentaires | Clinique IPS du Quartier"
                id="clinique-ips-commentaires" cols="30" rows="10" autofocus></textarea>
            </div>
          </div>
          <div class="clin">
            <fieldset>
              <div class="grid-clinique">
                <div>
                  <div>
                    <label>Nom de l'intervenant</label>
                    <input id="nom-du-intervenant" type="text" name="Nom de l'intervenant">
                  </div>
                  <div>
                    <label>AAAA/MM/JJ</label>
                    <input id="aaaa-mm-jj-inter" type="date" name="Date du rapport ==">
                  </div>
                </div>
                <div>
                  <div>
                    <label>Licence</label>
                    <input id="inter-permis" type="text" name="Licence de l'intervenant ==">
                  </div>
                  <div>
                    <label>HH:MM</label>
                    <input id="hhmm-inter" type="text" name="HH:MM du rapport ==">
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
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
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 50px;
  letter-spacing: 0px;
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
  background-color: #fff;
}

fieldset {
  padding: 30px;
}

form {
  padding-bottom: 100px;
}

textarea {
  background-color: #fff !important;
}

::placeholder {
  font-size: 1rem;
  font-style: italic;
}

.autori label {
  display: inline;
  padding-left: 10px;
}

.autori input {
  width: 24px;
  top: 14px;
  position: relative;
}

.grid-raison-consulte {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.autorize-gauche>div {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0.5rem;
}

.autorize-droite>div {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0.5rem;
}

.autorize {
  padding-top: 2rem;
}

.autorize input[type="checkbox"],
.autorize-two input {
  width: 24px;
  top: 0px;
  right: 0;
}

.autorize input[type="text"] {
  width: 100%;
}

.autorize label,
.autorize-two label {
  display: inline-block;
  top: 10px;
  font-size: 1rem;
  line-height: 1.2;
  /* top: -16px; */
  padding-left: 5px;
  position: relative;
}

.date-fix {
  padding: 10px 0 0 5px;
}


.date-fix label {
  margin: 0;
  padding: 0;
  top: 0;
}

.date-fix input {
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
}

.raison-titre {
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  font-family: var(--sophia);
}

.autorize-droite input[type="text"] {
  top: 2px;
}

.reeval {
  padding-top: 50px;
}

.reeval p {
  font-weight: 400;
  font-size: 1.4rem;
}

.reeval input[type="checkbox"],
.reeval label {
  display: inline;
  ;
}

.reeval input[type="checkbox"] {

  width: 24px;
  top: 16px;
  position: relative
}


.reeval label {
  padding-left: 5px;
  font-size: 1rem;
  ;
}

.reeval-left {
  padding-left: 34px;
  margin-top: 10px;
}








.autre-infos {
  padding-top: 50px;
}

.autre-infos p {
  font-weight: 400;
  font-size: 1.4rem;
}

.autre-infos input[type="checkbox"],
.autre-infos label {
  display: inline;
  ;
}

.autre-infos input[type="checkbox"] {

  width: 24px;
  top: 16px;
  position: relative
}


.autre-infos label {
  padding-left: 10px;
  font-size: 1rem;
  ;
}



.autre-infos textarea {
  width: 100%;
  height: 200px;
  margin-top: 20px;
}

.mod-input label {
  padding-left: 5px;
  margin-right: 15px;
}


.mod-input input[type="radio"],
.mod-input label {
  display: inline;
  ;
}

.mod-input input[type="radio"] {

  width: 24px;
  top: 16px;
  position: relative
}











.priorite {
  padding-top: 50px;
}

.priorite p,
.commentaires p {
  font-weight: 400;
  font-size: 1.4rem;
}

.priorite input[type="radio"],
.priorite label {
  display: inline;
  ;
}

.priorite input[type="radio"] {

  width: 24px;
  top: 16px;
  position: relative
}


.priorite label {
  padding-left: 10px;
  font-size: 1rem;
  padding-right: 40px;
}






.commentaires textarea {
  width: 100%;
  height: 200px;
  background-color: #fff;
  padding: 50px;
}









.grid-pharma {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
}

.grid-pharma>div>div {
  margin-bottom: 30px;
}


.pharma {
  padding-top: 0px;
}

.pharma p {
  font-weight: 400;
  font-size: 1.4rem;
}

.pharma input[type="checkbox"],
.pharma label {
  display: inline;
  ;
}

.pharma input[type="checkbox"] {

  width: 24px;
  top: 16px;
  position: relative
}


.pharma label {
  padding-left: 10px;
  font-size: 1rem;
  padding-right: 40px;
}

















.ref {
  font-size: 2.55rem;
  text-align: center;
  padding-top: 150px;
  padding-bottom: 20px;
}

.grid-raison-consu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
}

.reference-de-la-clinique-ips textarea {
  height: 50px;
  padding: 10px 15px;
}

.tarea {
  padding-left: 34px;
  padding-top: 20px;
}

.tarea label {
  padding-left: 0 !important;
}



.reference-de-la-clinique-ips {
  padding-top: 0px;
}

.grid-raison-consu p {
  font-weight: 400;
  font-size: 1.4rem;
}

.grid-raison-consu input[type="checkbox"],
.grid-raison-consu label {
  display: inline;
  ;
}

.grid-raison-consu input[type="checkbox"] {

  width: 24px;
  top: 16px;
  position: relative
}


.grid-raison-consu label {
  padding-left: 10px;
  font-size: 1rem;
  padding-right: 10px;
}

.underline {
  display: inline !important;
  width: auto;
  border: none;
  border-bottom: 2px solid #333;
  height: 25px;
  padding-left: 5px;
}










.delai-service input[type="radio"],
.delai-service label {
  display: inline;
  ;
}

.delai-service input[type="radio"] {

  width: 24px;
  top: 16px;
  position: relative
}


.delai-service label {
  padding-left: 10px;
  font-size: 1rem;
  padding-right: 10px;
}

.delai-service p {
  font-size: 1.2rem;
  font-family: var(--sophia);
  font-weight: 500;
  padding: 30px 0 0;
  margin: 0;
}




.accept-refuse input[type="radio"],
.accept-refuse label {
  display: inline;
  ;
}

.accept-refuse input[type="radio"] {

  width: 24px;
  top: 16px;
  position: relative
}


.accept-refuse label {
  padding-left: 10px;
  font-size: 1rem;
  padding-right: 10px;
}

.accept-refuse-text {
  position: relative;
  padding-left: 38px;
  padding-top: 10px;

}

.accept-refuse-text textarea {
  height: 100px;
  padding-top: 10px;
}























.grid-clinique {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
}

.grid-clinique>div>div {
  margin-bottom: 30px;
}
























.trouble-ref input {
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

.trouble-ref label {
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

.trouble-ref {
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
  font-family: var(--sophia);
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

.grid-ref-trois {
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