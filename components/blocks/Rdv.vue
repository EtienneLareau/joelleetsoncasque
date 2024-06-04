<template>
  <div class="bg">
    <div class="rdv-wrap">
      <div>
        <h2>PRENEZ RENDEZ-VOUS</h2>
      </div>
      <div class="grid-rdv">
        <div class="rdv-desktop">
          <!-- <a class="rdv-button" href="">PRENEZ RENDEZ-VOUS</a> -->
          <div data-professionalpagename="cliniqueipsdequartier" data-bookingwidgeturlparams="companyId=132377"
            data-language="fr" data-label="PRENEZ RENDEZ-VOUS" data-url="https://www.gorendezvous.com/"
            class="gorendezvous-button bender" data-buttoncolor="custom" data-width="280px" data-height="80px"><a class=""
              href="https://www.gorendezvous.com/cliniqueipsdequartier?companyId=132377" target="GOrendezvous">PRENEZ
              RENDEZ-VOUS</a></div>
          <script>
            !function (d, s) { var js, sid = "gorendezvous-bookingwidget-script"; var sEl = d.getElementById(sid); if(sEl) { sEl.parentNode.removeChild(sEl); } js = d.createElement(s); js.id = sid; js.src = "https://www.gorendezvous.com/Scripts/gorendezvous.bookingWidgetV2.min.js?v=" + (Math.floor(new Date().getTime()/(1000*60*30))*(1000*60*30)).toString(); d.body.appendChild(js); } (document, "script");
          </script>
        </div>
        <div>
          <p>
            Il nous fera plaisir de vous attribuer
            une plage horaire
          </p>
        </div>
        <div class="rdv-mobile">
          <a class="rdv-button" href="">PRENEZ RENDEZ-VOUS</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bender {
  background-color: var(--main-dark-2);
  padding: 15px 25px;
  font-family: var(--sophia) !important;
  font-weight: 400 !important;
  display: inline-block;
  color: #fff !important;
  text-decoration: none !important;
  
}

.bender > a {
  color: #fff !important;;
  font-weight:400 !important;
  text-decoration: none !important;
}

h2 {
  font-size: 4rem;
  text-align: center;
  font-weight: 300;
  padding-bottom: 50px;
  letter-spacing: 10px;
  ;
}

p {
  font-size: 1.6rem;
  line-height: 1.2;
  max-width: 500px;
  padding: 0;
}

.rdv-wrap {
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
}


.grid-rdv {
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  padding: 40px 0 45px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
}

.grid-rdv>div {
  position: relative;
}

.bg {
  background-color: #5fbd751e;
  background-color: var(--main-pale-2);
  background-color: var(--main-bg);
  padding: 100px 0 150px;
}

.rdv-button {
  text-decoration: none;
  color: #333;
  font-weight: 400;
  padding: 16px 50px 17px;
  border: 1px solid #333;
  border-radius: 1px;
  font-size: 1.2rem;
  line-height: 1;
  margin: 0;
  position: absolute;
  top: 5px;
  left: 0;
}


.rdv-mobile {
  display: none;
}


@media only screen and (max-width:1480px) {

  p {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width:734px) {
  h2 {
    font-size: 10vw;
    text-align: center;
    font-weight: 300;
    padding-bottom: 50px;
    letter-spacing: 10px;
    ;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.2;
    max-width: 500px;
    padding: 0;
    text-align: center;
  }

  .grid-rdv {
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    padding: 40px 0 45px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    position: relative;
  }

  .rdv-button {
    text-decoration: none;
    color: #333;
    font-weight: 400;
    padding: 16px 50px 17px;
    border: 1px solid #333;
    border-radius: 1px;
    font-size: 1.2rem;
    line-height: 1;
    margin: 0;
    position: relative;
    display: inline-block;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .rdv-desktop {
    display: none;
  }

  .rdv-mobile {
    display: block;
  }
}</style>