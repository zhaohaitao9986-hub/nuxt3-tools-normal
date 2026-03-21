<template>
    <div class="tool-body">
        <div class="tool-inner">
            <div class="fillter">
                <tool-nav :listData='pageData.toot_list' />
            </div>
            <div class="container">
                <h1>Base64 编码/解码工具</h1>
                <textarea id="inputText" placeholder="请输入转换的内容..." v-model="inputText"></textarea>
                <div class="button-all">
                    <button @click="encodeBase64()">编码 (Encode)</button>
                    <button @click="decodeBase64()">解码 (Decode)</button>
                    <button class="clear-button" @click="clearText()">清空内容</button>
                </div>
                <div class="result-all">
                    <div>编码后的结果：</div>
                    <textarea v-model="resultText"></textarea>
                    <div class="button-all">
                        <button v-clipboard:copy="resultText" v-clipboard:success="onCopy">复制</button>
                    </div>
                    <div class="copy-tips" v-if="isCopy">{{ copyTips }}</div>
                    <div class="error-tips">{{ errorText }}</div>
                </div>
            </div>
            <div class="sc">
                <tool-about :aboutData="aboutData" />
                <tool-how :howData="whatData" />
                <tool-how :howData="howData" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        pageData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            inputText: '',
            resultText: '',
            errorText: '',
            howData: this.pageData?.common_content?.how || {},
            whatData: this.pageData?.common_content?.what || {},
            aboutData: this.pageData?.common_content?.about || {},
            isCopy: false,
            copyTips: '复制成功'
        };
    },
    mounted() {
        console.log(this.pageData, '页面数据')
    },
    methods: {
        encodeBase64() {
            this.resultText = btoa(this.inputText);
        },
        decodeBase64() {
            try {
                this.resultText = atob(this.inputText);
                console.log(1111, this.inputText, this.resultText)
            } catch (e) {
                console.log(2222)
                this.errorText = '解码错误: 请输入有效的 Base64 编码文本';
            }
        },
        onCopy() {
            this.isCopy = true
            setTimeout(() => {
                this.isCopy = false
            },
                3000);
        },
        clearText() {
            this.inputText = ''
            this.resultText = ''
        }
    },

};
</script>
<style lang='scss' scoped>
.tool-body {
    width: 100%;
    background: #fafafa;
    min-height: calc(100vh - 120px);
    padding-top: 12px;
}

.tool-inner {
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 20px;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin-bottom: 30px;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

textarea {
    width: 100%;
    height: 250px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
    color: #444;
    transition: border-color 0.3s ease, background-color 0.3s ease;
    font-weight: 400;
    /* 添加过渡效果 */
}

textarea:focus {
    border-color: #007bff;
    /* 修改边框颜色 */
    // background-color: #e9f5ff;
    /* 修改背景颜色 */
    outline: none;
    /* 移除默认的焦点边框 */
}

.button-all {
    display: flex;
    align-items: center;

    button {
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 10px;
        margin-right: 12px;
    }

    button:hover {
        background-color: #0056b3;
    }

    .clear-button {
        background-color: #f7fafd;
        color: #4192E7;

        &:hover {
            background-color: #0056b3;
            color: white;
        }
    }

}

.result-all {
    div {
        margin-bottom: 8px;
    }

    .copy-tips {
        color: #007bff;
    }

    .error-tips {
        color: rgb(250, 67, 67);
    }
}

@media screen and (max-width:720px) {
    .tool-inner {
        max-width: 96%;

    }

}
</style>