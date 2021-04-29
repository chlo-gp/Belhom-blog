<template>
  <body class="bg-secondary-300">
  <section class="text-left px-8">
    <h1 class="uppercase leading-none font-black text-primary-500 text-5xl mb-2">Le blog Belhom</h1>
    <h2 class="text-primary-300 text-3xl mb-5">Ensemble contre le gaspillage alimentaire<br/>Apprenez, comprenez,
      soyez
      le changement !</h2>
  </section>
  <section class="pt-4 pb-mt-5">
    <div class="container m-auto">
      <div class="d-none d-md-block col-12">
        <h3 class="text-left text-4xl uppercase font-black mb-4">Catégories</h3></div>
      <div class="flex justify-center flex-wrap">
        <p class="reset p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3" @click="resetFilters">Toutes</p>

        <input type="radio" v-model="categoryFilter" value="peau" id="peau" class=" invisible">
          <label for="peau" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">Peau</label>
        <input type="radio" v-model="categoryFilter" value="cheveux" id="cheveux" class=" invisible">
        <label for="cheveux" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">Cheveux</label>
        <input type="radio" v-model="categoryFilter" value="barbe" id="barbe" class=" invisible">
        <label for="barbe" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">
          Barbe</label>
        <div class="max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">
          <p class="">Dates de consommation</p>
        </div>
        <div class="max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">
          <p class="">Conservation</p>
        </div>
        <div class="max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">
          <p>Too Good To Go</p>
        </div>
      </div>
      <div class="w-1/2	rounded-3xl	bg-white py-4 text-xl my-3 mx-auto col-md-5 col-12">
        <div role="group" class="flex flex-wrap items-center">
          <div class="px-4 icone">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                 class="w-4	svg-inline--fa fa-search fa-w-16">
              <path fill="currentColor"
                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                    class=""></path>
            </svg>
          </div>
          <input v-model="searchUsers" type="text" placeholder="Chercher un article"
                 class="w-11/12 form-control focus:outline-none">
        </div>
      </div>
    </div>
  </section>
  <p v-if="!results.length">
    Il n'y a <strong>aucun</strong> article
  </p>
  <section class="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl m-auto py-4">

    <div v-for="article in searchedUsers"
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
  </body>
  <Footer/>
</template>

<script>
import axios from 'axios';
import Footer from "@/components/Footer";

export default {
  name: "Blog",
  components: {Footer},
  data() {
    return {
      results: [],
      errored: false,
      categoryFilter: (this.$route.query.category || "peau,cheveux,barbe").split(','),
      searchUsers: this.$route.query.search || '',
    }
  },
  computed: {
    searchedUsers() {
      return this.results
          .filter(article => this.categoryFilter.includes(article.category))
          .filter((article) => {
            return (article.title).match(new RegExp(this.searchUsers, 'i'))
          })
      /*.sort((a, b) => {
        if (!this.sortDirection) return 0;
        const modifier = this.sortDirection === 'desc' ? -1 : 1;
        return (a.age - b.age) * modifier;
      });*/
    }
  },

  watch: {
    categoryFilter() {
      this.updateQuery();
    },
    searchUsers() {
      this.updateQuery();
    }
  },

  created: function () {
    this.fetchUsers()
  },

  methods: {
    updateQuery() {
      const query = {};
      if (this.categoryFilter.length < 2) {
        query.category = this.categoryFilter.join('')
      }
      if (this.searchUsers) {
        query.search = this.searchUsers
      }
      this.$router.push({
        query
      })
    },
    resetFilters() {
      this.categoryFilter = ['peau', 'cheveux','barbe'];
      this.searchUsers = '';
    },
    fetchUsers() {
      axios
          .get('http://localhost:1501/blog')
          .then(response => (this.results.push.apply(this.results, response.data)))
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