<template>
  <div class="tool-nav">
    <a
      :href="item.href"
      v-for="(item, index) in listData"
      :key="index"
      v-html="item.text"
      :class="{ 'active-item': path === item.href }"
    >
    </a>
  </div>
</template>
<script>
export default {
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      path: this.$route.path,
    };
  },
};
</script>
<style lang='scss' scoped>
.tool-nav {
  padding: 6px;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  a {
    padding: 6px 12px;
    margin: 0 12px 12px 0;
    font-size: 14px;
    color: #222;
    background: #fff;
    border: 1px solid #e4e6eb;
    border-radius: 6px;
    &:hover {
      color: #fff;
      background: #007bff;
      border: 1px solid #007bff;
    }
  }
  .active-item {
    color: #fff;
    background: #007bff;
    border: 1px solid #007bff;
  }
}
</style>