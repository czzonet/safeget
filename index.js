function main() {
  console.log('---start---\n');
  let a = {}
  safeget(_ => a.p)
  return
}

function safeget(fn, obj = {}) {
  try {
    // return obj[fn()]
    return fn()
  } catch (error) {
    console.log('get from undefined: ', error);
  }
}

main()