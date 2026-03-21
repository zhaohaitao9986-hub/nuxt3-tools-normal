import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
    const routeList = [
        '/',
        '/tools/base64',
        '/tools/urlencode',
        '/tools/json',
        '/aboutus',
        '/contact'
    ]
    return routeList
})
