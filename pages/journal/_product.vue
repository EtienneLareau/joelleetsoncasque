<template>
  <section :key="product._id">
    <!-- <ul class="categories">
                    <li>
                      <NuxtLink :to="'/vendor/' + product.vendor.slug.current" class="vendor">
                        <img :src="$urlFor(product.vendor.logo)" class="vendorLogo" />
                      </NuxtLink>
                      {{ product.vendor.title }}
                    </li>
                <li v-for="category in product.categories" :key="category._id">
                  <NuxtLink :to="'/category/' + category.slug.current">
                    {{ category.title }}
                  </NuxtLink>
                </li>
        </ul> -->
    <div class="lay">
      <div class="upper-title">
        <p class="section-title">Nouvelles de la Polyclinique</p>
        <p class="breadcrumbs">
          <span> </span>
            / <nuxt-link to="/journal">Journal</nuxt-link> /
            {{ product.title }}
        </p>
      </div>
      <!-- <hr> -->
      <h1 class="title">{{ product.title }}</h1>
      <p class="subtitle">{{ product.subtitle }}</p>
      {{ product._createdAt.slice(0, 10) }}
      <div class="container">
        <section>
          <div class="desc-container">
            <SanityContent v-if="product.body" class="body" :blocks="product.body" />
          </div>
        </section>
        <section>
          <div class="img-wrap">
            <ImageViewer :images="product.images" class="image" />
          </div>
        </section>





      </div>
    </div>
  </section>
</template>

<script>
import localize from '~/utils/localize'

const query = `
  *[_type == "product" && slug.current == $product][0] {
    ...,
    categories[]->,
    vendor->
  }
`


export default {
  name: 'Product',
  asyncData({ $sanity, params }) {
    return $sanity
      .fetch(query, params)
      .then((data) => ({ product: localize(data) }))
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(this.product.defaultProductVariant.price)
    },
  },
}
</script>

<style scoped>
.lay {
  max-width: 90%;
  margin: 50px auto 100px;
}

.lay *+* {
  /* margin-top: 20px; */
}

.container {
  /* height: 400px; */
  min-height: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

section {
  position: relative;
}

hr {
  background-color: var(--main-blue);
  border: 0;
  height: 1px;
  opacity: 0.5;
  margin: 30px 0;
}

.section-title {
  /* font-size: 2.2rem; */
  font-size: 1.278rem;
  text-transform: uppercase;
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-weight: 600;
  color: var(--main-grey);
  opacity: 0.5;

}

.breadcrumbs,
.breadcrumbs>a {
  font-size: 1rem;
  color: var(--main-grey);
  text-decoration: none;
}

.breadcrumbs>span>img {
  position: relative;
  top: 2px;
}

.img-wrap {
  width: 100%;
  max-width: 600px;
  max-height: 150px;
  margin-bottom: 10px;
  position: sticky;
  top: 100px;
  display: block;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 100%;

}

.blurb {
  font-size: 1.5em;
  margin: 1em 0;
}

.desc-container {}

.categories {
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0;
}

.categories :global(li) {
  display: block;
  margin-right: 0.5em;
  padding: 0;
  font-weight: 600;
}

.categories :global(a) {
  text-decoration: none;
  display: block;
  padding: 1em 0;
}

.categories :global(img) {
  display: block;
}

.vendor {
  display: inline-block;
}

.vendorLogo {
  display: inline-block;
  margin: 0 auto;
  max-height: 1.5em;
  max-width: 8em;
}

.body {
  margin: 5em 0;
  font-size: 1em;
  line-height: 1.3em;
  max-width: 40em;
}

@media only screen and (max-width:611px) {
  .lay {
    max-width: 90%;
    margin: 50px auto 100px;
  }
}
</style>
