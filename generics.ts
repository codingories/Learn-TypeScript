// function echo(arg) {
//   return arg
// }
//
// // 这样子是返回值的类型是any
// const result = echo(123)


// function echo(arg: number): number {
//   return arg;
// }
//
// // 这样子是返回值的类型是number
// const result = echo(123);
//
// // 那如果传的是boolean等其它的值呢，如何去解决这个问题，就需要用到泛型

// // 第一个泛型，T是一个占位符，可以看作一个神秘的变量，现在是什么类型不知道，使用的时候才能知道，
// // T可以用其它任意字符去代替，但是通常习惯用T
// function echo<T>(arg: T): T {
//   return arg;
// }
//
// const str: string = 'str';
// // 这个时候就能知道result是String类型的
// const result = echo(str);
//
// // 这个时候也能知道result2返回结果是String，通过类型推论
// const result2 = echo('abc');
// // 这个时候就会报错:TS2322: Type 'boolean' is not assignable to type 'string'.
// const result3: string = echo(true)

// 泛型在元组交换中的使用
// function swap<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]];
// }
//
// // 这样就能正确的获得返回的类型
// const result = swap(['string', 123]);

// function echoWithArr<T>(arg: T[]): T[] {
//   // 在我们函数内部使用泛型变量，事先不知道它里面是什么类型的变量，所以会报TS2339: Property 'length' does not exist on type 'T'.
//   // 泛型T不一定包含属性length，需要写成T[]，但是这种方案并不好，因为String也有length,但是这么写传入string就会报错
//   console.log(arg.length);
//   return arg;
// }

// const arrs = echoWithArr([1, 2, 3]);

// interface IWithLength {
//   length: number
// }
//
// // 使用extends关键字约束泛型，意思是说哥们你穿入的类型必须要有length这个属性
// function echoWithLength<T extends IWithLength>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }
//
// const str = echoWithLength('str');
// const obj = echoWithLength({length: 10});
// const arr2 = echoWithLength([1, 2, 3]);

// 这样写会报错，toFixed只能作用域数字
// class Queue {
//   private data = [];
//
//   push(item) {
//     return this.data.push(item);
//   }
//
//   pop() {
//     return this.data.shift();
//   }
// }
//
// const queue = new Queue();
// queue.push(1);
// queue.push('str');
// console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed());

// // 解决办法一。修改假定只能push进去数字
// class Queue {
//   private data = [];
//
//   push(item: number) {
//     return this.data.push(item);
//   }
//
//   pop(): number {
//     return this.data.shift();
//   }
// }
//
// const queue = new Queue();
// queue.push(1);
// // 这个时候就会报错
// queue.push('str');
// console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed());

// // 上面这种方法限制了输入值为数字，但是有一个问题如果我想要传入一个字符串呢？
// // 实际上我们想要实现的效果是无论推入什么类型的数据到队列，推出的类型和对应推入队列的数据一样
// // 创建一个泛型类，类名称后面加尖括号
// class Queue<T> {
//   private data = [];
//
//   push(item: T) {
//     return this.data.push(item);
//   }
//
//   pop(): T {
//     return this.data.shift();
//   }
// }
//
// // 实例化类的时候需要加上类型
// const queue = new Queue<number>();
// queue.push(1);
// console.log(queue.pop().toFixed());
//
// const queue2 = new Queue<string>();
// queue2.push('str');
// console.log(queue2.pop().length);

// // 这样子我们就可以动态指定类型
// interface KeyPair<T, U> {
//   key: T
//   value: U
// }
//
// let kp1: KeyPair<number, string> = {key: 123, value: 'str'};
// let kp2: KeyPair<string, number> = {key: 'test', value: 123};

// // 下面两种数组的类型写法，效果一样
// let arr: number[] = [1, 2, 3];
// // 利用Array这个interface传入number实现一样的效果
// let arrTwo: Array<number> = [1, 2, 3];

// // 描述函数
// interface IPlus {
//   (a: number, b: number): number
// }
//
// // interface描述函数
// function plus(a: number, b: number): number {
//   return a + b;
// }
//
// const a: IPlus = plus;

// interface结合泛型T，可以更灵活
interface IPlus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number): number {
  return a + b;
}

function connect(a: string, b: string): string {
  return a + b;
}

const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
