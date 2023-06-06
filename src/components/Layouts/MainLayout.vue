<template>
  <header class="dark:black bg-black sticky top-0">
    <div class="container mx-auto">
      <nav class="flex items-center justify-center sticky top-0">
        <div class="text-xl text-white dark:text-white font-bold text-center font-serif p-5">
          TextileTrove
        </div>
      </nav>
    </div>
  </header>

  <main class="container mx-auto">
    <div v-if="flashSuccess" class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-400 bg-green-50 dark:bg-green-900 p-2">
      {{ flashSuccess }}
    </div>
  </main>
  <Index class="text-white font-serif"></Index>
  <footer class="bg-gray-900 text-white pt-12 pb-8 px-4">
    <div class="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
      <a href="/" class="block mr-4 lg:w-1/3 md:w-1/2 sm:w-full">
        <img src="../../assets/images/textiletrove-removebg-preview.png" class="ml-4 lg:ml-0 sm:w-72 lg:w-60 md:w-64" alt="logo" />
      </a>
      <div class="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
        <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
          <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Product</li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Features</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Integrations</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Pricing</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">FAQ</a></li>
        </ul>
        <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
          <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Company</li>
          <li>
            <a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Privacy</a>
          </li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Terms of Service</a></li>
        </ul>
        <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
          <li class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Developers</li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Developer API</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Documentation</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Guides</a></li>
        </ul>
        <div class="text-gray-700 flex flex-col w-full">
          <div class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Follow Us</div>
          <div class="flex pl-4 justify-start mt-2">
            <a class="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
              <svg viewBox="0 0 24 24" class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" /></svg>
            </a>
            <a class="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
              <!-- <img src="../../images/svgs/icons8-instagram.svg" alt="Instagram Logo" /> -->
              <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-instagram fill-current pt-0.5 w-5 h-5" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg>
            </a>
            <a class="block flex items-center text-gray-300 hover:text-white no-underline" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-whatsapp fill-current w-5 h-5 pt-0.5" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /> </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-4 mt-4 pt-6 text-gray-600 border-t border-gray-800 text-center"> © 2023 PKS. All rights reserved.</div>
  </footer>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/inertia-vue3'
import { computed } from 'vue'
import Index from '../Pages/Index/Index.vue'

</script>

<style scoped>
.success {
    background-color: green;
    color: white;
}
</style>
