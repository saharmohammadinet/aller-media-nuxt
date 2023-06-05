<template>
<Posts :universities="getUniversities" />
</template>

<script setup lang="ts">

const getUniversities = await useFetchIDs('http://universities.hipolabs.com/search?country=denmark')

</script>


