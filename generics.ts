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
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// 这样就能正确的获得返回的类型
const result = swap(['string', 123]);
