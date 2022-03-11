// // interface第一个首字母一般是大写，有的会建议前面加I，注意分割符是;
// interface Person {
//   name: string;
//   age: number;
// }
//
// // 规定Jobs的类型是Person，里面的东西不能少要和Person对应，不能多一个少一个属性
// let Jobs: Person = {
//   name: 'Steve',
//   age: 20
// }


// // 希望不要完全匹配一个形状，利用可选属性
// interface Person {
//   name: string;
//   age?: number;
// }
//
// let Jobs: Person = {
//   name: 'Steve',
// };


interface Person {
  // 只读属性，只有对象创建的时候是可以赋值
  readonly id: number;
  name: string;
  age?: number;
}

let Jobs: Person = {
  id: 1234,
  name: 'Steve',
};

// 会报readOnly的错，有点类似const关键字，区别是readOnly用在属性，const用在变量
// Jobs.id = 1111
