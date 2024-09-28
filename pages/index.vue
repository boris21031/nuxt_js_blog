<template>
  <el-container class="el-row-full">
    <el-header class="header">
      <HeaderComponent/>
    </el-header>
    <el-container class="el-row-full">
      <LeftHeaderComponent/>
      <el-main>
        <div class="asdf" id="asd" att>
        </div>
        <NewsFeed />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import HeaderComponent from '../comp/MyFirstHeader.vue';
import LeftHeaderComponent from '../comp/MyLeftHeader.vue';
import NewsFeed from '../comp/NewsFeed.vue';
</script>

<style>
.main-container {
  border-radius: 15px;
  overflow: hidden; /* Чтобы избежать обрезки содержимого по углам */
  background-color: #262044; /* Добавьте фон для визуализации */
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
}

#__nuxt {
  height: 100%;
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.full-h {
  height: 100%;
}
</style>

<style scoped>
.el-row-full {
  height: 100%;
}

.header {
  padding: 0;
}

.asdf {
  color: "red";
  background-color: white;
}
</style>
