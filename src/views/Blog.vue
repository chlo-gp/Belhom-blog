<template>
  <body class="bg-secondary-300">
  <section class="text-left px-8">
    <h1 class="uppercase leading-none font-black text-primary-500 text-3xl md:text-5xl mb-2">Le blog Belhom</h1>
  </section>
  <section class="pt-4 pb-mt-5">
    <div class="container m-auto">
      <div class="d-none d-md-block col-12">

        <h3 class="text-left text-2xl md:text-4xl uppercase font-black mb-4">Catégories</h3></div>
      <div class="flex justify-center flex-wrap">
        <p class="reset p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3" @click="resetFilters">Toutes</p>
        <input type="radio" v-model="categoryFilter" value="focus" id="focus" class="invisible">
        <label for="focus" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">Focus</label>
        <input type="radio" v-model="categoryFilter" value="belhom" id="belhom" class=" invisible">
        <label for="belhom" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">
          Belhom</label>
        <input type="radio" v-model="categoryFilter" value="infosActus" id="infosActus" class=" invisible">
        <label for="infosActus" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">Infos & Actus</label>
        <input type="radio" v-model="categoryFilter" value="conseils" id="conseils" class=" invisible">
        <label for="conseils" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">Conseils & Astuces</label>
      </div>
      <div class="md:w-1/2 w-11/12 rounded-3xl	bg-white py-4 text-xl my-3 mx-auto col-md-5 col-12">
        <div role="group" class="flex items-center">
          <div class="px-4 icone">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                 class="w-4	svg-inline--fa fa-search fa-w-16">
              <path fill="currentColor"
                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                    class=""></path>
            </svg>
          </div>
          <input v-model="searchArticles" type="text" placeholder="Chercher un article"
                 class="w-11/12 form-control focus:outline-none">
        </div>
      </div>
    </div>
  </section>
  <p v-if="!results.length">
    Il n'y a <strong>aucun</strong> article
  </p>
  <section class="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl m-auto py-4">

    <div v-for="article in searchedArticles"
         :key="article.title" class="my-3 col-md-4 col-12">
      <router-link :to="{ name: 'Article', params: { id: article.id }}" class="">
        <div class="blog-card text-xl h-full bg-white shadow-xl rounded-3xl">
          <img :src="article.thumbnail" class="h-48 w-full object-cover overflow-hidden rounded-t-3xl">
          <div class="p-6 text-left">
            <small class="subheader uppercase text-sm">{{ article.category }}</small>
            <h4 class="leading-none text-2xl font-black text-primary-500 mb-0">{{ article.title }}</h4>
            <small>4 hours ago | Laura Mattei</small>
          </div>
        </div>
      </router-link>
    </div>
  </section>
  <Newsletter/>
  </body>
  <Footer/>
</template>

<script>
import axios from 'axios';
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default {
  name: "Blog",
  components: {Footer, Newsletter},
  data() {
    return {
      results: [],
      errored: false,
      categoryFilter: (this.$route.query.category || "focus,belhom,infosActus,conseils").split(','),
      searchArticles: this.$route.query.search || '',
    }
  },
  computed: {
    searchedArticles() {
      return this.results
          .filter(article => this.categoryFilter.includes(article.category))
          .filter((article) => {
            return (article.title).match(new RegExp(this.searchArticles, 'i'))
          })
    }
  },

  watch: {
    categoryFilter() {
      this.updateQuery();
    },
    searchArticles() {
      this.updateQuery();
    }
  },

  created: function () {
    this.fetchArticles();
    console.log(searchArticles)
  },

  methods: {
    updateQuery() {
      const query = {};
      if (this.categoryFilter.length < 2) {
        query.category = this.categoryFilter.join('')
      }
      if (this.searchArticles) {
        query.search = this.searchArticles
      }
      this.$router.push({
        query
      })
    },
    resetFilters() {
      this.categoryFilter = ['focus', 'belhom', 'infosActus', 'conseils'];
      this.searchArticles = '';
    },
    fetchArticles() {
      axios
          .get('https://belhom-website.herokuapp.com/blog')
          .then(response => (this.results.push.apply(this.results, [response.data])))
          .catch(error => {
            console.log(error)
            this.errored = true
          })
    },
  }
}
</script>

<style scoped>
</style>