<template>
  <div class="test-root">
    <div class="back-image"></div>
    <div class="kaza">
      <div>
        <h1 v-if="error.statusCode === 404">Vous êtes perdu...</h1>

        <h1 v-else>Vous êtes vraiment perdu...</h1>
        <small>{ Erreur 404 }</small>
        <br>
        <div class="butt">
          <a href="https://joelleetsoncasque.ca/">Retour à la page d'accueil</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>

<style scoped>
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.test-root {
  min-height: 100vh;
  position: relative;
}

.back-image {
  background: url('~assets/images/perdu.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(50%);
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  /* display: flex;
    justify-content: center;
    align-items: center; */
}

.kaza {
  padding: 20px;
  text-align: center;
  color: #fff;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
}


.butt {
  margin-top: 20px;
}

a {
  display: block;
  padding: 10px 30px;
  border-radius: 3px;
  border: 3px solid #fff;
  color: #fff;
  transition: 0.2s;
}

a:hover,
a:active,
a:focus {
  background: rgba(255, 255, 255, 0.116);
}
</style>