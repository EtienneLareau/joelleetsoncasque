<template>
  <div class="good-blue">
    <section class="masthead" role="" aria-label="Image Description">
      <div class="">
        <div class="wrap-title">
          <div class="box-wrapee">
            <div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.good-blue {
  padding: 0;
  margin: 0;
}

.masthead {
  position: relative;
  width: 100%;
  /* max-width:1840px; */
  padding: 0 0;
  height: calc(65vh - 151px);
  /* if you don't want it to take up the full screen, reduce this number */
  min-height: 600px;
  /* overflow: hidden; */

  background: url('~assets/images/clinique.jpg') no-repeat center right;
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

h1 {
  font-style: normal;
  font-size: 4.375rem;
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

.sous {
  font-size: 1.6rem;
  line-height: 1.31;
  font-weight: 300 !important;
  color: #fff;
  max-width: 650px;
  margin-bottom: 40px;
  text-align: left;
  /* left: 50%;
  transform: translateX(-50%); */
  position: relative
}

.bottom-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  /* position: absolute; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  /* bottom: 60px; */
}

.dead-center {
  position: relative;
  /* left: 50%;
  transform: translateX(-50%); */
}


.switch:hover {
  background: var(--main-fade-blue);
  color: var(--main-grey);
  /* color: #000; */
}

.switch {
  background-color: var(--main-grey);
}

.switch-quatr {
  background: none;
  border: 1px solid var(--main-blue);
  color: var(--main-blue);
}

.switch-trois {
  background-color: #fff;
  color: var(--main-grey);
}

.switch-trois:hover {
  background-color: var(--main-blue);
  color: #fff;
}

/* .switch-deux {
    background-color: var(--carmine-m-p);
} */

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
  h1 {
    margin-bottom: 40px;
  }

  a {
    width: fit-content;
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

  .sous {
    margin-bottom: 20px;
  }

  .masthead {

    /* background: url('~assets/images/hero.jpg') no-repeat center; */
  }

  .bottom-wrap {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    /* width: 100%; */
    position: relative;
    left: 0;
    transform: translateX(0%);
    bottom: auto;
  }
}

@media only screen and (max-width: 734px) {
  .masthead {
    height: calc(45vh - 151px);
    /* if you don't want it to take up the full screen, reduce this number */
    min-height: 200px;
    /* overflow: hidden; */
  }

  /* 
  .box-wrapee {
    padding-top:25vh;
    max-width:90%;
  } */



  .bottom-wrap {
    gap: 0.6rem;
  }

  h1 {
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

  a {
    /* background: none;
        border: 2px solid var(--main-grey); */
    font-size: 18px;
    /* color: var(--main-grey); */
    margin-top: 0px;
    font-weight: 600;
    transition: 250ms;
    font-size: 0.9rem;
    padding: 8px 10px 8px;
    border-radius: 3px;
  }

  .sous {
    font-size: 1.2rem;
    font-weight: 400 !important;
  }
}
</style>