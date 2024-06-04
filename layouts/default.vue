<template>
  <div class="root">
    <!-- <NuxtLink :to="'/'" class="logo">
      <AppLogo />
    </NuxtLink> -->
    <!-- <SuperTopBanner /> -->
    <!-- <SwitchLang /> -->
    <!-- <Nav /> -->
    <!-- <SuperTopBanner /> -->
    <!-- <ul>
        
        <li><nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
        <li><nuxt-link :to="localePath('category')">{{ $t('category') }}</nuxt-link></li>
        <li><nuxt-link :to="localePath('vendor')">{{ $t('vendor') }}</nuxt-link></li>
      </ul> -->

    <!-- <div class="cart">
      <a href="#" class="snipcart-checkout">
        <div class="snipcart-summary">
          🛒
          <span class="snipcart-items-count" /> items
          <span class="snipcart-total-price" />
        </div>
      </a>
    </div> -->

    <main class="content">
      <nuxt />
    </main>

    <footer>
      <!-- <Foo /> -->
    </footer>
  </div>
</template>

<script>
import SuperTopBanner from '~/components/UI/SuperTopBanner.vue'
import Nav from '~/components/UI/Nav'
import SwitchLang from '~/components/UI/SwitchLang'
import Foo from '~/components/blocks/Foo'

export default {
  components: {
    Nav,
    SwitchLang,
    Foo,
    SuperTopBanner,
  },

  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://joelleetsoncasque.ca/' + this.$route.path
        }
      ]
    }
  }
}
</script>

<style scoped>
/* @media only screen and (min-width: 500px) {
.root {
  position: relative;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 10em auto;
  grid-template-rows: 5em minmax(calc(100vh - 12rem), auto) 5em;
  grid-template-areas:
    'header   header'
    'sidebar  content'
    'footer   footer';
}
} */

header {
  grid-area: header;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
}

section.sidebar {
  grid-area: sidebar;
  border-right: 1px solid #ddd;
}

section.content {
  grid-area: content;
  padding: 1rem;
}

@media only screen and (min-width: 500px) {
  section.content {
    padding: 0rem 1rem 1rem 0rem;
  }
}

@media only screen and (min-width: 500px) {
  .logo {
    font-size: 1.5em;
    margin-right: 0.25em;
  }
}

nav {
  margin-left: 50%;
}

nav>ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-weight: 700;
}

nav>ul>li {
  padding: 0.5em;
}

nav>ul>li>a {
  text-decoration: inherit;
}

.cart {
  padding: 0.5em;
  margin-left: auto;
  transition: all 0.1s ease-in;
  transform: scale(1);
}

.cart.pop {
  color: #3cae21;
  transform: scale(0.9);
}

nav :global(li) {
  display: block;
}

ul.categories {
  font-weight: 500;
  display: none;
  margin: 0 0 0.5rem 0;
  padding: 1rem;
}

.sub-categories {
  padding: 0;
  margin: 0;
  padding-left: 0.8rem;
}

.sub-categories li {
  display: block;
  margin: 0.5em;
  padding: 0;
}

@media only screen and (min-width: 500px) {
  ul.categories {
    display: block;
  }
}

.category {
  display: block;
  margin: 0 0 0.1rem 0;
  padding: 0;
}

.category .nuxt-link-active {
  font-weight: 700;
}

ul.categories :global(a) {
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
  nav {
    display: none;
  }
}
</style>
