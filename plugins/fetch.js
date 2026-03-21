export default defineNuxtPlugin((nuxtApp) => {
    const url = useRequestURL()
    const headers = useRequestHeaders()
    let params = new URLSearchParams(url.search);
    let isHaveMkt = useCookie('isHaveMkt')?.value || ''
    isHaveMkt ? params.append("mktsrc", isHaveMkt) : ""
    let _cpsrc = useCookie('_cpsrc')?.value || ''
    let paramsCp = new URLSearchParams(_cpsrc);
    let request_uri = `${url.pathname}`
    if (params.size || paramsCp.size) {
        request_uri = `${url.pathname}?${params}&${paramsCp}`
    }
    // 拦截 $fetch 的请求
    const originalFetch = $fetch
    nuxtApp.provide('fetch', async (request, options = {}) => {
      // 设置全局请求头
      options.headers = {
        ...options.headers,
        'track-request-uri': request_uri,
        'track-host': url.host,
        'track-referer': headers.referer || document?.referrer,
      }
      return originalFetch(request, options)
    })
  })