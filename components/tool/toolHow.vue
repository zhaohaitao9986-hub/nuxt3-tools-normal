<template>
    <div class="tips">
        <h2 v-html="howData.title"></h2>
        <div class="content">
            <ul>
                <li v-for="(item, index) in howData.content" :key="index" v-html="item">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        howData: {
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




    p {
        color: #222;
        line-height: 28px;
        font-size: 16px;
        margin: 10px 0;
    }

    ul {
        li {
            list-style: none;
            position: relative;
            margin: 16px 0;
            padding-left: 24px;
            color: #666;
            line-height: 24px;
            font-size: 14px;

            &::before {
                content: '';
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #93d2f3;
                position: absolute;
                left: 8px;
                top: 10px;
            }
        }

    }
}

@media screen and (max-width: 720px) {
    .tips {
        margin-bottom: 32px;

        h2 {
            font-size: 18px;
            margin-bottom: 6px;
        }

        ul {
            li {
                margin: 6px 0;
                font-size: 14px;
            }
        }

    }
}
</style>