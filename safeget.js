/**
 * 省略传参，fn定义时不传参直接使用父作用域的变量
 *
 * @param   {[type]}  fn  [fn description]
 *
 * @return  {[type]}      [return description]
 */
function safeget(fn) {
  try {
    return fn()
  } catch (error) {
    console.log('error: get from undefined: ', error);
    return ''
  }
}
/**
 * 指定参数，fn定义时要带参数并使用该参数
 *
 * @param   {[type]}  fn   [fn description]
 * @param   {[type]}  arg  [arg description]
 *
 * @return  {[type]}       [return description]
 */
function safegetArg(fn, arg = {}) {
  try {
    return fn(arg)
  } catch (error) {
    console.log('error: get from undefined: ', error);
    return ''
  }
}

module.exports = { safeget, safegetArg }