export const toolsCodeData = [
    {
        pageType: 'tool-base64',
        title: '编码工具',
        routePath: '/tools/base64',
        pageData: {
            cn: {
                meta: {
                    "title": "Base64编码/解码工具 - 在线免费转换器",
                    "desc": "使用我们的在线Base64编码/解码工具，轻松将数据转换为Base64格式，或将Base64编码的数据解码回原始格式。",
                    "keyword": "Base64编码、Base64解码、Base64转换、在线工具、免费Base64编码器、Base64解码器、在线编码、在线解码、开发工具",
                    "lang": "zh-CN",
                    "type": "website"
                },
                info: {
                    country_code: 'CN'
                },
                common_content: {
                    about:{
                        title:'什么是Base64编码？',
                        content:'Base64编码是一种将二进制数据转换为ASCII字符串的编码方法。它通常用于在传输二进制数据时，确保数据在传输过程中不被损坏或丢失。Base64编码将每三个字节（24位）的数据转换为四个可打印的ASCII字符，从而使数据在传输时能够兼容各种系统。',
                    },
                    faq:{

                    },
                    how:{
                        title:'如何使用Base64编码/解码工具',
                        content:[
                            `<strong>输入文本</strong>：在下面的文本框中输入你想要编码或解码的文本内容。`,
                            `<strong>编码为Base64</strong>：点击“编码为Base64”按钮，将输入的文本转换为Base64编码格式。`,
                            `<strong>解码Base64</strong>：点击“解码Base64”按钮，将Base64编码的文本还原为原始文本。`,
                            `<strong>查看结果</strong>：工具会在下方显示编码或解码的结果，你可以复制并使用这些结果。`

                        ]
                    },
                    what:{
                        title:'常见用途',
                        content:[
                            `<strong>电子邮件附件</strong>：Base64用于将二进制数据（如图像、音频文件）转换为文本，以便通过电子邮件传输。`,
                            `<strong>数据URI</strong>：在HTML或CSS中使用Base64编码的数据URI嵌入图像或字体。`,
                            `<strong>Web API</strong>：用于将二进制数据嵌入JSON对象中，便于在Web API中传输。`
                        ]
                    }
                },
                nav_list: [

                ],
                toot_list:[
                    {
                        href:'/tools/base64',
                        text:'Base64编码/解码',
                    },
                    {
                        href:'/tools/urlencode',
                        text:'URL编码/解码',
                    },
                    {
                        href:'/tools/json',
                        text:'JSON格式化',
                    },
                ],
            },
            en: {

            }
        },
        component: { type: 'tool-base64', key: 'toolBase64', params: {} },
    },
    {
        pageType: 'tool-urlencode',
        title: '编码工具',
        routePath: '/tools/urlencode',
        pageData: {
            cn: {
                meta: {
                    "title": "免费在线URL编码/解码工具 - 快速、安全的URL编码器",
                    "desc": "使用我们的在线URL编码/解码工具，轻松将URL中特殊字符转换为百分号编码格式，或将已编码的URL还原为可读文本。适合开发者、营销人员和普通用户。",
                    "keyword": "URL编码, URL解码, 在线工具, 百分号编码, URL编码器, URL解码器, Web开发, 在线URL工具",
                    "lang": "zh-CN",
                    "type": "website"
                },
                info: {
                    country_code: 'CN'
                },
                common_content: {
                    about:{
                        title:'什么是URL编码？',
                        content:'URL编码（也称为百分号编码）是一种编码方式，将URL中特殊字符转换为百分号加两位十六进制数字的格式。这样可以确保URL在传输过程中不被破坏，尤其是在使用非ASCII字符的情况下。URL解码则是将这些编码字符转换回原始格式。',
                    },
                    faq:{

                    },
                    how:{
                        title:'如何使用URL编码/解码工具',
                        content:[
                            `<strong>输入URL或文本</strong>：在输入框中粘贴或输入你想要编码或解码的URL或文本。`,
                            `<strong>选择操作</strong>：点击“编码URL”按钮，将输入的内容转换为URL编码格式；或者点击“解码URL”按钮，将URL编码的文本还原为普通文本。`,
                            `<strong>查看结果</strong>：编码或解码后的结果会显示在下方的结果框中，你可以复制并使用这些结果。`,
                        ]
                    },
                    what:{
                        title:'常见用途',
                        content:[
                            `将空格、特殊符号和非ASCII字符转换为可以在URL中安全传输的格式。`,
                            `解码含有百分号编码的URL，以便在浏览器或服务器上正确显示。`,
                        ]
                    }
                },
                nav_list: [

                ],
                toot_list:[
                    {
                        href:'/tools/base64',
                        text:'Base64编码/解码',
                    },
                    {
                        href:'/tools/urlencode',
                        text:'URL编码/解码',
                    },
                    {
                        href:'/tools/json',
                        text:'JSON格式化',
                    },
                ],
            },
            en: {

            }
        },
        component: { type: 'tool-url', key: 'toolUrlencode', params: {} },
    },
    {
        pageType: 'tool-json',
        title: '编码工具',
        routePath: '/tools/json',
        pageData: {
            cn: {
                meta: {
                    "title": "免费在线JSON格式化工具 - 快速美化和验证JSON代码",
                    "desc": "使用我们的免费在线JSON格式化工具，轻松美化、压缩和验证JSON代码。适合开发者和数据分析人员，提供快速的JSON美化和错误检查服务。",
                    "keyword": "JSON格式化, JSON美化, JSON验证, 在线JSON工具, JSON压缩, JSON格式工具, JSON校验, JSON格式检查",
                    "lang": "zh-CN",
                    "type": "website"
                },
                info: {
                    country_code: 'CN'
                },
                common_content: {
                    about:{
                        title:'什么是JSON格式化？',
                        content:'JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，广泛用于API、配置文件和数据传输。JSON格式化是一种对原始JSON数据进行美化，使其更易于阅读和理解的过程。这个工具可以帮助你快速格式化、压缩或验证JSON数据。',
                    },
                    faq:{

                    },
                    how:{
                        title:'如何使用URL编码/解码工具',
                        content:[
                            `<strong>输入JSON数据</strong>：将你的JSON代码粘贴到输入框中，或者上传一个JSON文件。`,
                            `<strong>选择操作</strong>：点击“格式化JSON”按钮，立即美化代码；点击“压缩JSON”按钮，将JSON压缩为一行；点击“验证JSON”按钮，检查语法错误。`,
                            `<strong>查看结果</strong>：操作后的结果会显示在下方的结果框中，你可以复制并使用这些格式化或验证后的数据。`,
                        ]
                    },
                    what:{
                        title:'常见用途',
                        content:[
                            `美化复杂的JSON数据，使其更具可读性，便于开发和调试。`,
                            `检查和修复JSON代码中的语法错误，确保数据有效。`,
                            `压缩JSON数据以减少文件大小，用于传输和存储。`
                        ]
                    }
                },
                nav_list: [

                ],
                toot_list:[
                    {
                        href:'/tools/base64',
                        text:'Base64编码/解码',
                    },
                    {
                        href:'/tools/urlencode',
                        text:'URL编码/解码',
                    },
                    {
                        href:'/tools/json',
                        text:'JSON格式化',
                    },
                ],
            },
            en: {

            }
        },
        component: { type: 'tool-json', key: 'toolJson', params: {} },
    },
]
