import { defineNuxtPlugin } from '#app'
import { GaCodeList } from "~/config/data.js";
export default defineNuxtPlugin((nuxtApp) => {
    let gaAnalytics = null
    const url = useRequestURL();
    const gaId = GaCodeList.find(item => item.Domain === url.host)?.GAFourCode || '';
    if (process.client) {
        (function (i, s, o, g, r, a, m) {
            i.GoogleAnalyticsObject = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', `https://www.googletagmanager.com/gtag/js?id=${gaId}`, 'gtag');

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', gaId);
        gtag('event', 'conversion', {
            'send_to': 'AW-828812964/QUP1COzJvp0BEKTdmosD',
            'value': 1.0,
            'currency': 'USD',
            'aw_remarketing_only': true
        });
        gaAnalytics = (gaAnalyticsClick) => {
            gtag('event', gaAnalyticsClick, { 'nonInteraction': 1 })
        }
    }


    let data = {
        msg_type: 'post',
        "content": {
            "post": {
                "zh_cn": {
                    "title": "无gaid，请配置",
                    "content": [
                        [
                            {
                                "tag": "text",
                                "text": `${url.host}`,
                            }
                        ]
                    ]
                }
            }
        }
    }


    if (!gaId && import.meta.env.VITE_FEISHU && import.meta.env.VITE_API_BASE_URL && import.meta.env.VITE_API_BASE_URL.includes('beta-api.promowantee.com')) {
       
    }


    return {
        provide: {
            analytics: gaAnalytics,
        }
    }
})