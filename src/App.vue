<template>
  <div class="flex items-center justify-between flex-wrap bg-secondary-300 p-6">
    <router-link to="/" class="block text-lg mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 font-black">
      <img src="@/assets/logo.png" class="w-56">
    </router-link>

    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link to="/about" class="uppercase block mt-4 text-lg lg:inline-block lg:mt-0 font-black hover:text-white mr-8">
          Qui Sommes-nous
        </router-link>
        <router-link to="/blog" class="uppercase block mt-4 text-lg lg:inline-block lg:mt-0 font-black hover:text-white mr-8">
          Blog
        </router-link>
      </div>
      <div>
        <router-link to="/Contact" class="inline-block text-lg px-5 py-3 leading-none border rounded bg-primary-500 text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
          Contact
        </router-link>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
