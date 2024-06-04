<template>
  <div class="bg">
    <section class="masthead" role="" aria-label="Image Description">
    </section>
    <div class="container">
      <h1>CONTACTEZ-NOUS</h1>

      <div class="grid-contact-adresse">
        <div>
          <!-- <h3>GÉNÉRAL</h3> -->
          <div>
            <a href="tel:819-253-0168">Tél: 819 253-0168</a>
          </div>
          <div>
            <a href="">Fax: 819 805-0288</a>
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
                <input id="email" type="email" name="Courriel">
              </div>
            </div>
            <div>
              <div>
                <label for="">TÉLÉPHONE</label>
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
      <div id="lamap" class="nous-trouver">
        <h2>OÙ NOUS TROUVER</h2>
      </div>
    </div>
    <Map />
  </div>
</template>

<script>
import Map from '~/components/blocks/Map'
export default {
  components: {
    Map,
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
  /* background-color: #fff; */
  /* background-color: var(--main-dark-2); */
  /* padding: 100px 0 0; */
}

.container {
  width: 90%;
  max-width: 980px;
  margin: 100px auto 0px;
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

.nous-trouver {
  padding-top:150px;
}

@media only screen and (max-width: 734px) {

h1 {
  font-size: 1.4rem;
  text-align: left;
  font-weight: 300;
  padding-bottom: 50px;
  letter-spacing: 10px;
  text-align: center;
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
  font-weight:400;
  padding: 16px 26px 17px; 
  /* border:1px solid var(--main); */
  border-radius: 1px;
  font-size: 1rem;
  line-height: 1;
  margin: 1rem 0 0 ;
  /* background-color: var(--main); */
  transition: 400ms;
  letter-spacing: 2px;
}

button:hover, button:focus {
  background-color: #333;
  border-color: #333;
}


.bg {
  /* background-color: #5fbd751e; */
  /* padding: 100px 0 0; */
}

.container {
  width: 90%;
  padding-top:0px;
  margin-top: 50px;
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
  padding-bottom:2rem;
}

.nous-trouver {
  padding-top:150px;
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

  background: url('~assets/images/phonemap.jpg') no-repeat center right;
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
}</style>