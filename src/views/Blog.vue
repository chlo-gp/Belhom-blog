<template>
  <body class="bg-secondary-300">
  <section class="text-left px-8">
    <h1 class="uppercase leading-none font-black text-primary-500 text-5xl mb-2">Le blog Belhom</h1>
  </section>
  <section class="pt-4 pb-mt-5">
    <div class="container m-auto">
      <div class="d-none d-md-block col-12">

        <h3 class="text-left text-4xl uppercase font-black mb-4">Catégories</h3></div>
      <div class="flex justify-center flex-wrap">
        <p class="reset p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3" @click="resetFilters">Toutes</p>
        <input type="radio" v-model="categoryFilter" value="focus" id="focus" class="invisible">
        <label for="focus" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">Focus</label>
        <input type="radio" v-model="categoryFilter" value="belhom" id="belhom" class=" invisible">

          <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2678 20.3175C15.901 20.3568 15.531 20.3568 15.1641 20.3175C14.3501 20.2311 12.8366 20.2628 12.0225 21.5031C10.8729 23.2515 12.9251 24.3759 12.9251 24.3759C12.9251 24.3759 13.7206 23.3477 15.5204 23.0351C15.6472 22.9943 15.7837 22.9943 15.9105 23.0351C17.7102 23.3477 18.508 24.3759 18.508 24.3759C18.508 24.3759 20.5601 23.2548 19.4117 21.5031C18.5954 20.2628 17.0808 20.2311 16.2678 20.3175Z" fill="#FAF4E4"/>
            <path d="M23.6766 1.84461C20.3656 0.0404836 16.2842 5.21291e-05 15.7149 5.21291e-05C13.4897 -0.0053049 11.2829 0.402267 9.20648 1.20207C11.4335 1.37145 15.3127 -0.484035 20.2301 1.13323C23.0199 2.05442 24.4153 4.26176 24.4525 6.56418C24.4896 8.96822 23.54 10.9953 23.54 10.9953C24.0602 8.31258 23.5947 5.99267 20.6399 4.27706C17.6851 2.56145 13.7392 3.9394 11.1472 4.61581C6.8833 5.72714 7.48103 5.21291e-05 7.48103 5.21291e-05C7.48103 5.21291e-05 6.48007 0.797757 6.51395 2.53195C5.73264 3.16137 0.400032 7.59792 0.592356 14.3424C0.784679 21.1108 6.47679 28.0082 14.5139 28.5797C13.219 27.9241 11.4193 26.874 10.9265 25.8916C10.1331 24.3071 8.32791 21.0518 8.164 19.4018C8.00008 17.7517 7.75312 15.5968 7.75312 15.5968C7.75312 15.5968 9.09392 19.6881 9.61079 20.3699C10.1277 21.0518 10.485 21.3163 10.7319 20.7874C10.9789 20.2585 11.5799 17.7517 15.7116 17.6862C19.8422 17.7517 20.4443 20.2596 20.6901 20.7874C20.936 21.3152 21.2923 21.0518 21.8124 20.3699C22.3325 19.6881 23.6701 15.5968 23.6701 15.5968C23.6701 15.5968 23.4242 17.7517 23.2603 19.4018C23.0964 21.0518 21.2933 24.3071 20.4967 25.8916C20.0105 26.863 18.2446 27.9012 16.953 28.5579C24.989 27.8323 30.4134 20.7874 30.5828 14.185C30.715 9.25343 27.9209 4.15249 23.6766 1.84461ZM6.6866 14.1347C6.17848 16.7344 7.59358 18.4904 7.59358 18.4904C5.92496 17.8992 5.57965 13.2223 6.41232 12.7907C7.59358 12.1809 7.89081 14.5117 7.89081 14.5117C7.89081 14.5117 6.96962 12.6814 6.6866 14.1347ZM12.7426 6.7576C6.26917 9.26545 6.8822 3.96672 6.8822 3.96672C6.8822 3.96672 6.81555 6.0189 9.70695 6.22871C12.5984 6.43851 16.1356 3.96672 19.4914 5.38948C19.4914 5.38948 17.4152 4.94801 12.7426 6.7576ZM23.8362 18.4904C23.8362 18.4904 25.2502 16.7344 24.7431 14.1347C24.4601 12.6814 23.5411 14.5117 23.5411 14.5117C23.5411 14.5117 23.8384 12.1809 25.0196 12.7907C25.8501 13.2223 25.5015 17.8992 23.8362 18.4904Z" fill="#FAF4E4"/>
          </svg>
        <label for="belhom" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">
          Belhom</label>
        <input type="radio" v-model="categoryFilter" value="infosActus" id="infosActus" class=" invisible">
        <label for="infosActus" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">Infos & Actus</label>
        <input type="radio" v-model="categoryFilter" value="conseils" id="conseils" class=" invisible">
        <label for="conseils" class="p-1 max-w-xs mb-3 mr-3 shadow-lg rounded-3xl px-4 py-3">Conseils & Astuces</label>
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
      categoryFilter: (this.$route.query.category || "focus, belhom, infosActus,conseils").split(','),
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
    this.fetchArticles()
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
          .get('/blog')
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