<template>
    <div class="tool-card">
      <h2>{{ tool.name }}</h2>
      <p>{{ tool.description }}</p>
      <nuxt-link :to="tool.link">了解更多</nuxt-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tool: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .tool-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    margin: 10px;
    text-align: left;
  }
  
  .tool-card h2 {
    margin-top: 0;
  }
  
  .tool-card a {
    color: #007bff;
    text-decoration: none;
  }
  
  .tool-card a:hover {
    text-decoration: underline;
  }
  </style>
  