<template>
  <div class="fond-grid" id="where">

    <section class="left">
      <div class="frameit">
        <GMap ref="gMap" language="en" :cluster="{ options: { styles: clusterStyle } }" :center="{
            lat: locations[0].lat,
            lng: locations[0].lng,
          }" :options="{
      fullscreenControl: false,
      styles: mapStyle,
    }" :zoom="14" title="Emplacement de la Clinique IPS de Quartier" aria-roledescription="Map">
          <GMapMarker v-for="location in locations" :key="location.id" :position="{
              lat: location.lat,
              lng: location.lng,
            }" :options="{
      icon:
        location === currentLocation
          ? pins.selected
          : pins.notSelected,
    }" @click="currentLocation = location" title="Clinique IPS de Quartier"
            aria-label="Emplacement de la Clinique IPS de Quartier">
            <GMapInfoWindow :options="{ maxWidth: 200 }" title="Clinique IPS de Quartier"
              aria-label="Emplacement de la Clinique IPS de Quartier">
              <code>
                                <!-- lat: {{ location.lat }}, lng:
                                  {{ location.lng }} -->
                              950 rue Sainte-Thérèse<br>
  Drummondville ( Québec )<br>
  J2B 4V8
                            </code>
            </GMapInfoWindow>
          </GMapMarker>
          <GMapCircle :options="circleOptions" title="Clinique IPS de Quartier"
            aria-label="Emplacement de la Clinique IPS de Quartier" />
        </GMap>
      </div>
      <!-- </a> -->

      <div class="bottom-button-sect">
        <a href="https://www.google.com/maps/place/950+Rue+Ste+Th%C3%A9r%C3%A8se,+Drummondville,+QC+J2B+4V8/@45.864572,-72.4754549,17z/data=!4m6!3m5!1s0x4cc8113aa346af23:0x1e9a0fb9c9420155!8m2!3d45.8651547!4d-72.4750579!16s%2Fg%2F11csgx8chz"
          target="_blank" rel="noopener noreferrer">
          <button :title="$t('ouvrirlacarte')">
            {{ $t('ouvrirlacarte') }}
          </button>
        </a>
        <!-- <button>Nous trouver</button> -->
      </div>
    </section>
  </div>
</template>

<script>
const svgMarker = {
  path: 'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
  fillColor: '#7bb0b8',
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 1,
}

export default {
  data() {
    return {
      zoom: 1,
      center: {},
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          id: 1,
          lat: 45.8653115911668,
          lng: -72.47497206931324,
          name: 'Clinique IPS de Quartier',
          title: 'Clinique IPS de Quartier',
        },
      ],
      pins: {
        selected: this.svgMarker,
        notSelected: this.svgMarker,
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#666666',
        },
      ],
    }
  },
}
</script>

<style scoped>
h3 {
  /* font-family: "berthold-akzidenz-grotesk"; */
  /* font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 300; */
  font-size: 1.6rem;
  color: var(--main-text);
  /* color: var(--main-indigo-dye); */
  /* text-shadow: 2px 2px  var(--main-blue); */
}

p,
li {
  font-size: 1.1rem;
  color: var(--main-grey);
}

ul {
  padding: 0 0 0 0px;
}

a {
  text-decoration: none;
  color: var(--main);
}

.blues {
  color: var(--main-blue);
  font-weight: 700;
  text-decoration: none;
}


.sub-zelda {
  font-size: 1rem;
  font-weight: 700;
  text-decoration: underline;
  color: var(--main-blue);
  margin-top: 8px;
  position: relative;
  line-height: 1.9;
}

.pour {
  line-height: 1.9;
}

.icon-svg {
  width: 11px;
  display: inline-block;
  margin-right: 4px;
  margin-bottom: -2px;
}

.fax {
  width: 15px;
  /* margin-left:-4px; */
}

/* .b-grey {
  background-color: var(--main-fade-blue);
} */

.shro {
  padding-left: 30px;
}

.p-sub-txt {
  color: var(--main-grey);
  font-weight: 400;
  font-size: 1rem;
}

.enveloppe {
  width: 15px;
  /* margin-left:-4px; */
}

.inli {
  font-size: 1.1rem;
  display: inline;
  line-height: 1.9;
  text-decoration: none !important;
  /* font-family: proxima-nova, sans-serif; */
}

.fat {
  font-size: 1.1rem;
  display: inline;
  line-height: 1.9;
  font-weight: 600;
}

.fatt {
  font-weight: 600;
  color: var(--main-text);
}

.sect-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
  color: var(--main-grey);
  font-family: proxima-nova, sans-serif;
}

.fond-grid {
  background-color: #fff;
  /* background-color:red; */
  width: 100%;
  /* max-width:1860px;
  margin: 0 auto; */
  padding: 0px 0 0px;
  position: relative;
  margin: 0 auto;
}

.sub-back {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1860px;
  margin: 0 auto 1.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.2rem;
  /* background-color: red; */
}

.grid-luck {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0rem;
  width: 100%;
  position: relative;
  /* margin-bottom: 30px; */
  background-color: #fff;
  border-radius: 6px;
}

.push-down {
  /* margin-bottom: 30px; */
}

.left {
  width: 85%;
  max-width: 980px;
  margin: 0 auto;
  padding-bottom: 100px;
  /* cursor: zoom-in; */
  transition: 250ms;
  position: relative;
  overflow: hidden;
}

.frameit {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  position: relative;
}

.soothing {
  background-color: #fff;
  border-radius: 6px;
  /* grid-gxz/ap: 0rem; */
  /* width: 95%; */
}

.grunt {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.grid-horreur {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  max-width: 450px;
}

.addr {
  /* margin-bottom: 2rem; */
  /* background-color: #fff; */
  padding: 50px 30px 35px;
  /* border-radius: 6px; */
  /* box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
      0 0 0 1px rgb(10 10 10 / 2%); */
}

.fiou {
  margin-top: 15px;
}

.addr .pht {
  font-size: 1.1rem;
}

.addr a {
  font-weight: 700;
}

.bottom-button-sect {
  position: relative;
  float: left;
  margin-right: 0;
  top: 10px;
}

button {
  /* background-color: var(--main-blue); */
  background-color: var(--main-dark-2);
  padding: 10px 20px 12px;
  color: #fff;
  border: 2px solid var(--main-dark-2);
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 1px;
  cursor: pointer;
  transition: 250ms ease-in-out;
}

button:hover,
button:active,
button:focus {
  background-color: #333333;
  border-color: #333333;
  /* border-color: var(--main-text); */
  /* color: var(--main-blue); */
  /* color: #fff; */
  border-radius: 6px;
}

/* @media only screen and (max-width: 895px) {
  .sub-back {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 0rem;
  }

  .frameit {
      height: 100%;
  }

  .grid-luck {
      position: relative;
      grid-template-columns: 1fr;
      width: 100%;
      bottom: 0;
      grid-gap: 0;
  }

  .addr {
      box-shadow: none;
      border-radius: 0;
  }
} */

@media only screen and (max-width: 895px) {
  .fond-grid {
    /* background-color: #fff; */
    /* margin: 0 auto; */
    /* width: 90%; */
    padding: 0px 0 70px;
  }

  .sub-back {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
  }

  .grid-luck {
    margin: 0 auto 20px;
  }

  .soothing {
    border-radius: 6px;
    /* margin: 0 auto; */
    /* width: 95%; */
  }

  .left {
    padding-bottom: 15px;
  }

  .addr {
    padding: 20px 0px 20px 20px;
  }

  .bottom-button-sect {

    top: 0;
    right: 10px;
  }

  .sect-title {
    margin-bottom: 15px;
    /* font-size: 0.9rem; */
  }

  button {
    font-size: 1rem;
    padding: 7px 16px 7px;
    font-weight: 500;
    letter-spacing: 2px;
    /* padding: 10px 19px 11px; */
  }

  .right {
    padding: 0 20px;
  }

  .frameit {
    height: 400px;
    width: 100%;
    border-radius: 0;
  }
}

@media only screen and (max-width: 620px) {

  p,
  li {
    font-size: 0.9rem;
  }

  ul,
  ul li {
    list-style-type: none;
  }

  ul {
    padding-left: 19px;
  }

  .addr {
    padding: 35px 25px 0;
  }

  /* 
  .fond-grid {
      background-color: #fff;
  } */

  .left {
    width: 90%;
    padding-bottom: 0;
  }

  .grid-luck {
    grid-template-columns: 1fr;
    margin-top: 10px;
    margin-bottom: 0;
    width: 100%;
  }

  .soothing {
    width: 100%;
  }

  .addr {
    padding-left: 15px;
    padding-right: 15px;
  }

  .sect-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    padding-bottom: 2px;
    border-bottom: 2px solid var(--main-blue);
  }


  .p-sub-txt {
    color: var(--main-grey);
    font-weight: 400;
    font-size: 0.9rem;
  }


  .fat {
    font-size: 0.9rem;
    display: inline;
    line-height: 1.2;
    font-weight: 600;
  }

  .sub-zelda {
    font-size: 0.9rem;
  }


  .inli {
    font-size: 0.9rem;
    display: inline;
    line-height: 1.2;
    /* font-family: proxima-nova, sans-serif; */
  }



  /* .group-reach {
  padding: 0 5px;
} */
}

@media only screen and (max-width: 480px) {
  .grunt {
    grid-template-columns: 1fr;
  }

  .totally {
    margin-bottom: 15px;
  }
}
</style>