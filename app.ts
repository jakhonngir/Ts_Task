// let fullName: string = 'johon'
// let num: number = 124
// let bool: boolean = true

// console.log(fullName);
// console.log(num);
// console.log(bool);

// const oylik: number = 1000
// const bonus: number = 200

// const jamiOylik = oylik + bonus
// console.log(jamiOylik);

// function getName(fullName:string, lastName:string, age:number) {
//     console.log(`hello ${fullName} ${lastName} your age: ${age}`);

// }

// getName('Jahongir', 'Xolmirzayev', 17)

// function logger(firstName: string): string {
//     return ` ${firstName}`
// }
// const pernum1 = logger('Jahongir');
// console.log(pernum1);

// const pernum = {
//     firstName: 'Jahongir'
// }

// function GetName(data: {firstName: string}) {
//     return  `hello ${data.firstName}`
// }

// const pernum2 = GetName(pernum)
// console.log(pernum2);


// const cars: string[] = ['bmw', 'merc']

// const upperCaseCars = cars.map(car => car.toUpperCase())
// console.log(upperCaseCars);

// const h1 = document.querySelector('.h1') as HTMLElement;
// const h2 = document.querySelector('.h2') as HTMLElement;
// const h3 = document.querySelector('.h3') as HTMLElement;
// const h4 = document.querySelector('.h4') as HTMLElement;


// enum StudentStatus {
//   Active = 'Active',
//   Graduated = 'Graduated',
//   Dropped = 'Dropped'
// }

// interface Student {
//   id: number;
//   name: string;
//   age: number;
//   status: StudentStatus;
//   grades: number[];
// }

// const students: Student[] = [
//   {
//     id: 1,
//     name: "Ali",
//     age: 20,
//     status: StudentStatus.Active,
//     grades: [80, 75, 90]
//   },
//   {
//     id: 2,
//     name: "Laylo",
//     age: 17,
//     status: StudentStatus.Graduated,
//     grades: [88, 92, 95]
//   },
//   {
//     id: 3,
//     name: "Diyor",
//     age: 22,
//     status: StudentStatus.Dropped,
//     grades: [60, 55, 70]
//   },
//   {
//     id: 4,
//     name: "Malika",
//     age: 19,
//     status: StudentStatus.Active,
//     grades: [100, 95, 98]
//   }
// ];

// for (let i = 0; i < students.length; i++) {
//   var studentsName: string = students[i].name;
//   var studentsAge: number = students[i].age;
//   var studentsStatus = students[i].status;
//   var studentsGrades = students[i].grades;



//   if (studentsAge > 18) {
//     console.log(`18 yoshdan kattalar ismi: ${studentsName}; yoshi: ${studentsAge}`);
//   }
//   if (studentsStatus == StudentStatus.Active) {
//     console.log(`Active: ${studentsName}`);
//   }

//   for (let index = 0; index < studentsGrades.length; index++) {

//     const min = Math.min(...studentsGrades);
//     const max = Math.max(...studentsGrades);

//     let indexMax = studentsGrades.indexOf(max);
//     if (indexMax !== -1) {
//       studentsGrades.splice(indexMax, 1);
//     }

//     let indexMin = studentsGrades.indexOf(min);
//     if (indexMin !== -1) {
//       studentsGrades.splice(indexMin, 1);
//     }

//     console.log(`${studentsName}ning o'rtacha bali ${studentsGrades}`);

//   }

// }

// Talabalar ro‘yxati yaratiladi


// Har bir talaba bo‘yicha ma’lumotlar chiqariladi


// 18 yoshdan kattalar ajratiladi

// Faqat Active holatdagilar ajratiladi


// Har bir talaba uchun o‘rtacha baho hisoblanadi

// Qisqa StudentSummary[] tuziladi



// const arr: number[] = [
//   42, 3, 60, 7, 19, 85, 25, 42, 64, 76,
//   1, 99, 31, 17, 27, 33, 17, 49, 57, 4,
//   2, 5, 8, 9, 10, 11, 12, 13, 14, 15,
//   16, 18, 20, 21, 22, 23, 24, 26, 28, 29,
//   30, 32, 34, 35, 36, 37, 38, 39, 40, 41,
//   43, 44, 45, 46, 47, 48, 50, 51, 52, 53,
//   54, 55, 56, 58, 59, 60, 61, 62, 63, 65,
//   66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
//   77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
//   87, 88, 89, 90, 91, 92, 93, 94, 95, 96
// ];

//   console.log(arr);

//   const uniqueNumbers = Array.from(new Set(arr));
//   console.log(uniqueNumbers);
// array ichidagi bir xil numlarni uchirib bita qoldirish uchun method


// function printId(id: string | number) {
//   console.log(`the id is ${id}`);

// }

// printId(43)
// printId('sadssa')


// function getVal(value: string | number): string | number {
//   if (typeof value === 'string') {
//     return value.toUpperCase()
//   } else if(typeof value === 'number') {
//     return value.toFixed(2)
//   }

//   return `unknown type: ${value}`
// }

// console.log(getVal('hello'));
// console.log(getVal(224.456));


// function logError(error: {message: string } | {error: string}) {
//   if ('message' in error) {
//     console.log('meassage', error.message);
//   } else {
//     console.log('Error', error.error);
//   }
// }

// console.log({message: 'hello'})
// console.log({error: 'hello'})

// let statusMessage: 'success' | 'error'

// statusMessage = 'error'
// statusMessage = 'kfjsd' 
// // error faqat tepadagi keltirilgan qiymatlarga tenglasak buladi

// type Status = 'succes' | 'error'

// function getStatus(status: Status): Status{
//     if (status === 'succes') {
//         return 'succes'
//     }
//     return 'error'
// }

// console.log(getStatus('succes'));
// console.log(getStatus('error'));

// type readId = {
//   readonly id: number
//   name: string
//   role: 'admin' | 'user' | 'guest';
// }

// const users: readId[] = [
//   { id: 1, name: "Ali", role: "admin" },
//   { id: 2, name: "Laylo", role: "user" },
//   { id: 3, name: "Botir", role: "guest" },
// ]


// function printUser(user: User): void {
//   console.log(`ID: ${user.id}, Name: ${user.name}, Role: ${user.role}`);
// }

// type User = {
//   readonly id: number;
//   name: string;
//   role: "admin" | "user" | "guest";
// };

// function printUser(user: User): void {
//   console.log(`ID: ${user.id}, Name: ${user.name}, Role: ${user.role}`);
// }

// function getShortInfo(user: User): [string, string] {
//   return [user.name, user.role];
// }

// function handleResponse(data: unknown): void {
//   if (typeof data === "object" && data !== null && "id" in data && "name" in data && "role" in data) {
//     const user = data as User;
//     console.log("User detected:");
//     printUser(user);
//   } else {
//     console.log("Not a valid user object.");
//   }
// }

// const users: User[] = [
//   { id: 1, name: "Ali", role: "admin" },
//   { id: 2, name: "Laylo", role: "user" },
//   { id: 3, name: "Botir", role: "guest" },
// ];

// for (const user of users) {
//   printUser(user);
//   const info = getShortInfo(user);
//   console.log(`Short Info: [${info[0]}, ${info[1]}]`);
// }


// Amaliyot 


// enum Role {
//   ADMIN,
//   STUDENT,
// }

// interface IUser {
//   id: number
//   name: string
//   role: Role
// }

// interface ICourse {
//   id: number
//   title: string
//   description: string
//   student: IUser[]
// }

// function isAdmin(user: IUser): user is IUser == { role: Role.ADMIN } {
//   return user.role === Role.ADMIN
// }

// type son = | 100 | 101 | 102 | 103
//   | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226
//   | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308
//   | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409
//   | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421
//   | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451
//   | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;

// function Server(num: son) {
//   if (num === 500 || 599) {
//     console.log(`${}`);
//   }
// }

// Server(500)

// function getInfo() {
//   return 'salom';
// }
// console.log(getInfo());


// function getUser() {
//   return {
//     name: 'Ali',
//     age: 16
//   };
// }

// console.log(getUser());


//     Create Class

// class Car {
//   name: string
//   year: Date

//   constructor (name: string, year: Date) {
//     this.name = name
//     this.year = year
//   }
// }

// const toyota = new Car('Toyota', new Date('2000-01-09'))
// console.log(toyota); // name: Toyota
// toyota.name = 'Bmw'
// console.log(toyota); // name: Bmw

// const chevrolet = new Car('Nexia', new Date('2005'))
// console.log(chevrolet);


//   Constructor

// class Car {
//   name: string
//   year: Date
//   isCar: boolean

//   constructor (name: string = 'Unknown', year: Date = new Date()) {
//     this.name = name
//     this.year = year
//     this.isCar = true
//   }
// }

// const chevrolet = new Car()
// chevrolet.name = 'chevrolet'
// chevrolet.year = new Date('2005')
// console.log(chevrolet);

//  2

// class Car {
//   name!: string
//   year!: Date

//   constructor(name: string, year: Date)
//   constructor(data: {name: string; year: Date}, year?: Date)
//   constructor (nameOrData: string | {name: string; year: Date}, year?: Date) {
//     if (typeof nameOrData === 'string') {
//       this.name = nameOrData
//       this.year = year!
//     } else if (typeof nameOrData === 'object') {
//       this.name = nameOrData.name
//       this.year = nameOrData.year
//     }
//   }
// }

// const toyota = new Car('Toyota', new Date('2001'))
// console.log(toyota);

// const chevrolet = new Car ({
//   name: 'chevrolet',
//   year: new Date('2005'),
// })


//   methods

// class Person {
//   name: string

//   constructor(name: string) {
//     this.name = name
//   }

//   greeting (age: number): string {
//     return `hello ${this.name}, your age is ${age}`
//   }
// }

// const user1 = new Person('Jahongir')
// const data = user1.greeting(16)
// console.log(data);

// const user2 = new Person('Jonpulat')
// console.log(user2.greeting(17));


// enum Provider {
//   Payme,
//   Click,
//   Uzum,
// }

// enum Status {
//   Pending,
//   Approved,
//   Rejected,
// }

// class Payment {
//   id: Provider
//   status: Status
//   createdAt: Date
//   updateAt: Date


//   constructor(id: Provider) {
//     this.id = id
//     this.status = Status.Pending
//     this.createdAt = new Date()
//     this.updateAt = new Date()
//   }

//   getLifeTime(): number {
//     return new Date().getTime() - this.createdAt.getTime()
//   }

//   rejectPayment(): void {
//     if (this.status === Status.Approved) {
//       throw new Error('paymet is allready approved')
//     }
//     this.status = Status.Rejected
//     this.updateAt = new Date()
//   }
// }

// const payme = new Payment(Provider.Payme)
// payme.status = Status.Approved
// setTimeout(() => {
//   payme.rejectPayment()
//   console.log(payme)
//   const duration = payme.getLifeTime()
//   console.log(duration)
//   console.log(payme);
// }, 1000);


//  getter & setter

// class Employee {
//   _salary: number
//   _password: string

//   set salary(num: number) {
//     this._salary = num * 100
//   }

//   get salary(): number {
//     return this._salary
//   }
// }

// const John = new Employee()
// John.salary = 10
// const salary = John.salary
// console.log(salary);


//     IMPLEMENTS

// interface Drivable {
//     startEngine(): void
//     drive(speed: number): void
// }
// interface Flyable {
//     fly(speed: number): void
// }


// class Car implements Drivable, Flyable {
//     model: string

//     constructor(model: string) {
//         this.model = model
//     }
//     startEngine(): void {
//         console.log(`${this.model} start Engine.`);
//     }
//     drive(speed: number): void {
//         console.log(`${this.model} Driving at ${speed} km/h`)
//     }
//     fly(speed: number): void {
//         console.log(`${this.model} flying at ${speed} km/h`);

//     }
// }

// const bmw = new Car('bmw')
// bmw.startEngine()
// bmw.drive(270)

// const plane = new Car('Plane')
// plane.startEngine()
// plane.fly(200)



//   EXTENDES

// class Animal {
//     id: number
//     name: string

//     constructor(name: string, id: number) {
//         this.name = name
//         this.id = id
//     }

//     speak() {
//         this.id = 10 * this.id
//         console.log(`${this.name} makes a sound`);
//     }

//     showInfo() {
//         console.log(`name: ${this.name}, Id ${this.id}`);      
//     }
// }

// class Cat extends Animal {
//     constructor(name:string) {
//         const id = Math.random()
//         super(name, id)
//     }

//     override speak () {
//         super.speak()
//         console.log(`${this.name} meows`);
//     }
// }

// const cat = new Cat('kitty')
// const id = cat.id
// cat.speak()
// cat.showInfo()



// class Shape {
//     color: string

//     constructor(color: string) {
//         this.color = color
//     }

//     describe () {
//         console.log(`this shape is ${this.color}`);
//     }
// }

// class Circle extends Shape {
//     radius: number

//     constructor(color: string, radius: number) {
//         super(color)
//         this.radius = radius
//     }

//     override describe(): void {
//         super.describe()
//         console.log(`this circle has a radius of ${this.radius}`);
//     }

//     area() {
//         return Math.PI * this.radius ** 2
//     }
// }

// const circle = new Circle('red', 10)
// circle.describe()
// console.log(circle.area());


//    COMPOSITION & ACCESS MODIFIER


// class User {
//     name: string

//     constructor(name: string) {
//         this.name = name
//     }

//     sayHello() {
//         console.log(`hello ${this.name}`);
//     }
// }

// class Payment {
//     amount: number

//     constructor(amount: number) {
//         this.amount = amount
//     }

//     pay() {
//         console.log(`you paid ${this.amount}`)
//     }
// }

// class UserWithPayment2 {
//     user: User
//     payment: Payment

//     constructor(user: User, payment: Payment) {
//         this.payment = payment
//         this.user = user
//     }

//     showInfo() {
//         this.user.sayHello()
//         this.payment.pay()
//     }
// }

// const userWithPayment = new UserWithPayment2(new User('John'), new Payment(100))
// userWithPayment.showInfo()


// class Person {
//     protected age: number

//     constructor(age: number) {
//         this.age = age
//     }
// }

// class Employee extends Person {
//     public name: string
//     private salary: number

//     constructor(name: string, salary: number, age: number) {
//         super(age)
//         this.name = name
//         this.salary = salary
//     }

//     showBonus() {
//         return this.salary * 0.2
//     }

//     showAge() {
//         return this.age
//     }
// }

// const employee = new Employee('John', 2000, 22)
// console.log(employee.name);
// console.log(employee.showBonus());
// console.log(employee.showAge());



//    STATIC & C# FARQI


// class Counter {
//     static count: number = 0
//     private static secretKey: string = '122312'
//     title: string

//     constructor(title: string) {
//         this.title = title
//     }

//     static increment() {
//         Counter.count++
//     }

//     static add(a: number, b: number) {
//         this.increment()
//         return a+b
//     }

//     static getSecretKey() {
//         return this.secretKey
//     }

//     getTitle() {
//         return this.title
//     }
// }

// const c = new Counter('c1')
// console.log(c.title);

// console.log(Counter.count);
// Counter.increment()
// console.log(Counter.count);

// console.log(Counter.add(10, 100));
// console.log(Counter.count);


// const MathHelper = {
//     add: (a: number, b: number) => a + b,
// }

// console.log(MathHelper.add(2, 5));



//   ABSTRACT CLASS

abstract class Animal {
    abstract makeSound(): void
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Meow!');
    }
}

const cat = new Cat()
cat.makeSound()