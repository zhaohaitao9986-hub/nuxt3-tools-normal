<template>
  <div class="page">
    <header-a />
    <div class="component-box">
      <component :pageData="pageData" :is="currentComponents.type" />
    </div>
    <footer-a />
  </div>
</template>
<script setup>
import { dataPages } from "../config/data.js";
import { GlobalStore } from "@/store";
const useGlobalStore = GlobalStore();
const headers = useRequestHeaders();

const route = useRoute();
const url = useRequestURL();
const event = useRequestEvent();

const currentComponents =
  dataPages.find((item) => item.routePath === url.pathname)?.component || {};
const pageData = dataPages.find((item) => item.routePath === url.pathname)?.pageData?.cn || {};

if (process.server) {
  // 自定义script、meta
  useCustomerHead(pageData)
}
</script>
<style lang='scss' scoped>
.page {
  width: 100%;
}
</style>