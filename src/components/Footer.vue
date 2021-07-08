<template>
  <div class="pt-16 lg:pt-72 flex flex-col items-center justify-center bg-secondary-500">
    <img src="@/assets/logo.png" class="max-w-xs" />
    <div class="my-6 text-md font-bold text-black flex flex-col md:items-center pt-3 ">
      <ul class="md:flex items-center">
        <router-link to="/blog" class="mr-2 md:mr-6 cursor-pointer pt-4 lg:py-0">
          Blog</router-link>
        <router-link to="/contact" class="mr-2 md:mr-6 cursor-pointer pt-4 lg:py-0">
          Contact</router-link>
        <router-link to="/mentions" class="mr-2 md:mr-6 cursor-pointer pt-4 lg:py-0">
          Mentions légales</router-link>
        <li class="cursor-pointer pt-4 lg:py-0">
          Politique de Confidentialité
        </li>
      </ul>
    </div>
    <div class="bg-secondary-500 pt-2 w-full">
      <div class="flex items-center p-5 m-auto border-t border-primary-500 text-gray-800 text-sm flex-col">
        <div class="mt-2 justify-center flex-row flex">
          <a href="/#" class="text-3xl mx-1">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="/#" class="text-3xl mx-1">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="/#" class="text-3xl mx-1">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <div class="text-sm text-color">
          <p>© 2021 Belhom. Tous droits réservés</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
</style>