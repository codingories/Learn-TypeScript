let isDone: boolean = false;

let age: number = 20;
let binaryNumber: number = 0b1111;

let firstName: string = 'cake';
let message: string = `Hello, ${firstName}, age is ${age}`;

let u: undefined = undefined;
let n: null = null;

// undefined和null是所有类型的子类型，也就是说undefined类型可以赋值给
let num: number = undefined;


let notSure: any = 4;
notSure = 'maybe it is a string';
notSure = true;

notSure.myname;
notSure.getName();

// 代表numberOrString这个变量是number或者string
let numberOrString: number | string;
numberOrString = 'abc';
numberOrString = 123;
// 会有提示
// numberOrString = true

// 不允许数组中间出现number外的其它内容
let arrOfNumbers: number[] = [1, 2, 3, 4];

arrOfNumbers.push(5);
// 会有提示
// arrOfNumbers.push('str')


function test() {
  // arguments就是类数组，它有数组的一定的属性
  console.log(arguments);
  arguments.length;
  // 但是没有数组的方法
  // arguments.forEach
  // 也会报错，ts中把arguments这种称为IArguments
  // let arr: any[] = arguments
}

// 元组，对每一项起到了限定的作用
let user: [string, number] = ['cake', 20];

// 会报错
// user = ['egg', 2, true];
