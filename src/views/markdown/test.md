# 隐式转换规则

## 1. 字符串连接符时，number类型转成string类型

比如：只有number和string的+，才是字符串连接，其他都是算术运算。

```javascript
console.log(1+'true'); // '1true'
```

## 2. 算术运算符、关系运算符会转换成number类型

比如：

```js
//算术运算符
console.log(1+true); // 1 + Number(true) ===> 2
console.log(1+undefined); // 1 + Number(undefined) ===> 1+NaN = NaN
console.log(1+null); // 1 + Number(null) ===> 1 + 0 = 1


// 关系运算符
console.log('3' > 2); // Number(3) > 2 ===> true;
// 特别注意：当两边都是字符串的时候，是使用Unicode编码进行比较的，
// 从字符的左到右，一个字符一个字符进行比较

console.log('2' > '10') // true
// '2'.charCodeAt() ==> 50
// '10'.charCodeAt() ===> 49
// 2只有一个字符，10有两个字符，由于是一个字符一个字符进行的比较，
// 所以比较的是‘2’和‘1’的Unicode编码，即 50 > 49
```

## 3. 复杂类型转number类型的过程

> 1. 先使用复杂类型的`valueOf()`方法获取原始值，如果原始值不是`number`类型，则使用`toString()`方法转换成`string`。
> 
> 2. 然后将`string`转换成`number`

比如：

```js
console.log([1,2] === '1,2'); // true
/*
转换过程为：
[1,2].valueOf(); // [1,2] 不是number类型，所以需要调用toString()方法
[1,2].toString(); // 1,2

所以是相等的
*/
```

**比如一道很典型的面试题**：

如何使得如下语句成立：

```js
if(a == 1 && a == 2 && a ==3){
    console.log('如何声明变量a使得这句打印语句可以正常执行')
}
```

其中一种解法就是：`利用复杂类型转number`；

```js
let a = {
    i: 1;
    valueOf: function(){
        return this.i++
    }
}
```

[【收藏一篇典型的文章】](https://www.shuzhiduo.com/A/WpdKm1gnJV/)
