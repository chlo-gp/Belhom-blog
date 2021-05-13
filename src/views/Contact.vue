<template>
  <div class="about bg-secondary-300">
    <div class="flex flex-col py-20">
      <p class="text-4xl text-primary-500 px-8 md:px-40 py-10 font-bold">Une question ?</p>
      <!-- Auth Card -->
      <div class="m-auto w-10/12 p-12 px-6 py-10 sm:px-10 sm:py-6
            bg-primary-500 rounded-lg shadow-md lg:shadow-lg">

        <form class="text-left mt-10" method="POST">
          <!-- Email Input -->
          <input id="name" type="text" name="name" placeholder="Ton prénom"
                 class="block w-full py-3 px-5 my-8 rounded-lg bg-secondary-300 appearance-none
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                 required/>
          <!-- Email Input -->
          <input id="email" type="email" name="email" placeholder="Ton email" autocomplete="email"
                 class="block mb-5 w-full py-3 px-5 mt-2 rounded-lg bg-secondary-300 appearance-none
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                 required/>

          <textarea id="message" name="message" rows="5" class="block w-full py-3 px-2 mt-2 rounded-lg bg-secondary-300 appearance-none
                   text-gray-500 focus:text-gray-500 focus:outline-none focus:border-gray-200" >Ton message
          </textarea>

          <!-- Auth Buttton -->
          <button type="submit"
                  class="px-8 py-3 mt-10 bg-secondary-300 rounded-lg font-medium focus:outline-none hover:bg-secondary-500
                  hover:shadow-none">
            Envoyer
          </button>
        </form>
      </div>
      <div class="flex justify-center py-8">
        <i class="fab fa-facebook-f text-5xl px-5"></i>
        <i class="fab fa-instagram text-5xl px-5"></i>
        <i class="fab fa-linkedin text-5xl px-5"></i>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer"

export default {
  name: "Contact",
  components: {Footer},

}
</script>

<style scoped>

</style>