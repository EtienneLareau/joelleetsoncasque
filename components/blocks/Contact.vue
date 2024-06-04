<template>
  <div class="bg">
    <div class="container">
      <h2>CONTACT</h2>

      <div class="grid-contact-adresse">
        <div>
          <!-- <h3>GÉNÉRAL</h3> -->
          <div>
            <a href="tel:819-253-0168">Tél: 819 253-0168</a>
          </div>
          <div>
            <a href="tel:8198050288">Fax: 819 805-0288</a>
          </div>
        </div>
        <div>
          <!-- <h3>ADRESSE</h3> -->
          <p>950 rue Ste-Thérèse<br>Drummondville, Qc<br> J2B 4V8</p>
        </div>
      </div>
      <div class="form-contact">
        <h3>ÉCRIVEZ-NOUS</h3>
        <form name="Contactez-nous" method="POST"  data-netlify="true" netlify-honeypot="bot-field" action="/">
          <input type="hidden" name="form-name" value="Contactez-nous" data-remove-prefix>
          <div class="grid-form">
            <div>
              <label for="nom">NOM</label>
              <input id="nom" type="text" name="Nom">
            </div>
            <div>
              <div>
                <label for="prenom">PRÉNOM</label>
                <input id="prenom" type="text" name="Prénom">
              </div>
            </div>
            <div>
              <div>
                <label for="email">ADRESSE COURRIEL</label>
                <input id="email" type="email" name="Courriel" required>
              </div>
            </div>
            <div>
              <div>
                <label for="phone">TÉLÉPHONE</label>
                <input id="phone" type="number" name="Téléphone">
              </div>
            </div>
          </div>
          <div>
            <label for="votre-message">VOTRE MESSAGE</label>
            <textarea name="Message" id="votre-message" cols="30" rows="10"></textarea>
          </div>
          <div>
            <button type="submit">ENVOYER</button>
          </div>
        </form>
      </div>
      <div class="nous-trouver">
        <h2>OÙ NOUS TROUVER</h2>
        <!-- <div class="borne">
          <div><img src="~assets/icons/charging-station.svg" alt=""></div>
          <div><p>Borne de recharge pour voiture électrique disponible sur place</p></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 4rem;
  text-align: center;
  font-weight: 300;
  padding-bottom: 0px;
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
p {
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
  font-weight:400;
  padding: 16px 50px 17px; 
  border:1px solid var(--main-dark-2);
  border-radius: 1px;
  font-size: 1.2rem;
  line-height: 1;
  margin: 1rem 0 0 ;
  background-color: var(--main-dark-2);
  transition: 400ms;
  letter-spacing: 2px;
}

button:hover, button:focus {
  background-color: var(--hover);
  border-color: var(--hover);
}


.bg {
  background-color: #5fbd751e;
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
  padding-bottom: 50px;
}

.grid-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-top: 30px;
  padding-bottom:2rem;
}

.borne {
  display:grid;
  grid-template-columns: 40px 1fr;
  gap:1rem;
  padding: 0 30px;
}

.nous-trouver {
  padding-top:150px;
}

@media only screen and (max-width: 1580px) {
  h2 {
    font-size:3rem;
  }
  h3 {
    margin-bottom:0;
  }
  label {
    font-size:1rem;
    font-weight:400;
    color:#333;
  }

  button {
    font-size:1rem;
    font-weight:700;
  }
}

@media only screen and (max-width: 734px) {

h2 {
  font-size: 5vw;
  text-align: left;
  font-weight: 500;
  padding-bottom: 20px;
  letter-spacing: 2px;
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
  padding-bottom: 0px;
  font-size: 0.9rem;
  padding-left: 6px;
  color:#333;
}

input {
  height: 36px;
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
  height:140px;
}

button {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-weight:500;
  padding: 10px 19px 11px; 
  border:1px solid var(--main-dark-2);
  border-radius: 1px;
  font-size: 1rem;
  line-height: 1;
  margin: 1rem 0 0 ;
  background-color: var(--main-dark-2);
  transition: 400ms;
  letter-spacing: 2px;
}

button:hover, button:focus {
  background-color: #333;
  border-color: #333;
}


.bg {
  background-color: #5fbd751e;
  background-color: #fff;;
  padding: 70px 0 0;
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
  gap: 1.5rem;
  padding-top: 10px;
  padding-bottom:2rem;
}

.nous-trouver {
  padding-top:100px;
}
}
</style>