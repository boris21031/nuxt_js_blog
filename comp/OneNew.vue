<template>
  <div class="news-feed news-item">
    <div><router-link :to="`page/${newsItem.id}`">НА ПОСТ</router-link></div>
    <div class="news-item__header">
      <small>{{ newsItem.category }}</small>
      <small>{{ newsItem.author }}</small>
    </div>
    <h3>{{ newsItem.title }}</h3>
    <p>{{ newsItem.content }}</p>
    <div class="news-meta">
      <span>{{ newsItem.views }}    показов</span><span> {{ newsItem.opens }} открытий</span>
      <p></p>
      <span>Лайков: {{ newsItem.likes }} </span><span> Комментариев: {{ newsItem.comments }}</span>
    </div>
    <div class="news-item__footer">
      <small>{{ newsItem.date }}</small>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
  .news-feed {
    padding: 20px;
    background-color: #1B1C20;
    color:#ffffff;
    border-radius: 8px;
  }
  
  .news-item {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #24262C;
    color:#ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .news-item h3 {
    margin: 0 0 10px;
  }
  
  .news-item p {
    margin: 0 0 5px;
  }
  
  .news-item__header {
    margin-bottom: 5px;

    display: inline-flex;
    gap: 10px;
  }

  .news-item__footer {
    margin-top: 10px;
  }

  .news-item__header, .news-item__footer {
    color: #888;
  }


  .news-meta span {
    margin-right: 15px;
    color:#595959;
    font-size: 14px;
  }
</style>