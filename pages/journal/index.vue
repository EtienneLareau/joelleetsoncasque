<template>
  <section class="main-wrap">
    <div class="wrap-title">
      <h1 class="title">Dernières nouvelles</h1>
    </div>
    
    <ProductList :products="products" />
  </section>
</template>

<script>
import localize from '~/utils/localize'

const query = `
  {
    "products": *[_type == "product"]
  }
`

export default {
  asyncData({ $sanity }) {
    return $sanity.fetch(query).then((data) => localize(data, ['en', 'es']))
  },
}
</script>

<style scoped>
.main-wrap {
  width:80%;
  margin: 50px auto;
}

.wrap-title {
  margin: 2rem 0;
}

.title {
  color: var(--main-grey);
}
</style>