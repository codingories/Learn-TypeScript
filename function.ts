// function add(x: number, y: number): number {
//   return x + y;
// }
//
// let result1 = add(2, 3);
//
// // 会报错，参数不能多或者少
// // let result2 = add(2, 3, 4);


// ？实现可选参数
// function add(x: number, y?: number, z?: number): number {
//   if (typeof z === 'number') {
//     return x + y + z;
//   } else {
//     return x + y;
//   }
// }

// let result = add(2, 3, 5);

// 这里add的类型是推断出来
const add = function (x: number, y: number, z:number = 10) : number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}

let result = add(2, 3, 5);

//  => 用来声明函数类型返回值，现在这个是一个函数的类型
const add2: (x: number, y:number, z?:number) => number = add;

let str = "123"

str = 123
