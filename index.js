let { safeget } = require('./safeget')

function main() {
  console.log('---start---\n');
  let a = { b: { c: 'C' } }
  console.log('test1:', safeget(() => a.b.c));
  console.log('test2:', safeget(arg => arg.b.c));
  console.log('test3:', safeget(arg => arg.b.c, a));
  return
}



main()