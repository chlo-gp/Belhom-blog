<template>
  <div class="flex items-center justify-between flex-wrap bg-secondary-300 p-6">
    <router-link to="/" class="block text-lg mt-4 lg:inline-block lg:mt-0  hover:text-white md:mr-4 font-black">
      <img src="@/assets/logo.png" class="w-56">
    </router-link>
    <div class="w-full block lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link to="/about" class="uppercase block mt-4 text-lg lg:inline-block lg:mt-0 font-black hover:text-white md:mr-8">
          Qui Sommes-nous
        </router-link>
        <router-link to="/blog" class="uppercase block mt-4 text-lg lg:inline-block lg:mt-0 font-black hover:text-white md:mr-8">
          Blog
        </router-link>
      </div>
      <div>
        <router-link to="/contact" class="inline-block text-lg px-5 py-3 leading-none border rounded bg-primary-500 text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
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
