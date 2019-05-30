/**
 * 安全读取链式属性
 *
 * @param   {function}  fn   自己构造，返回调用属性即可
 * @param   {*}  arg  指定参数，如果fn带传参，则会传入fn函数里
 *
 * @return  {*}       返回属性，或者默认值空
 */
function safeget(fn, arg = {}) {
  try {
    return fn(arg)
  } catch (error) {
    console.log('error: get from undefined: ', error);
    return ''
  }
}

module.exports = { safeget }