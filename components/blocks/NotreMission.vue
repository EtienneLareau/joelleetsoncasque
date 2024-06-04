<template>
  <section>
    <!-- <div class="brown-block"></div> -->
    <article class="grid-2-to-3">
      <div>
        <h2 class="ivy">
          NOTRE MISSION
        </h2>
      </div>
      <div>
        <p>
          Nous souhaitons améliorer la santé et le bien-être de nos patients, en leur offrant une expérience positive novatrice et unique
          axée sur une approche humaine. Nous visons à offrir des soins médicaux
          personnalisés et complets, empreints de qualité et sources de satisfaction pour
          notre patientèle.
        </p>
        <p>Basé sur une approche dynamique en constante évolution, la promotion de la
          santé et la prévention de la maladie sont aussi au cœur de nos interventions. Nous
          croyons fermement que chaque individu est le facteur principal de changement
          de sa propre santé.</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
section {
  /* background-color: #d7d7d7; */
  position: relative;
  overflow: hidden;
  /* background-color: var(--fond); */
  padding-top: 50px;
  padding-bottom: 40px;
  /* background-color: var(--main); */
  /* background: linear-gradient(90deg, #5fbd75 60%, #fff); */
  /* background-color: #5fbd751e; */
  background-color: var(--main-pale-2);
}

.grid-2-to-3 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  padding: 0px 0;
  max-width: 1380px;
  margin: 120px auto;
  width: 90%;
  z-index: 2;
  position: relative;
  /* border-top: 1px solid #333;
  border-bottom: 1px solid #333;  */
}

.grid-2-to-3>div:last-child {
  /* background-color: var(--dark-brown); */
  /* padding: 20px; */
}

img {
  width: 80%;
}

p {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.41;
  color: #333;
  max-width: 600px;
  margin-bottom: 1.3rem;
}


h2 {
  font-style: normal;
  font-size: 2.55rem;
  letter-spacing: 0px;
  padding-top:30px;
  /* font-size: 3.441rem; */
  /* max-width: 650px; */
  font-weight: 400;
  line-height: 1.11;
  color: #333;
  margin-bottom: 50px;
  max-width: 610px;
  text-align: right;
}

img {
  /* box-shadow: 40px 10px var(--dark-brown), 80px 20px var(--beige), 120px 30px var(--fond); */
}




.blockus {
  width: 200px;
  height: 4px;
  margin-top: 50px;
  background-color: #fff;
}


@media only screen and (max-width:1480px) {
  
h2 {
  font-style: normal;
  font-size: 3rem;
  letter-spacing: 10px;
  /* font-size: 3.441rem; */
  /* max-width: 650px; */
  font-weight: 400;
  line-height: 1.11;
  color: #333;
  margin-bottom: 50px;
  max-width: 610px;
  text-align: left;
}
  p {
    font-size: 1.2rem;
  }


}

@media only screen and (max-width:734px) {
  section {
    background-color: #f6f6f6;
    padding: 30px 0 30px
  }

  .blockus {
    width: 100px;
    height: 6px;
    margin-top: 25px;
    display: none;
  }

  .grid-2-to-3 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0rem;
    padding: 0;
    width: 90%;
    margin: 0 auto;
  }


  .grid-2-to-3>div:first-child {
    padding-top: 0px;
  }

  h2 {
    /* color: var(--dark-brow); */

    margin-bottom: 0.8rem;
  }

  h2 {
    font-size: 1.55rem;
    margin-bottom: 0px;
    letter-spacing: 0;
  }

  p {
    font-size: 1rem;
  }


  .grid-2-to-3>div:last-child {
    /* display: none; */
  }




}
</style>