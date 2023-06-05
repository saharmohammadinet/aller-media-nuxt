<template>
<div class="flex items-center bg-indigo-100 w-screen min-h-screen" style="font-family: 'Muli', sans-serif;">
  <div class="container ml-auto mr-auto flex flex-wrap items-start">
    <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
      <h1 class="text-3xl lg:text-4xl text-gray-700 font-extrabold">
        List of Universities Denmark
      </h1>
    </div>
    <div v-for="uni in props.universities" :key="uni" class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 class="text-white text-md font-bold leading-none">
              {{uni.name}}
            </h5>
          </div>
          <div class="flex items-center">
            <div class="text-small pt-3 text-white font-light">
             {{uni.country}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const props =  defineProps({
    universities: Array,
})
</script>