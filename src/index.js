// let button = document.createElement('button');
//
// button.innerHTML = 'hello';
// button.addEventListener('click', function () {
//     // console.log('click');
//     // es6草案中的语法 jsonp实现动态加载文件
//     // VUE懒加载 路由懒加载 import也是懒加载
//     import('./source.js').then(data => {
//         console.log(data);
//     })
// })
//
// document.body.appendChild(button);

import str from './source';

console.log(str);