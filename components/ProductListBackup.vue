<template>
  <div>
    <div v-if="products.length > 0" class="switchView">
      <!-- <button
        :class="
          displayView === 'grid'
            ? 'switchViewButton switchViewButtonActive'
            : 'switchViewButton'
        "
        @click="setView('grid')"
      >
        Grid
      </button>
      <button
        :class="
          displayView === 'list'
            ? 'switchViewButton switchViewButtonActive'
            : 'switchViewButton'
        "
        @click="setView('list')"
      >
        List
      </button> -->
    </div>
    <ul v-if="products.length > 0" :class="displayView">
      <li v-for="product in products" :key="product._id" class="product">
        <NuxtLink :to="'/journal/' + product.slug.current" class="link">
          <img
            v-if="product.images[0]"
            :src="$urlFor(product.images[0]).size(300)"
            :alt="product.title"
            :width="displayView === 'grid' ? 300 : 50"
            class="image"
            loading="lazy"
          />

          <h3 class="title">{{ product.title }}</h3>
          <p class="subtitle">{{ product.subtitle }}</p>
          
          <!-- <p v-if="displayView === 'grid'" class="blurb">{{ product.blurb }}</p> -->
        </NuxtLink>

        <div class="price-and-button">
          <!-- <span class="price">{{
            getFormattedPrice(product.defaultProductVariant.price)
          }}</span> -->

          <!-- Easy integration with snipcart. See readme for more info -->
          <!-- <button
            :data-item-name="product.title"
            :data-item-price="product.defaultProductVariant.price"
            :data-item-id="product._id"
            :data-item-url="'/product/' + product.slug.current"
            :data-item-image="
              $urlFor(product.defaultProductVariant.images[0]).size(120)
            "
            type="button"
            class="snipcart-add-item"
          >
            Add to cart
          </button> -->
        </div>
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
.list li {
  padding: 1em;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  margin: 0;
  padding: 1em 0;
}

.switchView {
  display: flex;
  justify-content: flex-end;
}

.switchViewButtonActive {
  font-weight: 700;
}

.switchViewButton {
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  outline: none;
  text-transform: uppercase;
}

.list .link {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.list .link p {
  font-size: 0.8em;
  max-width: 30em;
}

.list .image {
  margin-right: 1em;
}

.list .price {
  margin-right: 1em;
}

.list .title {
  margin-right: 1em;
}

.list .snipcart-add-item {
  white-space: nowrap;
}

.list .price-and-button {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
}

.grid .title {
  font-weight: 400;
}

.grid li {
  display: flex;
  flex-direction: column;
}

.grid .link {
  display: flex;
  flex-direction: column;
}

.grid .image {
  display: block;
  max-width: 100%;
  width: auto;
  /* height: 13rem; */
  height: 100%;
  /* margin: 0 auto; */
  margin-bottom: 1rem;
  object-fit: contain;
}


.link {
  display: block;
  text-decoration: none;
}

.title {
  font-size: 1.2em;
}

ul {
  display: block;
  margin: 0;
  padding: 0;
}

.product {
  display: flex;
}

.grid .product {
  padding-bottom: 3rem;
  position: relative;
}

.no-products {
  text-align: center;
  font-size: 1.5em;
  padding: 1em;
}
</style>
