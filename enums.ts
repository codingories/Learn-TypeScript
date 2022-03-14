// enum Direction {
//   // 手动赋值之后，接下去的会依次递增
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT'
// }
//
// // 比如这个值是服务器取到的
// const value = 'UP';
// // 进行比较然后执行一段逻辑
// if (value === Direction.Up) {
//   console.log('go Up!');
// }

// 通过const实现常量枚举，提升性能，因为不会把枚举编译成js，直接把枚举的结果取出
// 注意并不是把所有的枚举都可以使用常量枚举，枚举的值有两种类型，一种叫做常量值const number，一种叫做计算值compute number
const enum Direction {
  // 手动赋值之后，接下去的会依次递增
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

// 比如这个值是服务器取到的
const value = 'UP';
// 进行比较然后执行一段逻辑
if (value === Direction.Up) {
  console.log('go Up!');
}
