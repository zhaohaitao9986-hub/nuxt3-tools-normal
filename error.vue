<script setup>


const props = defineProps({
  error: Object
})

// console.log("error~~~~~~~~~",props.error)
const {message, stack, url, statusCode} = props.error
const requestUrl = useRequestURL()
const headers = useRequestHeaders();
// console.log("requestUrl",requestUrl)

let data = {
  msg_type: 'post',
  "content": {
    "post": {
      "zh_cn": {
        "title": "nuxt3项目报错通知",
        "content": [
          [
            {
              "tag": "text",
              "text": `
                  url: ${requestUrl?.origin}${url},
                  statusCode:: ${statusCode}
                  message: ${message},
                  user-agent: ${headers['user-agent']}
                    `,
            }
          ]
        ]
      }
    }
  }
}

if (process.server) {
  if (props.error?.statusCode === 500 && import.meta.env.VITE_FEISHU) {
   
  }
}


</script>

<template>
  <div>
    <h1>Server Error</h1>
    <div>{{message}}</div>
  </div>
</template>