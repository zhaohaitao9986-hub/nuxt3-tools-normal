<template>
  <header id="header">
    <div class="header-inner">
      <a href="">
        <img :src="`/img/mnf5-logo.png`" alt="mnf5" loading='lazy'/>
      </a>
    </div>
  </header>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      logoUrl:window?.location?.origin || ""
    };
  },
};
</script>
<style lang='scss' scoped>
#header {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
}
.header-inner {
  max-width: 1000px;
  margin: 0 auto;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: left;
}
</style>