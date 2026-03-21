export const useExplorerType = (ua) => {
    if (ua) {
        // 获取用户代理字符串
        var userAgent = ua.toLowerCase();

        // 判断流行浏览器的简称
        var browserName = "Unknown"

        if (userAgent.indexOf("opera") !== -1 || userAgent.indexOf("opr") !== -1) {
            browserName = "Opera"
        } else if (userAgent.indexOf("edge") !== -1 || userAgent.indexOf("edg") !== -1) {
            browserName = "Edge"
        } else if (userAgent.indexOf("chrome") !== -1) {
            browserName = "Chrome"
        } else if (userAgent.indexOf("safari") !== -1) {
            browserName = "Safari"
        } else if (userAgent.indexOf("firefox") !== -1) {
            browserName = "Firefox"
        } else if (userAgent.indexOf("edge") !== -1) {
            browserName = "Edge"
        } else if (userAgent.indexOf("brave") !== -1) {
            browserName = "Brave"
        }
        return browserName
    } else {
        return 'Chrome'
    }
}