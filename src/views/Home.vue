<template>
  <body class="bg-secondary-300 antialiased" x-data="{ isOpen : false}">

  <!-- hero -->
  <div class="hero bg-secondary-300 py-16">
    <!-- container -->
    <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <!-- hero wrapper -->
      <div class="py-8 hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <!-- hero text -->
        <div class="hero-text col-span-7">
          <h1 class="uppercase leading-none font-black text-4xl md:text-6xl md:text-5xl max-w-xl text-primary-500 text-left">Prêt à
            prendre soin de votre peau ?</h1>
          <p class="text-primary-500 text-2xl leading-relaxed font-thin text-left mt-8">Ici tu trouveras toutes les
            bonnes astuces beauté pour sublimer l’homme que tu es.</p>
           <div class="get-app flex space-x-5 mt-10 justify-center md:justify-start">
            <button class="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4">
              <div class="logo">
                <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="419.955" height="512"
                    viewBox="0 0 419.955 512">
                  <g transform="translate(-46.022)">
                    <path
                        d="M185.255,512c-76.2-.439-139.233-155.991-139.233-235.21,0-129.4,97.075-157.734,134.487-157.734,16.86,0,34.863,6.621,50.742,12.48,11.1,4.087,22.588,8.306,28.975,8.306,3.823,0,12.832-3.589,20.786-6.738,16.963-6.753,38.071-15.146,62.651-15.146h.146c18.354,0,74,4.028,107.461,54.272l7.837,11.777-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267,0,52.031,33.3,72.041,49.292,81.665,7.061,4.248,14.37,8.628,14.37,18.208,0,6.255-49.922,140.566-122.417,140.566-17.739,0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.8-8.862-8.086,0-18.311,3.823-29.136,7.881C221.5,505.73,204.752,512,185.753,512Z"/>
                    <path d="M351.343,0c1.888,68.076-46.8,115.3-95.425,112.342C247.9,58.015,304.54,0,351.343,0Z"/>
                  </g>
                </svg>
              </div>
              <div class="text">
                <p class=" text-xs text-gray-600" style="font-size: 0.5rem;">Télécharger sur</p>
                <p class=" text-xs font-semibold text-gray-900">Apple Store</p>
              </div>
            </button>
            <button class="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4">
              <div class="image">
                <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="436.057" height="469.847"
                    viewBox="0 0 436.057 469.847">
                  <g transform="translate(-16.896)">
                    <path
                        d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                        fill="#2196f3"/>
                    <path
                        d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                        fill="#4caf50"/>
                    <path
                        d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                        fill="#ffc107"/>
                    <path
                        d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                        fill="#f44336"/>
                  </g>
                </svg>
              </div>
              <div class="text">
                <p class="text-xs text-gray-600" style="font-size: 0.5rem;">Télécharger sur</p>
                <p class="text-xs font-semibold text-gray-900">Google play</p>
              </div>
            </button>
          </div> 
        </div>
        <!-- hero image -->
        <div class="hero-image col-span-5 relative top-0 left-0">
          <img src="@/assets/blob.svg" class="relative top-0" style="left:32px">
          <img src="@/assets/mokup.png" class="absolute left-0 top-0">
        </div>
      </div>
    </div>
  </div><!-- end hero -->

  <div class="container m-auto text-center">
    <h2 class="text-primary-500 font-black text-4xl leading-tight mb-5">Un homme oui,<br> mais qui prend soin de lui c’est mieux !</h2>
    <p class="text-2xl px-4 md:px-24">Et oui, contrairement à ce que certaines personnes peuvent dire,
      tu as le droit (et le devoir) en tant qu’homme de prendre soin de ta peau,
      de ton corps, de ta barbe, de tes cheveux.
      <br>
      Tout cela fait partie de ton capital santé et c’est très important de le préserver.</p>
  </div>

  <!-- FEATURE 1 -->
  <div class="md:py-16 py-5 container m-auto px-6">
    <div class="lg:flex justify-between items-center">
      <div class="lg:w-6/12 lg:p-0 p-7 text-left">
        <h2 class="text-4xl font-bold leading-tight mb-5 text-primary-500">Et non s’occuper de soi ce n’est pas
          dur…</h2>
        <p class="text-xl"> Tu crois que Thomas Pesquet est monté sur la lune sans être préparé ? Bien sûr que non !
          <br>
          Alors oui, au début ça peut faire peur, tous ces produits beauté, mais quand on veut, on peut monsieur !</p>
      </div>
      <div class="lg:w-5/12 w-8/12 m-auto my-8 md:my-0 order-2 bg-primary-500 rounded-lg">
        <img
            src="@/assets/homme-smile.jpg" class="img-home rounded-lg">
      </div>
    </div>
  </div>

  <!-- FEATURE 2 -->
  <div class="md:py-16 py-5 container m-auto px-6">
    <div class="flex flex-col lg:flex-row justify-between items-center">
      <div class="lg:w-5/12 w-8/12 m-auto my-8 md:my-0 order-last lg:order-first bg-primary-500 rounded-lg">
        <img
            src="@/assets/rasage.jpeg"
            alt=""
            class="img-home2 rounded-lg">
      </div>
      <div class="lg:w-6/12 order-2 pt-5 md:pt-0 text-right">
        <h2 class="text-4xl font-bold leading-tight mb-5 text-primary-500">Des produits éthiques pour un être
          magnifique.</h2>
        <p class="text-xl"> Si tu dois commencer par prendre soin de toi autant commencer avec des produits bons pour
          ton organisme n’est-ce pas?
          <br>
          Sur notre blog, tu trouveras uniquement des suggestions de marques éthiques et responsables sélectionnées par
          nos soins.</p>
      </div>
    </div>
  </div>

  <button class="bg-primary-500 text-lg text-secondary-300 font-bold py-4 px-16 rounded my-20">
    En savoir plus -->
  </button>

  <!-- NEWSLETTER -->
  <div class="flex flex-col bg-primary-500 text-secondary-300 py-20">
    <img src="@/assets/logo-beige.svg" class="w-20 m-auto mb-5">
    <h2 class="text-4xl font-thin mb-5">Notre newsletter</h2>
    <p class="text-xl font-thin px-8 md:px-40 pb-10">Tu es intéressé par les cosmétiques, les routines beauté et les produits naturels ?
      <br>
      Rejoins l'aventure, tu vas briller de mille feux avec Belhom !</p>
    <!-- Auth Card -->
    <div class="m-auto w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-secondary-300 rounded-lg shadow-md lg:shadow-lg">

      <form class="text-left mt-10" method="POST">
        <!-- Email Input -->
        <input id="name" type="text" name="name" placeholder="Ton prénom"
               class="block w-full py-3 px-5 my-8 rounded-lg
                    text-primary-500 bg-primary-500 appearance-none
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
               required/>
        <!-- Email Input -->
        <input id="email" type="email" name="email" placeholder="Ton email" autocomplete="email"
               class="block w-full py-3 px-5 mt-2 rounded-lg
                    text-gray-800 bg-primary-500 appearance-none
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
               required/>

        <!-- Auth Buttton -->
        <button type="submit"
                class="px-8 py-3 mt-10 bg-primary-500 rounded-lg
                    font-medium text-secondary-300 uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
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

  <!-- BLOG -->
  <section class="flex md:flex-row flex-col justify-around max-w-6xl m-auto py-16">
    <div class="text-left mx-5 md:m-auto">
      <h2 class="text-4xl font-black leading-tight mb-5 text-primary-500">N’oublie pas de découvrir nos derniers
        articles, conseils et autres actualités !</h2>
      <p class="text-xl mb-5">Besoin d’un conseil ? D’une suggestion de marque éthique ? Ou encore des astuces pour prendre soin de toi ?
        Nous sommes heureux de te dire que tu es au bon endroit bel homme !</p>
      <router-link to="/blog">
        <button class="bg-primary-500 text-lg text-secondary-300 font-bold py-4 px-16 rounded ">
          Voir le blog
        </button>
      </router-link>
    </div>
    <div class="md:ml-32 pt-8 mx-8 md:mx-0 md:pt-0 max-w-sm">
      <router-link :to="{ name: 'Article', params: { id: 1}}" class="">
        <div class="blog-card text-xl h-full bg-white shadow-xl rounded-3xl">
          <img src="@/assets/rasage.jpg" class="h-48 w-full object-cover overflow-hidden rounded-t-3xl">
          <div class="p-6 text-left">
            <small class="subheader uppercase text-sm">Conseils et astuces</small>
            <h4 class="leading-none text-2xl font-black text-primary-500 mb-0">
              COMMENT ÉVITER LES POILS INCARNÉS QUAND TU TE RASES ?</h4>
          </div>
        </div>
      </router-link>
    </div>
  </section>
  </body>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {Footer},
}
</script>
