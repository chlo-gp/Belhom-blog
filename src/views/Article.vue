<template>
  <div class="about bg-secondary-300">
    <img :src="require('@/assets/'+article.thumbnail)" class="w-10/12 object-cover h-64 rounded m-auto mb-8">
    <div class="px-24">
      <h1 class="px-32 mb-8 text-primary-500 font-black text-3xl">
        {{ article.title }}
      </h1>
      <p class="text-left font-bold mb-5">Catégorie : <span class="font-normal">{{ article.category }}</span></p>
      <h2 class="mb-8">{{ article.lead }}</h2>
      <p class="px-12 text-justify">{{ article.content }}</p>
    </div>
    <Newsletter/>
  </div>
  <Footer/>
</template>


<script>
import axios from 'axios';
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default {
  name: 'Article',
  components: {Footer, Newsletter},

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
          .get(`http://localhost:5000/api/blog/${this.$route.params.id}`)
          .then(response => (this.article = response.data))
          .catch(error => {
            console.log(error)
            this.errored = true
          })
    }
  }
}
</script>