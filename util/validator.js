export default {
  //判断是不是数组
  isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]'
  },
  //判断是不是数组
  isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]'
  },
  //判断是不是字符串
  isString(param) {
    return Object.prototype.toString.call(param) === '[object String]'
  },
  //判断是不是数字
  isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]'
  },
  //判断是不是布尔
  isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]'
  },
  //判断是不是Undefined
  isUndefined(param) {
    return Object.prototype.toString.call(param) === '[object Undefined]'
  },
  //判断是不是Null
  isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]'
  },
  //判断是不是function
  isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]'
  },
  //判断是不是日期类型
  isDate(param) {
    return Object.prototype.toString.call(param) === '[object Date]'
  },
  //判断是不是正则
  isRegExp(param) {
    return Object.prototype.toString.call(param) === '[object RegExp]'
  },
  //判断各种数据类型是不是为空 空对象 空字符串 空数组等等
  isEmpty(param) {
    try {
      //判断是不是null 或者Undefined
      if (this.isNull(param) || this.isUndefined(param)) {
        return false
      }
      //判断数字是不是NAN
      if (this.isNumber(param)) {
        if (isNaN(param)) {
          return false
        } else {
          return true
        }
      }
      //判断是不是布尔 函数 日期 正则 是则返回true
      if (this.isBoolean(param) || this.isFunction(param) || this.isDate(param) || this.isRegExp(param)) {
        return true
      }
      //判断是不是是字符串，去空 长度为o返回false
      if (this.isString(param)) {
        if (param.trim().length == 0) {
          return false
        } else {
          return true
        }
      }
      //判断是否是数组，数组为空返回0
      if (this.isArray(param)) {
        if (param.length == 0) {
          return false
        } else {
          return true
        }
      }
      //判断是否是对象，判断是否是空对象是则返回false
      if (this.isObject(param)) {
        //判断对象属性个数
        if (Object.getOwnPropertyNames(param).length == 0) {
          return false
        } else {
          return true
        }
      }
    } catch (e) {
      console.log(e)
      return false
    }
  },
  /**
 *
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
  isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
  },
  /**
   *
   * @desc  判断是否为身份证号
   * @param  {String|Number} str
   * @return {Boolean}
   */
  isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  },
  /**
  *
  * @desc   判断是否为手机号
  * @param  {String|Number} str
  * @return {Boolean}
  */
  isPhone(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
  },

  /**
  *
  * @desc   判断是否安装插件
  * @param  {String} name
  * @return {Boolean}
  */
  hasPlugin(name) {
    name = name.toLowerCase()
    let plugins = window.navigator.plugins
    return plugins.some((item) => {
      return item.name.toLowerCase() == name
    })
  },
  /**
   * {String} name
   * 判断ua  navigator.userAgent
   */
  getPlatFrom(ua) {
    if (/(iPhone|iPad|iPod|iOS)/i.test(ua) || /(Android)/i.test(ua)) {
      console.log(ua, 'ua')
      return true
    } else {
      return false
    };
  },
  getExplorerText(userAgent) {
    if (userAgent.indexOf('Edg/') > -1 || userAgent.indexOf('Edge/') > -1) {
      return "Add to Edge - It's Free"
    } else if (userAgent.indexOf('Chrome') > -1) {
      return "Add to Chrome - It's Free"
    } else if (userAgent.indexOf('Safari') > -1) {
      return "Add to Safari - It's Free"
    } else if (userAgent.indexOf('Firefox') > -1) {
      return "Add to Firefox - It's Free"
    } else if (userAgent.indexOf('Opera') > -1) {
      return "Add to Opera - It's Free"
    }
  },
  getExplorerType(ua) {
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

  },
  /**
   * 首字母大写 
   * 
   */

  firstUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  },
  /**
   * 
   * 设置cookie
   */
  setCookie(name, val, min) {
    const now = new Date()
    now.setMinutes(now.getMinutes() + min)
    document.cookie = `${name}=${val};expires=${now.toUTCString()}`
  },
  /**
   * 获取设备宽度
   */
  getDeviceWidth() {
    return document.documentElement.clientWidth
  },
  /**
   * 获取设备宽度
   */
  getDeviceHeight() {
    return document.documentElement.clientHeight
  },

  /**
   * 获取navbar 类型
   */
  getNavBarType(pageType) {
    let navType = ''
    // pageType == 'channel_offers_po' || pageType == 'channel_offers_amazon' || 
    if (pageType == 'channel_offers_po_inner') {
      navType = 'product'
    } else if (pageType == 'channel_seasonal_ads') {
      navType = 'seasonal'
    } else if (pageType == 'guide_home' || pageType == 'guide_inner') {
      navType = 'guide'
    } else {
      navType = 'normal'
    }
    return navType
  }
}
