import { GaCodeList } from "~/config/data.js";

export function useCustomerHead(pageData,) {
  const url = useRequestURL();
  const clarityId = GaCodeList.find(item => item.Domain === url.host)?.clarityId || ""
  let countryCode = pageData.info?.country_code ?? 'US'
  let viewportContent = pageData.isMobile
    ? 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    : 'width=device-width, initial-scale=1';

  const webPage = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": pageData.meta?.title,
        "description": pageData.meta?.desc
      }
    ]
  }
  let metaConfig = {
    title: pageData.meta?.title,
    htmlAttrs: {
      lang: pageData.meta?.lang
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: pageData.meta?.desc },
      { hid: 'keywords', name: 'keywords', content: pageData.meta?.keyword },
      { property: 'og:title', content: pageData.meta?.title },
      { property: 'og:description', content: pageData.meta?.desc },
      { property: 'og:url', content: url.origin + url.pathname },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'mnf5' },
      { name: 'viewport', content: viewportContent },
      { name: 'AdsBot-Google', content: 'noindex' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `https://mnf5.cn/favicon.ico` },
      { rel: 'canonical', href: url.origin + url.pathname },
      // { rel: 'prefetch', href: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' },
    ],
    script: [
      // {
      //   src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`,
      //   async: true,
      //   crossorigin: 'anonymous',
      // },
      {
        innerHTML: `${JSON.stringify(webPage)}`,
        type: 'application/ld+json',
        charset: 'utf-8',
        async: true
      },
    ]
  }

  // if (clarityId) {
  //   metaConfig.script.push({
  //     innerHTML: `
  //       (function(c,l,a,r,i,t,y){
  //         c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  //         t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  //         y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  //       })(window, document, "clarity", "script", "${clarityId}");
  //                 `,
  //     type: "text/javascript",
  //     charset: "utf-8",
  //     async: true,
  //   })
  // }


  useHead(metaConfig)

  if (process.env.NODE_ENV === 'production') {
    useHead({
      meta: [{ name: 'robots', content: 'index, follow' }]
    })
  }
  // if (url.search) {
  //   useHead({
  //     meta: [{ name: 'robots', content: 'noindex, nofollow' }]
  //   })
  // }
  if (process.env.NODE_ENV === 'production') {
    useHead({
      meta: [{ 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' }]
    })
  }
}