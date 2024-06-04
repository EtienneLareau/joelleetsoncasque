<template>
  <div class="borne-wrap">
    <div class="borne">
      <div><img src="~assets/icons/charging-station.svg" alt=""></div>
      <div>
        <p>Borne de recharge pour voiture électrique disponible sur place</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-weight:700;
  font-size: 1.6rem;
  color: #fff;
  padding:0;
  margin:0;
}

.borne-wrap {
  background-color: var(--main);
  padding: 20px;
}

.borne {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1.5rem;
  padding: 0 30px;
  max-width:1100px;
  margin: 0 auto;
}
.borne > div:first-child {
  background-color: #fff;
  width:100px;
  height:100px;
  border-radius:1000px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width:60px;
  height:auto;
  position: relative;
  left:5px;
}

.borne > div:last-child {
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
}

@media only screen and (max-width:834px) {
  img {
    width:30px;
  }
  p {
    font-size: 1rem;
  }

.borne {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1rem;
  padding: 0 0px;
  max-width:1100px;
  margin: 0 auto;
}

.borne > div:first-child {
  width:50px;
  height:50px;
}
}
</style>