<template>
  <el-menu
    :default-active="activeIndex" 
    class="el-menu-demo"
    mode="horizontal"
    @select="changeActiveIndex"
  >
    <el-menu-item 
      v-for="item in listMenu"
      :key="item.id"
      :index='item.id'
      v-bind="item"
    >
      <template v-if="item.href">
        <nuxt-link :to="item.href"></nuxt-link>
      </template>
      <template v-else>
        {{ item.name }}
      </template>
    </el-menu-item>
  </el-menu>

  {{ activeIndex }}
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const activeIndex = ref('1');

const changeActiveIndex = (e) => {
  activeIndex.value = e;
}

const isAdmin = ref(false);

const listMenu = ref([
  {
    id: '1',
    name: 'Главная',
  },
  {
    id: '2',
    name: 'О нас'
  },
  {
    id: '3',
    name: 'Сообщество'
  },
  {
    id: '4',
    name: 'Вход/Выход',
    onClick: () => {
      isAdmin.value = !isAdmin.value
    }
  }
])

watch(isAdmin, (newValue) => {
  if (newValue && listMenu.value.find((e) => e.id === '5') === undefined) {
    listMenu.value.push({
      id: '5',
      name: "Админ панель"
    })
  } else if (!newValue && listMenu.value.find((e) => e.id === '5')) {
    const ind = listMenu.value.findIndex((e) => e.id === '5')
    if (ind !== -1) {
      listMenu.value.splice(ind, 1)
    }
  }
})
</script>