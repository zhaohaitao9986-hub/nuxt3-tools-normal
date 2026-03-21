export default async function (page_type = '', resStatusCode = 200, countryCode = 'US', cookie = '') {
    const url = useRequestURL()
    const headers = useRequestHeaders()
    let isHaveMkt = useCookie('isHaveMkt')?.value || ''
    let mktsrc = isHaveMkt ? `?mktsrc=${isHaveMkt}` : ''
    let _cpsrc = useCookie('_cpsrc')?.value || ''
    let cpsrc = _cpsrc ? `?${_cpsrc}` : ''
    let login_info = useCookie('login_info')?.value || {}
    let all_uri = url.href?.replace(url.origin, '') + mktsrc + cpsrc
    const firstQuestionMarkIndex = all_uri?.indexOf('?')
    const request_uri = all_uri?.slice(0, firstQuestionMarkIndex + 1) +
        all_uri?.slice(firstQuestionMarkIndex + 1).replace(/\?/g, '&');
    const res = await useNuxtApp().$fetch(`${import.meta.env.VITE_API_BASE_URL}/visitLog?page_type=${page_type}`, {
        headers: {
            'track-user-agent': headers['user-agent'] || navigator.userAgent,
            'track-request-uri': request_uri,
            'track-host': url.host,
            'track-request-scheme': window?.location?.protocol,
            'track-cookie': document?.cookie,
            'track-referer': headers.referer || document.referrer,
            'track-country-code': countryCode,
            'track-http-code': resStatusCode,
        },
        method: 'GET',
    })
    if (res.data.RETENTION_U_ID) {
        const retUidCookie = useCookie('RETENTION_U_ID', {
            path: '/',
            domain: 'promowantee.com',
            maxAge: 60 * 60 * 24 * 365
        })
        retUidCookie.value = res.data.RETENTION_U_ID
    }
    if (res.data.U_ID) {
        const uidCookie = useCookie('U_ID', {
            path: '/',
            domain: 'promowantee.com',
        })
        uidCookie.value = res.data.U_ID
    }
}