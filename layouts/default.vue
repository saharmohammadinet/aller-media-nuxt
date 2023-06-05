<template>
  <header>
     <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-white
          bg-slate-800
        "
      >
       <div>
          <a href="#">
            Aller Media
          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="toggleMenu"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       <div :class="[{ 'hidden': hiddenClass }, ' w-full md:flex md:items-center md:w-auto' ]" id="menu">
          <ul
            class="
              pt-4
              text-base text-white
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
               <NuxtLink to="/"  class="md:p-4 py-2 block hover:text-purple-400">
                  Home page
                </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"  class="md:p-4 py-2 block hover:text-purple-400">
                  About Us
                </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/posts"  class="md:p-4 py-2 block hover:text-purple-400">
                 Posts
              </NuxtLink>
            </li>
          </ul>
        </div>
    </nav>
  </header>
  <div class="md:container">
  <slot />
  </div>
  

</template>
<script setup lang="ts">

const hiddenClass = ref(true)
const toggleMenu = () => {
    hiddenClass.value = !hiddenClass.value
}
</script>