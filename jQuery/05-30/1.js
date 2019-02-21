//面向对象（类）
var aQuery = function (selector, context) {
  //构造函数

}

aQuery.prototype = {
  //原型
  anthor: 'chenye',
  name: function () {
    return this.anthor;
  },
  age: function () {
  }
}

var a = new aQuery();
a.name();
