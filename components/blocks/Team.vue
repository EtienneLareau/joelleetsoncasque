<template>
  <div class="wrap-page-block">
    <div class="grid-wrap-team">
      <!-- <div class="bg-img-team">
        <img src="~assets/images/photos/IMG_3088-Edit.jpg" alt="">
      </div> -->
     
      <div class="bg-img-team">
        <img src="~assets/images/photos/IMG_3088-Edit.jpg" alt="">
      </div>
      <div class="team-text">
        <div>
          <h2>L'ÉQUIPE</h2>
          <p>
            Découvrez l'incroyable équipe <br>
            derrière la clinique médicale
          </p>
          <div class="wrap-button">
            <a class="team-button" href="/la-clinique/notre-equipe/">RENCONTREZ L'ÉQUIPE</a>
          </div>
        </div>

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
  color: #fff;
}

p {
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  /* text-transform: uppercase; */
}

.wrap-page-block {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 90px 0;
  background-color: var(--main-dark-2);
}

.grid-wrap-team {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5rem;
  width: 90%;
  /* max-width: 1580px; */
  background-color: var(--main-dark-2);
  padding: 50px 0;
}

.bg-img-team {
  /* background: url('~assets/images/photos/IMG_3088-Edit.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%; */

}

.bg-img-team img {
  /* display:none; */
  bottom: 0px;
  left: 0px;
  position: relative;
}

.team-text {
  display: flex;
  align-items: center;
  /* padding-left: 4vw; */
  background: var(--main-dark-2);
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
}

.team-button:active,
.team-button:focus,
.team-button:hover {
  background-color: #333;
  border-color: #333;
}


@media only screen and (max-width:1580px) {
  .grid-wrap-team {
    gap: 3rem;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    font-weight: 300;
    padding-bottom: 30px;
    letter-spacing: 10px;
    text-align: left;
    /* color: #333; */
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
@media only screen and (max-width:1090px) {
  .wrap-page-block {
    padding:50px 0;
  }
  .grid-wrap-team {
    grid-template-columns:  1fr 311px;
    gap:1.5rem;
  }
}

@media only screen and (max-width:834px) {
  h2 {
    font-size: 5vw;
    text-align: center;
    font-weight: 500;
    padding-bottom: 10px;
    letter-spacing: 2px;
    text-align: left;
    color: #fff;
    font-family: var(--sophia);
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    text-transform: none;
    /* color: #fff; */
  }

  .wrap-page-block {
    padding:0;
  }

  .bg-img-team {
    background: none;
    background-size: cover;
    width: 100%;
    height: auto;
  }

  .grid-wrap-team {
    display: block;
    grid-template-columns: 1fr;
    gap: 0;
    width: 100%;
    padding: 0;
    height: auto;
  }


  .bg-img-team img {
    display: block;
  }

  .team-text {
    padding: 30px 0 60px;
    display: block;
    /* align-items: center; */
    padding-left: 4vw;
    background: var(--main-dark-2);
  }


  .wrap-button {
    position: relative;
    padding: 0px 0 0;
  }

  .team-button {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    padding: 9px 18px 10px;
    /* border:none; */
    border-radius: 1px;
    font-size: 0.9rem;
    line-height: 1;
    margin: 0;
    /* text-decoration: underline; */
  }
}</style>