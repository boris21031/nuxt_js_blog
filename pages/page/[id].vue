<template>
  <OneNew v-if="selectedPost" :newsItem="selectedPost"/>
</template>

<script setup>
import OneNew from '~/comp/OneNew.vue';

const route = useRoute();

const { data: selectedPost } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
</script>