<template>
  <el-header class="header-container">
    <el-row justify="center" align="middle">
      <el-col :span="9">
        <el-row justify="left" align="middle">
          <el-col :span="6" >LOGO</el-col>
        </el-row>
      </el-col>
      <el-col :span="9">
        <el-row justify="end" align="middle">
          <el-input
            v-model="searchQuery"
            placeholder="Поиск"
            class="search-input"
          />
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="center" align="middle" class="el-row-menu">
          <div>
            <el-button>Создать</el-button>
          </div>
          <div>0</div>
          <div>USER</div>
        </el-row>
      </el-col>
    </el-row>
  </el-header>
</template>

<script setup>
defineOptions({
  name: "MyFirstHeader"
})
const searchQuery = ref('');
</script>

<style scoped>
.header-container {
  width: 100%;
  background-color: #37358B; 
  padding: 10px 0;
}

.search-wrapper {
  width: 100%;
  max-width: 600px; /* Ограничение максимальной ширины для эстетики */
}

.search-input {
  width: 100%;
}

.search-input :deep(.el-input__wrapper) {
  background-color: #6477BA;
  border-color: #6477BA;
  box-shadow: 0 0 0 1px #6477BA inset;
}

.search-input :deep(.el-input__wrapper) .el-input__inner {
  color: white;
}

.search-input :deep(.el-input__wrapper) .el-input__inner::placeholder {
  color: rgb(255, 255, 255);
  opacity: 1;
}

.el-row-menu {
  gap: 10px; 
  padding-right: 5px
}
.header-container {
  color: white;
}
</style>