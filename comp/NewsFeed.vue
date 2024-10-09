<template>
    <el-row justify="center" align="middle">
        <el-col :span="20">
          <OneNew v-for="item in news" :key="item.id" :newsItem="item"/>
        </el-col>
    </el-row>
</template>
  
<script setup>
import { ref } from 'vue';
import OneNew from './OneNew.vue';


  export default {
  data() {
  return {
  articles: [],
}
},
  async mounted() {
  try {
  const response = await this.$axios.$get('/api/articles')
  const { data: news } = response
} catch (error) {
  console.error('Error fetching articles:', error)
}
},
}


// const { data: news } = await useFetch(`https://jsonplaceholder.typicode.com/posts`)
</script>