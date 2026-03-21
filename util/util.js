
export const setCookie =(name,val,min)=>{
    const now= new Date()
    now.setMinutes(now.getMinutes()+min)
    document.cookie =`${name}=${val};expires=${now.toUTCString()}`
}
export const getCookie = (name) => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
      }
  }
  return null;
};

export function debounce(fn, delay) {

    let time = null
    let that = this
    function _debounce() {
        if (time !== null) {
            clearTimeout(time)
        }

        time = setTimeout(() => {
            fn()
        }, delay)
    }

    return _debounce
}
// 滚动条滚动位置及动画函数封装
/**
 * @param {*} number 距离顶部的距离(Number类型)
 * @param {*} time  滚动用时（Number类型）
 * @returns
 */
 export const scrollToAnimationFn = (number = 0, time) => {
    if (!time) {
      document.body.scrollTop = document.documentElement.scrollTop = number
      return number
    }
    const spacingTime = 40 // 设置循环的间隔时间  值越小消耗性能越高
    let spacingInex = time / spacingTime // 计算循环的次数
    let nowTop = document.body.scrollTop || document.documentElement.scrollTop // 获取当前滚动条位置
    const everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
    const scrollTimer = setInterval(() => {
      if (spacingInex > 0) {
        spacingInex--
        scrollToAnimationFn((nowTop += everTop))
      } else {
        clearInterval(scrollTimer) // 清除计时器
      }
    }, spacingTime)
  }

  /**
   * 平滑定位函数
   * @param {*} number
   */
export const scrollTo = (number)=> {
  window.scrollTo({
    top: number,
    behavior: 'smooth' // 平滑滚动
  })
}
export const media =  ()=> {
  window.advBidxc = window.advBidxc || {};
  window.advBidxc.customerId = "8CUBD14NP";
  window.advBidxc.domain = window.location.hostname;
  window.advBidxc.version = 5.1;
  window.advBidxc.startTime = new Date().getTime();
  function loadScript(tagSrc) {
      var scriptTag = document.createElement('script'),
          placeTag = document.getElementsByTagName("script")[0];
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = tagSrc;
      placeTag.parentNode.insertBefore(scriptTag, placeTag);
  }
  var mnSrc = 'https://hbx.media.net/bidexchange.js?cid=' +
      window.advBidxc.customerId +
      "&version=" + window.advBidxc.version + '&dn=' +
      window.advBidxc.domain;
  loadScript(mnSrc);
}

/**
 *
 * @param {*} ua //客户端信息,或者请求头信息
 * @returns
 */
export const getClientStatus = (ua)=>{
  if (!ua) {
    return {
      isPc:'',
      isTablet:'',
      isMobile:'',
      isPhone:'',
      clientValue:''
    }
  }
  let isWindowsPhone = /(?:Windows Phone)/.test(ua),
      isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
      isAndroid = /(?:Android)/.test(ua),
      isFireFox = /(?:Firefox)/.test(ua),
      isTablet =/(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
      isPhone = /(?:iPhone)/.test(ua) && !isTablet,
      isPc = !isPhone && !isAndroid && !isTablet,
      isMobile = isPhone || isAndroid

  let clientValue = isMobile ? 'mobile' : isTablet ? 'tablet' : 'pc'
  return {
    isPc,
    isTablet,
    isMobile,
    isPhone,
    clientValue
  }
}
/**
 *
 * @param {*} ipAddress
 * @returns
 * 判断IPv4或IPv6最后一位是奇数还是偶数
 */
export const isLastDigitEven = (ipAddress) =>{
  // 判断是否是IPv4地址
  const isIPv4 = ipAddress.indexOf('.') !== -1

  // 判断是否是IPv6地址
  const isIPv6 = ipAddress.indexOf(':') !== -1

  if (isIPv4) {
    const lastDigit = parseInt(ipAddress.split('.').pop(), 10);
    return lastDigit % 2 === 0 ? 'even' : 'odd'
  } else if (isIPv6) {
    // 获取IPv6地址的最后一组
    const groups = ipAddress.split(':')
    const lastGroup = groups[groups.length - 1]

    // 将IPv6最后一组转换为十进制数字
    const lastDigit = parseInt(lastGroup, 16)
    return lastDigit % 2 === 0 ? 'even' : 'odd'
  } else {
    // 不是合法的IPv4或IPv6地址
    return ''
  }
}
