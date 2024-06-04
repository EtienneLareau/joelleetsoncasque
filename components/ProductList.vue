<template>
  <div>
    <ul v-if="products.length > 0" class="grid-journal">
      <li v-for="product in products" :key="product._id" class="product">
        <NuxtLink :to="'/journal/' + product.slug.current" class="link">
          <div class="img-wrap">
            <img
              v-if="product.images[0]"
              :src="$urlFor(product.images[0])"
              :alt="product.title"
              class="image"
              loading="lazy"
            />
          </div>
          <h3 class="title">{{ product.title }}</h3>
          <p class="subtitle">{{ product.subtitle }}</p>
          <!-- {{ product._createdAt.slice(0, 10) }} -->
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
    view: {
      type: String,
      default: 'grid',
    },
  },
  data() {
    return {
      displayView: this.view,
    }
  },
  methods: {
    setView(view) {
      this.displayView = view
    },
    // getFormattedPrice(price) {
    //   return new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    //   }).format(price)
    // },
  },
}
</script>

<style scoped>
  .grid-journal {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  ul {
    padding-left:0;
  }

  a {
    text-decoration: none;
  }

  h3 {
    font-size: 1.278rem;
    font-weight: 600;
    color: var(--main-blue);
  }

  p {
    font-size:1rem;
  }

  .img-wrap {
    width:100%;
    height:250px;
    margin-bottom:10px;
  }

  .link .image {
    object-fit: cover;
    width:100%;
    height:100%;
  }

  .title, .subtitle {
    /* color: var(--main-grey); */
  }

  @media only screen and (max-width: 820px) {
    .grid-journal {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  }
</style>