// type aliases 类型别名
// 使用类型别名来抽取类型
// type PlusType = (x: number, y: number) => number
//
// function sum(x: number, y: number): number {
//   return x + y;
// }
//
// const sum2: PlusType = sum;


// 联合类型的场景下使用类型别名
type NameResolver = () => string
type NameOrResolver = string | NameResolver

function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

// type assertion，类型断言，使用场景告诉编译器类型，让它不要发出错误

// function getLength(input: string | number): number {
//   const str = input as String;
//   if (str.length) {
//     return str.length;
//   } else {
//     const number = input as Number;
//     return number.toString().length;
//   }
// }

function getLength(input: string | number): number {
  // 断言的另外一种简单的写法
  if ((<string>input).length) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}
