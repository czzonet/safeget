安全读取属性
=

js在链式调用属性的时候，如果出现undefined，后续调用就会直接报错。针对这个问题，封装了一个安全读取的函数，能够捕获错误不报错。  
表现为调用链任意位置为空都能够返回默认返回值。  

比较其他方法
--

一般简单的用||和&&就可以了，关键会越写越长。

缺点
--

也是特性吧，不会根据不同位置的为空的错误时返回不同的返回值。

使用
--

```js
let safegetModule = require('./safeget')
let value = safegetModule.safeget(()=>a.b.c)
let value2 = safegetModule.safegetArg(arg=>arg.b.c,{b:{c:'C'}})
```

注意点
--

注意闭包的词法作用域，由于对safeget传参一个匿名函数，该匿名函数的词法作用域还是本地的即创建时的。而不是safeget里面的。  
所以，提供了两个函数，一个简略一个完整，提供使用。