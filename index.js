let safegetModule = require('./safeget')

function main() {
  console.log('---start---\n');
  let a = { b: { c: 'C' } }
  console.log('test1:', safegetModule.safeget(() => a.b.c));
  console.log('test2:', safegetModule.safegetArg(arg => arg.b.c));
  console.log('test3:', safegetModule.safegetArg(arg => arg.b.c, a));
  return
}



main()