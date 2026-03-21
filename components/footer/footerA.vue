<template>
  <footer id="footer">
    <div class="footer-inner">
      <span>© CopyRight 2022-2024, MNF5.CN , Inc.All Rights Reserved.</span>
      <span>豫ICP备2022000507号</span>
    </div>
  </footer>
</template>
<script>
export default {
  props: {},
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
#footer {
  border-top: 1px solid #e8e8e8;
}
.footer-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  span {
    padding-right: 10px;
    color: #c0c1c4;
    font-size: 14px;

  }
}
</style>