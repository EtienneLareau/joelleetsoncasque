<template>
  <section>
    <!-- <div class="brown-block"></div> -->
    <article class="grid-2-to-3">
      <!-- <div>
        <h2 class="ivy">
          À PROPOS
        </h2>
      </div> -->
      <div class="center-by-margin">
        <p>
          La Clinique IPS de Quartier est la première clinique médicale d’infirmières
          praticiennes spécialisées (IPS) privée, hors RAMQ, sans médecin, à Drummondville. 
<!--           
          Fondée par une IPS complètement passionnée par
          les soins médicaux et infirmiers, elle se distingue des autres cliniques de
          par <span class="green">son approche humaine axée sur la prévention de la maladie et la
            promotion de la santé</span>. -->
        </p>
        <p>Nous offrons des soins de santé divers pour toute la famille.</p>
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
  background-color: var(--main-pale);
  /* background: linear-gradient(90deg, #5fbd75 60%, #fff); */
  /* background-color: #fff; */
}

.grid-2-to-3 {
  display:flex;justify-content: center;
  padding: 50px 0 50px;
  max-width: 1340px;
  margin: 120px auto;
  width: 90%;
  z-index: 2;
  position: relative;
  /* border-top: 1px solid #909090;
  border-bottom: 1px solid #909090; */
}

.grid-2-to-3>div:last-child {
  /* background-color: var(--dark-brown); */
  /* padding: 20px; */
}


.center-by-margin {
 
}

img {
  width: 80%;
}

p {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.51;
  color: #333;
  max-width: 750px;
  margin-bottom: 1.3rem;
}


h2 {
  font-style: normal;
  font-size: 3.375rem;
  letter-spacing: 6px;
  /* font-size: 3.441rem; */
  /* max-width: 650px; */
  font-weight: 400;
  line-height: 1.11;
  color: #333;
  margin-bottom: 50px;
  max-width: 610px;
  text-align: left;
  padding-top:10px;
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

@media only screen and (max-width:1580px) {

  p {
    font-size: 1.4rem;
  }
}

@media only screen and (max-width:717px) {
  section {
    background-color: #f6f6f6;
    padding: 50px 0 50px
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
    padding-top:20px;
    padding-bottom: 0;
    width: 90%;
    margin: 0 auto;
    border-top: none;
  border-bottom: none;
  }


  .grid-2-to-3>div:first-child {
    /* padding-top: 0px; */
  }

  h2 {
    /* color: var(--dark-brow); */

    margin-bottom: 0.8rem;
  }

  h2 {
    font-size: 1.6rem;
    /* margin-bottom: 22px; */
  }

  p {
    font-size: 1rem;
  }


  .grid-2-to-3>div:last-child {
    /* display: none; */
  }




}
</style>