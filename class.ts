// class Animal {
//   public name: string;
//
//   constructor(name: string) {
//     this.name = name;
//   }
//
//   run() {
//     return `${this.name} is running`;
//   }
// }
//
// const snake = new Animal('lily');
// console.log(snake.name);
// snake.name = 'lucy';
// console.log(snake.name);


// console.log(snake.run());

// class Dog extends Animal {
//   bark() {
//     return `${this.name} is barking`;
//   }
// }
//
//
// const Snoopy = new Dog('Snoopy');
//
// console.log(Snoopy.run());
// console.log(Snoopy.bark());

// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//     console.log(this.name);
//   }
//   // 重载掉父类的方法
//   run() {
//     return 'Meow, ' + super.run();
//   }
// }
//
// const Tom = new Cat('Tom');
// console.log(Tom.run());

//
// class Animal {
//   readonly name: string;
//
//   constructor(name: string) {
//     this.name = name;
//   }
//
//   run() {
//     return `${this.name} is running`;
//   }
// }
//
// const snake = new Animal('lily');
// // 这个时候就会有警告，name是私有的
// console.log(snake.name);
// // readonly会报错
// snake.name = 'lucy';
// console.log(snake.name);
//
// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//     // 子类也无法访问,protected的话子类就可以访问了,protected类似private，不同的是子类可以访问
//     console.log(this.name);
//   }
//   // 重载掉父类的方法
//   run() {
//     return 'Meow, ' + super.run();
//   }
// }

// class Animal {
//   name: string;
//   // static定义静态属性
//   static categories: string[] = ['mammal', 'bird'];
//
//   // static 定义一个静态方法
//   static isAnimal(a) {
//     return a instanceof Animal;
//   }
//
//   constructor(name: string) {
//     this.name = name;
//   }
//
//   run() {
//     return `${this.name} is running`;
//   }
// }
//
// console.log(Animal.categories);
//
// const snake = new Animal('lily');
// console.log(Animal.isAnimal(snake));


// Car和Cellphone里面都有switchRadio的方法，但是为Car和Cellphone找一个共同的父类进行继承感觉不太合适
// 这个时候就可以把这个特性提取成interface
// class Car {
//   switchRadio() {
//
//   }
// }
//
// class Cellphone {
//   switchRadio() {
//
//   }
// }

// 使用interface告诉手机和汽车你们都需要去实现一些功能
// 通过interface完成了逻辑和功能的提取，以及验证
interface Radio {
  switchRadio(): void;
}

// 新建一个检查电池容量的接口只有手机有，汽车没有
interface Battery {
  checkBatteryStatus();
}

class Car implements Radio {
  switchRadio() {

  }
}


// class Cellphone implements Radio, Battery {
//   switchRadio() {
//
//   }
//
//   checkBatteryStatus() {
//
//   }
// }

// 接口的继承
interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}

class Cellphone implements RadioWithBattery {
  switchRadio(): void {
  }

  checkBatteryStatus() {
  }
}

