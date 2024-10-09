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

const { data: news } = await useFetch(`https://jsonplaceholder.typicode.com/posts`)
</script>