<template>
  <div>
    <div class="grid-wrap-team">
      <div class="bg-img-team">

      </div>
      <div class="team-text">
        <div>
          <h2>CRYOTHÉRAPIE</h2>
          <p>
            Verrues plantaires ? Acrochordons ? <br>
            Nous offrons le service de cryothérapie (azote) à prix très abordable.
          </p>
          <div class="wrap-button">
            <a class="team-button" href="">PRENEZ RENDEZ-VOUS</a>
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
}

.grid-wrap-team {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 0;
  width: 100%;
  padding: 0;
  height: 750px;
}

.bg-img-team {
  background: url('~assets/images/cryo.jpg') no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.team-text {
  display: flex;
  align-items: center;
  padding-left: 4vw;
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
    display: grid;
    grid-template-columns: 1fr 600px;
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

@media only screen and (max-width:734px) {
  h2 {
    font-size: 5vw;
    text-align: center;
    font-weight: 300;
    padding-bottom: 30px;
    letter-spacing: 2px;
    text-align: left;
    color: #fff;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    /* color: #fff; */
  }

  .bg-img-team {
    background: url('~assets/images/group.jpg') no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 300px;
  }

  .grid-wrap-team {
    display: block;
    grid-template-columns: 1fr;
    gap: 0;
    width: 100%;
    padding: 0;
    height: auto;
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
    font-weight: 400;
    padding: 14px 20px;
    /* border:none; */
    border-radius: 1px;
    font-size: 0.9rem;
    line-height: 1;
    margin: 0;
    /* text-decoration: underline; */
  }
}
</style>