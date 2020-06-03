/**
 * 自定义日期格式化函数
 * @param {String} format "yyyy-MM-dd hh:mm:ss"
 */
export const dateFormat = format => {
  return date => {
    let $1;

    let result = format;

    let o = {
      'M+': date.getMonth() + 1, // 月份，从 0 开始算
      'd+': date.getDate(), // 日期
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分钟
      's+': date.getSeconds(), // 秒钟
      // 季度 quarter
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds() // 千秒
    };
    let key, value;

    if (/(y+)/.test(format)) {
      $1 = RegExp.$1;
      result = result.replace($1, String(date.getFullYear()).substr(4 - $1));
    }

    for (key in o) {
      // 如果没有指定该参数，则子字符串将延续到 stringvar 的最后。
      if (new RegExp('(' + key + ')').test(format)) {
        $1 = RegExp.$1;
        value = String(o[key]);
        value = $1.length === 1 ? value : ('00' + value).substr(value.length);
        result = result.replace($1, value);
      }
    }
    return result;
  };
};