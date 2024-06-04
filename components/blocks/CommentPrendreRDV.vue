<template>
  <div>
    <div class="grid-wrap-team">

      <div class="team-text row2">
        <div>
          <h2>PRENDRE RENDEZ-VOUS</h2>
          <p>
            
            Voyez comment vous préparer pour votre premier rendez-vous.
          </p>
          <div class="wrap-button">
            <a class="team-button" href="/prendre-rendez-vous/">COMMENT PRENDRE RENDEZ-VOUS</a>
          </div>
        </div>

      </div>
      <div class="bg-img-team row1">

      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 4rem;
  text-align: center;
  font-weight: 300;
  padding-bottom: 30px;
  letter-spacing: 10px;
  text-align: left;
  color: #333;
}

p {
  font-size: 1.4rem;
  font-weight: 400;
  color: #333;
}

.grid-wrap-team {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas: "row2 row1";
  gap: 0;
  width: 100%;
  padding: 0;
  height: 650px;
  background-color: var(--main-bg);
  padding-top:40px;
  padding-bottom:40px;
}

.row1 {
  grid-area: row1;
}

.row2 {
  grid-area: row2;
}

.bg-img-team {
  background: url('~assets/images/photos/IMG_2502-Edit.jpg') no-repeat center right;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.team-text {
  display: flex;
  align-items: center;
  padding: 0 2vw 0 4vw;
  background: var(--main-bg);
  /* background-color: #fff; */
}

.wrap-button {
  position: relative;
  padding: 20px 0 0;
}

.team-button {
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  padding: 16px 50px 17px;
  border: 1px solid #fff;
  border-radius: 1px;
  font-size: 1.2rem;
  line-height: 1;
  margin: 0;
  transition: 200ms;
  background-color: var(--main-dark-2);
}

.team-button:active,
.team-button:focus,
.team-button:hover {
  background-color: #333;
  border-color: #333;
}

@media only screen and (max-width:1580px) {
  
.grid-wrap-team {
  display: grid;
  grid-template-columns: 600px 1fr;
  grid-template-areas: "row2 row1";
  gap: 0;
  width: 100%;
  padding: 0;
  height: 650px;
  background-color: #fff;
}
  
  h2 {
    font-size: 3rem;
    text-align: center;
    font-weight: 300;
    padding-bottom: 30px;
    letter-spacing: 10px;
    text-align: left;
    color: #333;
  }

.team-button {
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  padding: 16px 20px 17px;
  border: 1px solid #fff;
  border-radius: 1px;
  font-size: 1.2rem;
  line-height: 1;
  margin: 0;
  transition: 200ms;
  background-color: var(--main-dark-2);
}
}

@media only screen and (max-width:834px) {
  h2 {
    font-size: 5vw;
    text-align: center;
    font-weight: 500;
    padding-bottom: 10px;
    letter-spacing: 0px;
    text-align: left;
    color: #333;
    font-family: var(--sophia);
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #333;
    /* color: #fff; */
  }

  .bg-img-team {
    background: url('~assets/images/photos/IMG_2502-Edit.jpg') no-repeat center right;
    background-size: cover;
    width: 100%;
    height: 200px;
  }

  .grid-wrap-team {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "row1"
      "row2";
    gap: 0;
    width: 100%;
    padding: 0;
    height: auto;
    margin-top:20px;
  margin-bottom:0px;
  background-color: #fff;
  }

  .team-text {
    padding: 30px 0 60px;
    display: block;
    /* align-items: center; */
    padding-left: 4vw;
    background: var(--main-bg);
  }


  .wrap-button {
    position: relative;
    padding: 0px 0 0;
  }

  .team-button {
    font-size: 0.9rem;
    padding: 10px 19px 11px;
    letter-spacing: 0;
    font-weight:500;
  }
}
</style>