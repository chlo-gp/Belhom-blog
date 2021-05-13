<template>
  <div class="about bg-secondary-300">
    <img :src="article.thumbnail" class="w-10/12 object-cover h-64 rounded m-auto mb-8">
    <div class="px-24">
      <h1 class="px-32 mb-8 text-primary-500 font-black text-3xl">
        {{ article.title }}
      </h1>
      <p class="text-left font-bold mb-5">Catégorie : <span class="font-normal">{{ article.category }}</span></p>
      <h2 class="mb-8">{{ article.lead }}</h2>
      <p class="px-12 text-justify">{{ article.content }}</p>
    </div>

    <!-- NEWSLETTER -->
    <div class="flex flex-col py-20">
      <p class="text-2xl px-40 py-10">Inscris-toi à notre newsletter pour ne rien louper !</p>
      <!-- Auth Card -->
      <div class="m-auto w-11/12 p-12 sm:w-10/12 md:w-8/12 lg:w-6/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-primary-500 rounded-lg shadow-md lg:shadow-lg">

        <form class="text-left mt-10" method="POST">
          <!-- Email Input -->
          <input id="name" type="text" name="name" placeholder="Ton prénom"
                 class="block w-full py-3 px-5 my-8 rounded-lg bg-secondary-300 appearance-none
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                 required/>
          <!-- Email Input -->
          <input id="email" type="email" name="email" placeholder="Ton email" autocomplete="email"
                 class="block w-full py-3 px-5 mt-2 rounded-lg bg-secondary-300 appearance-none
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                 required/>

          <!-- Auth Buttton -->
          <button type="submit"
                  class="px-8 py-3 mt-10 bg-secondary-300 rounded-lg font-medium focus:outline-none hover:bg-secondary-500
                  hover:shadow-none">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'Article',
  data() {
    return {
      article: [],
      errored: false
    }
  },
  created() {
    this.fetchArticle()
  },
  methods: {
    fetchArticle() {
      axios
          .get(`http://localhost:1501/blog/${this.$route.params.id}`)
          .then(response => (this.article = response.data))
          .catch(error => {
            console.log(error)
            this.errored = true
          })
    }
  }
}
</script>