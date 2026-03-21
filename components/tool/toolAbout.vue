<template>
    <div class="tips">
        <h2 v-html="aboutData.title"></h2>
        <div class="content" v-html="aboutData.content">

        </div>
    </div>
</template>
<script>
export default {
    props: {
        aboutData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {

        };
    },
};
</script>
<style lang='scss' scoped>
.tips {
    width: 100%;
    background-color: #fff;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 12px;

    h2 {
        font-size: 24px;
        margin-bottom: 10px;
        color: #222;
    }

    .content {
        color: #222;
        line-height: 28px;
        font-size: 16px;
        margin: 10px 0;
    }

}

@media screen and (max-width: 720px) {
    .tips {
        margin-bottom: 32px;

        h2 {
            font-size: 18px;
            margin-bottom: 6px;
        }

    }
}
</style>