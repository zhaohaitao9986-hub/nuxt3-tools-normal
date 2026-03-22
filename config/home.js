export const homeData = [
    {
        pageType: 'home',
        title: '首页',
        routePath: '/',
        pageData: {
            cn: {
                meta: {
                    "title": "在线工具大全 - JSON格式化, Base64编码, URL解码等",
                    "desc": "集合多种免费在线工具，包括JSON格式化、Base64编码/解码、URL编码/解码、文本转换等，帮助开发者和用户快速完成日常任务。",
                    "keyword": "在线工具, JSON格式化工具, Base64编码, URL编码, 文本转换, 在线计算器, 在线生成器, 在线编码解码工具, 免费工具",
                    "lang": "zh-CN",
                    "type": "website"
                },
                info: {
                    country_code: 'CN'
                },
                common_content: {
                    tools: [
                        { name: 'Base64编码/解码', description: '快速进行Base64编码和解码。', link: '/tools/base64' },
                        { name: 'URL编码/解码', description: '处理和转换URL编码的数据。', link: '/tools/urlencode' },
                        { name: 'JSON格式化工具', description: '轻松美化和验证您的JSON代码。', link: '/tools/json' },
                    ],
                    testimonials: [
                        { name: 'Alice', quote: '这个平台让我在日常开发中节省了大量时间！' },
                        { name: 'Bob', quote: '简单易用，功能丰富，非常推荐！' },
                        { name: 'Charlie', quote: '所有工具都在一个地方，太方便了！' }
                    ]
                },
                nav_list: [

                ],
            },
            en: {

            }
        },
        component: { type: 'homeTest', key: 'home', params: {} },
    },
]
