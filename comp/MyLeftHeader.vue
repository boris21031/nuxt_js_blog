<template>
  <el-aside width="200px">
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" mode="vertical" @select="handleSelect">
      <el-menu-item index="1">
        <nuxt-link to="/">Популярное</nuxt-link>
      </el-menu-item>
      <el-menu-item index="2">
        <nuxt-link to="?news">Свежее</nuxt-link>
      </el-menu-item>
      <el-menu-item index="3">
        <nuxt-link to="/">Фрилансер</nuxt-link>
      </el-menu-item>
      <el-menu-item index="4">
        <nuxt-link to="/">Маркетолог</nuxt-link>
      </el-menu-item>
      <el-menu-item index="5">
        <nuxt-link to="/">Дизайнер</nuxt-link>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
  
<script setup>
import { ref } from 'vue'
const activeIndex = ref('1');
const handleSelect = (e) => {
  activeIndex.value = e;
}
</script>
  
<style scoped>
  .el-menu-vertical-demo {
    background-color: #1B1C20;
    color: #fff;
    height: 100%;
    overflow-y: auto;
    border-color: #36393E;
    margin-right: 10px;    
    padding: 10px;                     
  }
  
  .el-menu-vertical-demo .el-menu-item:hover {
    background-color: #36393E;
    color: #ffffff;
    border-radius: 10px;
    border-color: #36393E;
    padding: 10px; 
  }
  
  .el-menu-vertical-demo .el-menu-item.is-active {
    background-color: #36393E;
    border-radius: 10px;
    border-color: #36393E;
    margin-right: 10px;
    padding: 10px; 
  }
  
  .el-menu-vertical-demo .el-menu-item a {
    color: white;
    text-decoration: none;
  }

  .el-menu-vertical-demo .el-menu-item{
    margin-top: 10px;
  }
  .asdf {
    color: black;
    background-color: red;
  }
</style>