// import jquery from 'jquery';
// import moment from 'moment';
//
// // 手动引入所需要的语言
// import 'moment/locale/zh-cn';
// let r = moment().startOf('hour').fromNow();
// console.log(r);

import React from 'react';
// import { render } from 'react-dom';
//
// render(<h1>jsx</h1>, window.root);

import calc from './test';
// import 在生产环境下 会自动去除掉没用的代码
// tree-shaking 把没有用的代码自动删除掉
console.log(calc.sum(1,2));

// es6 模块 会把结果放在default上
// let calc = require('./test');

// console.log(calc.default.sum(1,2));


// scope hosting 作用域提升
let a = 1;
let b = 2;
let c = 3;
let d = a + b + c; // 在webpack中会自动省略 一些可以简化的代码
console.log(d, '---------------------');
