import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

function component() {
    var element = document.createElement('div');
    element.setAttribute("id","root")
    // var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);
    return element;
}
  
  document.body.appendChild(component());

  // if (module.hot) {
  //   module.hot.accept('./print.js', function() {
  //     console.log('Accepting the updated printMe module!');
  //     printMe();
  //   })
  // }

console.log([1,2,3].map(n => n+1))



ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);