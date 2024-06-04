<template>
  <div class="navigation-wrap">
    <!-- for use with <use> -->
    <svg xmlns="http://www.w3.org/2000/svg" hidden>
      <symbol id="arrow" viewbox="0 0 16 16">
        <polyline points="4 6, 8 10, 12 6" stroke="#000000" stroke-width="2" fill="transparent" stroke-linecap="round" />
      </symbol>
    </svg>

    <nav role="navigation" class="">
      <button class="hamb" role="button" aria-label="Menu" @click="toggleMenu">
        <!-- mobile shishkebab  -->
        <div>
          <div class="bar-one"></div>
          <div class="bar-two"></div>
          <div class="bar-three"></div>
        </div>
      </button>

      <div class="nav-bar">
        <div class="grid-nav">
          <a href="/">
            <img src="~/assets/images/IPS_Logo-final_Horizontal-fondpale.svg" alt="" class="gros-logo" role="link"
              aria-label="Retour au menu principal" />
          </a>
          <ul class="navi">

            <div class="mobile-lang">
              <!-- <SwitchLang /> -->
            </div>
            <li class="dice">
              <a href="/" class="logo-wrap-mobile mobile-logo">
                <img class="fudge-logo" src="~/assets/images/IPS_Logo-final_Horizontal-fondpale.svg" alt="" />
              </a>

            </li>

            <li class="dice push-up-men">
              <a class="space-rem" v-if="$i18n.locale === 'fr'" href="/">
                Accueil
              </a>
              <a class="space-rem" v-if="$i18n.locale === 'en'" href="/en">
                Home
              </a>
              <a class="space-rem" v-if="$i18n.locale === 'es'" href="/es">
                Casa
              </a>
            </li>

            <li @mouseleave="openMenuDesktopDeuxLeave" class="dice">
              <button @click="openMenuDesktopDeux" @keyup="openMenuDesktopDeux">
                La clinique
                <svg class="arrow-second" aria-hidden="true" width="16" height="16">
                  <use xlink:href="#arrow" />
                </svg>
              </button>
              <ul class="dropdown menu-desktop-deux">
                <li class="drop firstdrop">
                  <a href="/a-propos/" class="">
                    À propos de notre clinique
                  </a>
                </li>
                <li class="drop">
                  <a href="/faq/qu-est-ce-q-une-ips/">
                    Qu'est-ce qu'une infirmière IPS
                  </a>
                </li>
                <li class="drop">
                  <a href="/faq/qu-est-ce-q-une-osteopathe">
                    Qu'est-ce que l'ostéopathie
                  </a>
                </li>
                <!-- <li class="drop">
                  <a href="/faq/qu-est-ce-q-une-travailleuse-sociale">
                    Qu'est-ce qu'une travailleuse sociale
                  </a>
                </li> -->
                <li class="drop">
                  <a href="/la-clinique/notre-equipe/">
                    Notre équipe
                  </a>
                </li>
                <!-- <li class="drop">
                  <a href="/la-clinique/nos-fiers-partenaires/">
                    Nos fiers partenaires
                  </a>
                </li> -->
                <li class="drop">
                  <a href="/prendre-rendez-vous/">
                    Comment prendre rendez-vous
                  </a>
                </li>
                <li class="drop">
                  <a href="/la-clinique/portail-patient/">
                    Votre portail patient
                  </a>
                </li>
              </ul>
            </li>


            <li class="dice">
              <a href="/services/tous-les-services">Nos services</a>
            </li>

            <li class="dice">
              <a href="/contactez-nous/">Contact</a>
            </li>
            <li class="dice">

              <!-- <div data-professionalpagename="cliniqueipsdequartier" data-bookingwidgeturlparams="companyId=132377"
                data-language="fr" data-label="PRENEZ RENDEZ-VOUS" data-url="https://www.gorendezvous.com/"
                class="gorendezvous-butto bender" data-buttoncolor="custom" data-width="280px" data-height="80px"><a
                  id="gobutton" class="" href="https://www.gorendezvous.com/cliniqueipsdequartier?companyId=132377"
                  target="GOrendezvous">PRENEZ
                  RENDEZ-VOUS</a></div>
                  <div class="ligne-mobile"></div> -->

              <div class="gorendezvous-butto bender">
                <a id="gobutton" class="" href="https://clients3.clicsante.ca/65319">PRENEZ
                  RENDEZ-VOUS</a>
              </div>
              <div class="ligne-mobile"></div>
            </li>
            <div class="only-on-mobile">
              <div class="line">


                <a rel="noopener noreferrer" target="_blank"
                  href="https://www.google.com/maps/place/950+Rue+Ste+Th%C3%A9r%C3%A8se,+Drummondville,+QC+J2B+4V8/@45.864572,-72.4754549,17z/data=!4m6!3m5!1s0x4cc8113aa346af23:0x1e9a0fb9c9420155!8m2!3d45.8651547!4d-72.4750579!16s%2Fg%2F11csgx8chz">
                  950 Rue Ste-Thérèse<br>
                  Drummondville, (Québec)<br>
                  J2B 4V8<img class="fat" src="~assets/icons/location-dot.svg" alt=""></a>
                <a href="tel:8192530168">Tél: 819 253-0168</a>
                <a href="">Fax: 819 805-0288</a>
                <a href="email:CLINIQUE@IPSDEQUARTIER.COM">Clinique@ipsdequartier.com</a>
                <a style="color: var(--main) !important;" href="/la-clinique/portail-patient/">Portail patient</a>
                <!-- <a href="/contactez-nous#lamap">Comment s'y rendre</a> -->
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SwitchLang from '~/components/UI/SwitchLang.vue'
export default {
  components: {
    SwitchLang,
  },

  // mounted() {
  //   !function (d, s) { var js, sid = "gorendezvous-bookingwidget-script"; var sEl = d.getElementById(sid); if (sEl) { sEl.parentNode.removeChild(sEl); } js = d.createElement(s); js.id = sid; js.src = "https://www.gorendezvous.com/Scripts/gorendezvous.bookingWidgetV2.min.js?v=" + (Math.floor(new Date().getTime() / (1000 * 60 * 30)) * (1000 * 60 * 30)).toString(); d.body.appendChild(js); }(document, "script");
  // },

  methods: {
    // openMenuDesktopUn() {
    //   console.log('Test Menu Un Open on click and close on mouse leave')
    //   if (
    //     document.querySelector('.menu-desktop-un').style.visibility !==
    //     'visible'
    //   ) {
    //     document.querySelector('.menu-desktop-un').style.visibility =
    //       'visible'
    //     document.querySelector('.menu-desktop-un').style.opacity = '1'
    //     document.querySelector('.menu-desktop-un').classList.add('sous-menu-un')
    //     document.querySelector('.arrow-first').style.transform =
    //       'rotateX(180deg)'

    //     document.querySelector('.menu-desktop-deux').style.visibility =
    //     'hidden'
    //     document.querySelector('.menu-desktop-deux').style.opacity = '0'
    //     document.querySelector('.menu-desktop-deux').style.height = '0'
    //     // document.querySelector('.menu-desktop-trois').style.visibility =
    //     'hidden'
    //     // document.querySelector('.menu-desktop-trois').style.opacity =
    //     '0'
    //     // document.querySelector('.menu-desktop-trois').style.height = '0'
    //   } else {
    //     document.querySelector('.menu-desktop-un').style.visibility =
    //       'hidden'
    //     document.querySelector('.menu-desktop-un').style.opacity = '0'
    //     // document.querySelector('.menu-desktop-un').style.height = '0'
    //     document.querySelector('.menu-desktop-un').classList.remove('sous-menu-un')
    //     document.querySelector('.arrow-first').style.transform =
    //       'rotateX(0deg)'
    //   }
    // },
    // openMenuDesktopUnLeave() {
    //   document.querySelector('.menu-desktop-un').style.visibility =
    //     'hidden'
    //   document.querySelector('.menu-desktop-un').style.opacity = '0'
    //   document.querySelector('.menu-desktop-un').classList.remove('sous-menu-un')
    //   document.querySelector('.arrow-first').style.transform =
    //     'rotate(0deg)'
    // },

    openMenuDesktopDeux() {
      console.log('Test Menu Deux Open on click and close on mouse leave')
      if (
        document.querySelector('.menu-desktop-deux').style
          .visibility !== 'visible'
      ) {
        document.querySelector('.menu-desktop-deux').style.visibility =
          'visible'
        document.querySelector('.menu-desktop-deux').style.opacity = '1'
        document.querySelector('.menu-desktop-deux').classList.add('sous-menu-deux')
        document.querySelector('.arrow-second').style.transform =
          'rotateX(180deg)'

        // document.querySelector('.menu-desktop-un').style.visibility =
        //   'hidden'
        // document.querySelector('.menu-desktop-un').style.opacity = '0'
        // document.querySelector('.menu-desktop-un').style.height = '0'
        // document.querySelector('.menu-desktop-trois').style.visibility =
        //   'hidden'
        // document.querySelector('.menu-desktop-trois').style.opacity =
        //   '0'
        // document.querySelector('.menu-desktop-trois').style.height = '0'
      } else {
        document.querySelector('.menu-desktop-deux').style.visibility =
          'hidden'
        document.querySelector('.menu-desktop-deux').style.opacity = '0'
        document.querySelector('.menu-desktop-deux').classList.remove('sous-menu-deux')
        document.querySelector('.arrow-second').style.transform =
          'rotateX(0deg)'
      }

    },

    openMenuDesktopDeuxLeave() {
      document.querySelector('.menu-desktop-deux').style.visibility =
        'hidden'
      document.querySelector('.menu-desktop-deux').style.opacity = '0'
      document.querySelector('.menu-desktop-deux').classList.remove('sous-menu-deux')
      document.querySelector('.arrow-second').style.transform =
        'rotate(0deg)'
    },

    // openMenuDesktopTrois() {
    //   console.log(
    //     'Test Menu Trois Open on click and close on mouse leave'
    //   )
    //   if (
    //     document.querySelector('.menu-desktop-trois').style
    //       .visibility !== 'visible'
    //   ) {
    //     document.querySelector('.menu-desktop-trois').style.visibility =
    //       'visible'
    //     document.querySelector('.menu-desktop-trois').style.opacity =
    //       '1'
    //     document.querySelector('.menu-desktop-trois').classList.add('sous-menu-trois')
    //     document.querySelector('.arrow-third').style.transform =
    //       'rotateX(180deg)'

    //     document.querySelector('.menu-desktop-un').style.visibility =
    //       'hidden'
    //     document.querySelector('.menu-desktop-un').style.opacity = '0'
    //     document.querySelector('.menu-desktop-un').style.height = '0'
    //   } else {
    //     document.querySelector('.menu-desktop-trois').style.visibility =
    //       'hidden'
    //     document.querySelector('.menu-desktop-trois').style.opacity =
    //       '0'
    //     document.querySelector('.menu-desktop-trois').classList.remove('sous-menu-trois')
    //     document.querySelector('.arrow-third').style.transform =
    //       'rotateX(0deg)'
    //   }
    // },

    // openMenuDesktopTroisLeave() {
    //   document.querySelector('.menu-desktop-trois').style.visibility =
    //     'hidden'
    //   document.querySelector('.menu-desktop-trois').style.opacity = '0'
    //   document.querySelector('.menu-desktop-trois').classList.remove('sous-menu-trois')
    //   document.querySelector('.arrow-third').style.transform =
    //     'rotate(0deg)'
    // },

    // MOBILE DOWN
    toggleMenu() {
      if (document.querySelector('.navi').style.display !== 'block') {
        this.openMenu()
      } else {
        this.closeIt()
      }
    },

    openMenu() {
      // document.querySelector('.hamb').style.opacity = '0'
      document.querySelector('.bar-one').style.transform = 'rotate(20.5deg)'
      document.querySelector('.bar-two').style.opacity = '0'
      document.querySelector('.bar-three').style.transform = 'rotate(-20.5deg)'
      document.querySelector('.navi').style.display = 'block'
      document.querySelector('body').style.height = '100%'
      document.querySelector('body').style.overflow = 'hidden'
      setTimeout(function () {
        document.querySelector('.navi').style.opacity = '1'
      }, 50)
    },

    closeIt() {
      document.querySelector('body').style.height = 'inherit'
      document.querySelector('body').style.overflow = 'auto'
      document.querySelector('.bar-one').style.transform = 'rotate(0deg)'

      document.querySelector('.bar-three').style.transform = 'rotate(0deg)'
      setTimeout(() => {
        document.querySelector('.bar-two').style.opacity = '1'
      }, 200)

      document.querySelector('.navi').style.display = 'none'
      // document.querySelector('.hamb').style.position = 'fixed'
      document.querySelector('body').style.position = 'relative'
      setTimeout(function () {
        document.querySelector('.navi').style.opacity = '0'
      }, 50)
    },
  },
}
</script>

<style scoped>
svg[hidden] {
  display: none;
  position: absolute;
}

svg {
  margin: 0;
  padding: 0;
  position: relative;
  top: 2px;
  left: -2px;
  color: #6b452d;
}

.navigation-wrap {
  /* border-bottom: 2px solid var(--main-grey); */
  /* box-shadow: 0 0.15em 0.25em rgb(0 0 0 / 15%); */
  position: relative;
  z-index: 50000;
  background-color: var(--beige);
  background-color: var(--fond);
  background-color: #fff;
}

nav {
  position: relative;
  z-index: 10000;
  width: 95%;
  max-width: 2100px;
  /* max-width: 1840px; */
  margin: 0 auto;
  background-color: #e1d0be;
  background-color: var(--fond);
  background-color: #fff;

}

.nav-bar {
  /* height: 100px; */
  display: flex;
  align-items: center;
  /* padding-top:5px; */
}

.grid-nav {
  display: grid;
  grid-template-columns: 375px 1fr;
  gap: 0;
  width: 100%;
}

.gros-logo {
  width: 315px;
  vertical-align: bottom;
  display: inline;
  height: auto;
  padding: 30px 0 20px;
}

a {
  position: relative;
  display: flex;
  align-items: center;
}

.navi {
  margin: 18px 0 18px auto;
  /* margin-left: auto; */
  display: flex;
  align-items: center;
}

.bender {
  background-color: var(--main-dark-2);
  padding: 15px 6px;
  font-family: var(--sophia) !important;
  font-weight: 500 !important;
  display: inline-block;
  color: #fff !important;
  text-decoration: none !important;
  border-radius: 4px;
  transition: 200ms;
  margin-left: 10px;

}

.bender>a {
  color: #fff !important;
  ;
  font-weight: 600 !important;
  text-decoration: none !important;
}

.bender:hover {
  background-color: #333;
}


/**There you are menu */
.sous-menu-un {
  height: 422px !important;
  padding: 12px 0;
}


.sous-menu-deux {
  height: 345px !important;
  padding: 12px 0;
}


.sous-menu-trois {
  height: 132px !important;
  padding: 12px 0;
}

.only-on-mobile {
  display: none;
}

.ligne-mobile {
  display: none;
  border-top: 1px solid #333;
  padding-top: 20px;
  /* margin-top:20px; */
  /* padding-left:26.4px; */
  width: calc(100% - 22.8px);
  margin: 20px auto 0px;
}

.vert-lines {
  border-right: 1px solid rgba(128, 128, 128, 0.18);
  margin-right: 35px;
  padding-right: 5px;
}




.bold-rdv {
  font-weight: 600 !important;
}

.arrow-first,
.arrow-second,
.arrow-third {
  transition: 0.5s;
}

.logo-link {
  /* background-color: yellow; */
  padding: 0;
  margin: 0;
}

.logo-link img {
  width: 260px;
  height: auto;
}

.mobile-lang,
.mobile-logo {
  display: none;
}

.fudge-logo {
  /* left: 2px; */
  position: relative;
  margin-top: 0px;
  margin-bottom: 30px;
  width: 186.66px;
  height: auto;
  /* aspect-ratio: 81/23; */
}



/* 
.logo-wrap-mobile {
  padding: 0;
} */

ul::after {
  content: '';
  display: block;
  clear: both;
}

ul li {
  position: relative;
  display: inline;
}

ul li a,
ul li button {
  display: inline;
  padding: 1.2rem 0.9rem;
  text-decoration: none;
  color: #333;
  color: var(--bleu);
  font-weight: 400;
  font-size: 1.15rem;
  text-transform: uppercase;
  /* text-transform: uppercase; */
  /* transition-duration: 0.5s; */
}

/* 
.logo-wrap-mobile {
  padding-left: 0 !important;
  padding-right: 0;
} */

.drop>a {
  display: inline-block;
  margin: 0 0 6px 20px;
  padding: 12px 0px 6px;
  border-bottom: 1px solid #fff;
  color: var(--main);
  box-sizing: border-box;
  transition: 200ms;
}

.drop>a:hover,
.drop>a:focus {
  /* background-color: rgb(240, 240, 240);
    background-color: var(--main-blue-tw20); */
  /* background-color: rgb(246, 246, 246); */
  border-bottom: 1px solid var(--main-dark-2);
  ;
  color: var(--main-dark-2);
  ;
  /* background-color: var(--main-pale); */
}

.menu-desktop-un,
.menu-desktop-deux,
.menu-desktop-trois {
  visibility: hidden;
  opacity: 0;
  height: 0;
  overflow-y: hidden;
  min-width: 19rem;
  position: absolute;
  display: block;
  z-index: 2000;
  /* padding: 10px 0 10px; */
  margin-top: 0rem;
  left: 0;
  background: rgb(255, 255, 255);

  padding-inline-start: 0px;
  transition: 0.25s ease;
  box-shadow: 0 0.15em 0.25em rgb(0 0 0 / 25%);
  border-radius: 3px;
  padding: 12px 0;
}

.menu-desktop-un,
.menu-desktop-trois,
.menu-desktop-deux {
  min-width: 25rem;
}

.menu-desktop-un {
  min-width: 23.4rem;
}

.menu-desktop-deux {
  left: auto;
  left: 0;
  /* right: 0%; */
}

/* 
  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    height: auto;
  } */

ul li ul li {
  clear: both;
  width: 100%;
}

ul>li>ul>li {
  /* padding: 10px 15px 10px 15px; */
  display: block;
  /* font-size: 0.9em; */
}

ul>li>ul>li>a {
  display: block;
}

li.drop a {
  font-size: 1.15rem;
  font-weight: 500;
  color: rgb(48, 48, 48)
}

i {
  position: relative;
  top: 2px;
  left: 3px;
}

button {
  border: none;
  background-color: transparent;
  color: none;
  padding: 20px;
  margin-bottom: 0;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  z-index: 2000;
}

.pop {
  display: none;
  position: fixed;
  z-index: 20000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: #f4f7f9;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  transition: all 0.5s ease-in-out;
}

.fly-butt {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 30000;
}

.top-menu>a,
.top-menu {
  font-size: 1.1rem;
  color: #333;
  /* text-transform: uppercase; */
}

/* 
.dropdown {
  display: block;
  padding: 12px 0;
} */

.hamb {
  position: absolute;
  z-index: 100000;
  top: 50%;
  right: 0.4rem;
  padding: 0.7rem 0rem 0.7rem;
  /* border: 1px solid red; */
  transform: translateY(-50%);
  /* width: 40px;
    height: 37px; */
  display: none;
  cursor: pointer;
  transition: transform 0.4s ease;
  /* background: palegreen; */
}

.bar-one,
.bar-two,
.bar-three {
  height: 2px;
  width: 45px;
  background: var(--main);
  margin: 6px 0 6px;
  transition: 250ms;
  position: relative;
  transform-origin: left;
}

.close-btn>i {
  font-size: 1.9rem;
  color: var(--main-blue);
}

.bar-top,
.bar-mid,
.bar-low {
  position: relative;
  background: var(--main-grey);
  border-radius: 100px;
  width: 2rem;
  height: 2px;
  right: 0px;
  padding: 0;
  transform-origin: left;
  transition: all 0.3s ease;
}

.bar-mid {
  top: 10px;
}

.bar-low {
  top: 20px;
}

.point {
  cursor: pointer;
}

.dropdown>li>a {
  font-weight: 400;
}

.offer {
  /* background: #006988; */
  max-width: 19.1rem;
}

.gras {
  font-weight: 700 !important;
}

/* Green abr and sub */

.green-bar {
  width: 100px;
  height: 6px;
  background-color: var(--main);
  color: var(--green);
  position: relative;
  margin-bottom: 35px;
}

.button-un-bar {
  /* border-right:2px solid rgba(128, 128, 128, 0.277); */
  padding-right: 20px
}

.button-un {
  /* background-color: var(--main); */
  /* color: #fff;
  color: var(--main);
  font-weight: 600;
  padding: 15px 25px; */
  /* background-color: #6b452d; */
  background-color: var(--main-dark-2);
  padding: 15px 25px 16px;
  border: none;
  color: #fff;
  font-weight: 500;
  /* border: 1px solid #2c6c4e; */
  font-size: 1.15rem;
  letter-spacing: 1px;
  transition: 200ms;
  cursor: pointer;
  box-shadow: 0;
  font-family: "sofia-pro", serif;
  /* font-weight: 600; */
  font-style: normal;
  border-radius: 4px;
}

.button-un:hover,
.button-un:focus {
  background-color: #333;
  /* color: var(--main); */
  ;
}


.icon-contact {
  margin-bottom: 20px;
  color: var(--main-blue);
}

i {
  margin-right: 5px;
}

.more-push {
  margin: 0 4px 0 -4px;
}

.face-push {
  margin: 0 8px 0 0px;
  overflow: hidden;
}

.fat {
  max-width: 11px;
  display: none;
}

.line a {
  padding-top: 0;
  padding-bottom: 0;
  color: #333 !important;
}

@media only screen and (max-width:1265px) {

  .vert-lines {
    display: none;
  }
}

@media only screen and (max-width: 1580px) {

  ul li a,
  ul li button {
    font-weight: 500;
  }

  .grid-nav {
    grid-template-columns: 200px 1fr;
  }

  .sous-menu-un {
    height: 392px !important;
    padding: 12px 0;
  }

  .sous-menu-deux {
    height: 321px !important;
    padding: 12px 0;
  }


  .gros-logo {
    width: 200px;
    vertical-align: bottom;
    display: inline;
  }


  .button-un {
    /* background-color: var(--main); */
    /* color: #fff;
  color: var(--main);
  font-weight: 600;
  padding: 15px 25px; */
    /* background-color: #6b452d; */
    background-color: var(--main-dark-2);
    padding: 10px 15px 11px;
    border: none;
    color: #fff;
    font-weight: 500;
    /* border: 1px solid #2c6c4e; */
    font-size: 1rem;
    letter-spacing: 1px;
    transition: 200ms;
    cursor: pointer;
    box-shadow: 0;
    font-family: "sofia-pro", serif;
    /* font-weight: 600; */
    font-style: normal;
    border-radius: 4px;
  }

  .button-un:hover,
  .button-un:focus {
    background-color: #fff;
    color: var(--main);
    ;
  }

  li.drop a {
    font-size: 1rem;
  }

  svg {
    margin: 0;
    padding: 0;
    position: relative;
    top: 3px;
    color: #828282;
  }

  ul.navi>li>button,
  ul.navi>li>a {
    font-size: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }


  .bender {
    background-color: var(--main-dark-2);
    padding: 15px 0px;
    margin-left: 5px;
    font-family: var(--sophia) !important;
    font-weight: 500 !important;
    display: inline-block;
    color: #fff !important;
    text-decoration: none !important;
    border-radius: 4px;
    transition: 200ms;

  }

  .bender>a {
    color: #fff !important;
    ;
    font-weight: 600 !important;
    text-decoration: none !important;
  }

  .bender:hover {
    background-color: #333;
  }
}


@media only screen and (max-width: 990px) {
  ul li {
    position: relative;
    display: block;
  }

  ul li a,
  ul li button {
    display: block;
    padding: 0.6rem 0.8rem 0.6rem;
    text-decoration: none;
    color: #333;
    color: var(--main-second);
    font-size: 1.144rem;
  }


  ul.navi>li>button,
  ul.navi>li>a {
    font-size: 1rem;
    padding-left: 0rem;
    padding-right: 0rem;
  }

  .bender {
    margin-top: 15px;
    margin-left: 0;
  }

  .bender a {
    padding: 0px 10px !important;
  }

  .ligne-mobile {
    display: block;
    border-top: 1px solid #333;
    padding-top: 20px;
    /* margin-top:20px; */
    /* padding-left:26.4px; */
    width: calc(100% - 22.8px);
    margin: 20px 0 0px;
  }


  .button-un {
    /* background-color: var(--main); */
    /* color: #fff;
  color: var(--main);
  font-weight: 600;
  padding: 15px 25px; */
    /* background-color: #6b452d; */
    background-color: var(--main);
    padding: 10px 1rem 11px;
    border: none;
    color: #fff;
    font-weight: 500;
    /* border: 1px solid #2c6c4e; */
    font-size: 1rem;
    letter-spacing: 1px;
    transition: 200ms;
    cursor: pointer;
    box-shadow: 0;
    font-family: "sofia-pro", serif;
    /* font-weight: 600; */
    font-style: normal;
    border-radius: 4px;
  }

  .navigation-wrap {
    /* border-bottom: 2px solid var(--main-grey); */
    /* box-shadow: 0 0.15em 0.25em rgb(0 0 0 / 25%); */
  }


  .gros-logo {
    width: 200px;
    vertical-align: bottom;
    display: inline;
    margin: 0px 0;
    padding: 10px 0;
  }

  nav {
    /* height: 600px; */
    display: flex;
    align-items: center;
  }

  .nav-bar {
    padding-top: 0;
  }

  .grid-nav {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 0;
    width: 100%;
  }

  .firstdrop {
    padding-top: 8px;
  }

  .dropdown li a {
    display: block;
    padding: 0rem 0.8rem 0.6rem 1.8rem;
    text-decoration: none;
    color: #333;
    color: var(--main-grey);
    font-size: 1.1rem;
    /* background: palegoldenrod; */
    /* transition-duration: 0.5s; */
  }

  .hamb {
    display: block;
  }

  /* ul.navi > li {padding-left:20px;} */
  .navi {
    display: none;
    position: fixed;
    z-index: 20000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: #f4f7f9;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    transition: all 0.5s ease-in-out;
  }

  .mobile-lang,
  .mobile-logo {
    display: block;
  }

  .shadow {
    display: block;
    color: var(--main-blue);
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100%);
    height: 2px;
    background-color: #44b6b0;
    background: linear-gradient(to right, #006988, #44b6b0);
    display: none;
    bottom: 0px;
  }

  .push-up-menu {
    margin-top: 40px;
  }

  .dice-logo {
    padding-left: 2.5%;
  }

  .dice {
    padding-left: 30px;
  }

  .caret {
    width: 0.8em;
    position: relative;
    top: 2px;
    left: 6px;
    transform: rotate(180deg);
    fill: hsl(194, 100%, 27%);
    transition: all 0.25s ease-in-out;
  }

  .menu-desktop-un,
  .menu-desktop-deux,
  .menu-desktop-trois {
    visibility: hidden;
    opacity: 1;
    height: 0;
    min-width: auto;
    position: relative;
    z-index: 2000;
    /* padding: 10px 0 10px; */
    margin: 0rem;
    padding: 0;
    left: 0;
    background: none;
    padding-inline-start: 0px;
    transition: 0.15s ease;
    box-shadow: none;
    border-radius: 0;
  }

  ul li ul li {
    font-size: 0.9rem;
  }

  .push-up-menu {
    margin-top: 10px;
  }

  .only-on-mobile {
    display: block;
    /* border-top: 2px solid var(--main); */
    padding-top: 0px;
    /* margin-top:20px; */
    /* padding-left:26.4px; */
    width: calc(100% - 40px);
    margin: 20px auto 40px;
  }

  .only-on-mobile a {
    display: block;
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 600;
    text-decoration: none;
    padding: 0.4rem 0;
    color: var(--main);
  }

  /**There you are menu */
  .sous-menu-un {
    height: 366px !important;

  }

  .sous-menu-deux {
    height: 215px !important;

  }


  .sous-menu-trois {
    height: 215px !important;

  }

  .dice-logo {
    padding-left: 2.5%;
  }

  .dice {
    padding-left: 20px;
  }

  .dropdown li a {
    display: block;
    padding: 0rem 0.8rem 0.6rem 0rem;
    text-decoration: none;
    color: #333;
    color: var(--main-grey);
    font-size: 0.8rem;
    list-style-type: disc;
    /* background: palegoldenrod; */
    /* transition-duration: 0.5s; */
  }

  ul li ul li {
    list-style-type: disc;
  }

  ul li ul li::marker {
    color: var(--main-blue);
  }

  svg {
    margin: 0;
    padding: 0;
    position: relative;
    top: 3px;
    color: #424242;
  }
}

@media only screen and (max-width:620px) {

  nav {

    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    /* max-width: 1840px; */
  }

  ul li a,
  ul li button {
    display: block;
    padding: 0.6rem 0.8rem 0.6rem;
    text-decoration: none;
    color: #333;
    color: var(--main-second);
    font-size: 0.9rem;
  }

  .bender {
    padding: 10px 0;
    border: none;
    background-color: transparent;
    margin-top: 0 !important;
  }

  .bender>a {
    color: var(--main) !important;
    font-size: 1rem;
    padding: 0 !important;

  }

  .ligne-mobile {
    padding-top: 10px;
  }

  .drop>a {
    border-bottom: none;
  }

  .hamb {
    padding-right: 20px;
    right: 0;
  }

  .bold-rdv {
    font-weight: 400 !important;
  }
}

/* 
@media only screen and (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
  p {
    margin-bottom: 0;
    font-weight: 400;
    color: #002b4f;
  }
} */
</style>
