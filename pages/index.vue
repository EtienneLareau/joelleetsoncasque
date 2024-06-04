<template>
  <section>
    <HeroBan />
    <!-- <Hero /> -->
    <!-- <Intro /> -->
    <!-- <Team /> -->
    <!-- <CommentPrendreRDV /> -->
    <!-- <Contact /> -->
    <!-- <Map /> -->
    <!-- <Borne /> -->

  </section>
</template>

<script>
import home from '~/layouts/home.vue'
import localize from '~/utils/localize'
import Hero from '~/components/Hero'
import Intro from '~/components/blocks/Intro'
import Team from '~/components/blocks/Team'
import Contact from '~/components/blocks/Contact'
import Map from '~/components/blocks/Map.vue'
import CommentPrendreRDV from '~/components/blocks/CommentPrendreRDV.vue'
import Borne from '~/components/blocks/Borne.vue'
import HeroBan from '~/components/HeroBan.vue'

const query = `
  {
    "products": *[_type == "product"] | order(_createdAt desc) [0..2]
  }
`

export default {
  layout: 'home',
  components: {
    HeroBan,
    Hero,
    Intro,
    Team,
    Contact,
    Map,
    CommentPrendreRDV,
    Borne,
  },

  asyncData({ $sanity }) {
    return $sanity.fetch(query).then((data) => localize(data, ['en', 'fr']))
  },
}
</script>

<style scoped>
.mid-summer {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  color: grey;
  padding: 50px 0 0;
}

.mobile {
  display: none;
}

@media only screen and (max-width: 717px) {
  .desk {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
