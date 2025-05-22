// let fullName: string = 'johon'
// let son: number = 124
// let bool: boolean = true

// console.log(fullName);
// console.log(son);
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
// const person1 = logger('Jahongir');
// console.log(person1);

// const person = {
//     firstName: 'Jahongir'
// }

// function GetName(data: {firstName: string}) {
//     return  `hello ${data.firstName}`
// }

// const person2 = GetName(person)
// console.log(person2);


// const cars: string[] = ['bmw', 'merc']

// const upperCaseCars = cars.map(car => car.toUpperCase())
// console.log(upperCaseCars);

const h1 = document.querySelector('.h1') as HTMLElement;
const h2 = document.querySelector('.h2') as HTMLElement;
const h3 = document.querySelector('.h3') as HTMLElement;
const h4 = document.querySelector('.h4') as HTMLElement;


enum StudentStatus {
  Active = 'Active',
  Graduated = 'Graduated',
  Dropped = 'Dropped'
}

interface Student {
  id: number;
  name: string;
  age: number;
  status: StudentStatus;
  grades: number[];
}

const students: Student[] = [
  {
    id: 1,
    name: "Ali",
    age: 20,
    status: StudentStatus.Active,
    grades: [80, 75, 90]
  },
  {
    id: 2,
    name: "Laylo",
    age: 17,
    status: StudentStatus.Graduated,
    grades: [88, 92, 95]
  },
  {
    id: 3,
    name: "Diyor",
    age: 22,
    status: StudentStatus.Dropped,
    grades: [60, 55, 70]
  },
  {
    id: 4,
    name: "Malika",
    age: 19,
    status: StudentStatus.Active,
    grades: [100, 95, 98]
  }
];

for (let i = 0; i < students.length; i++) {
  var studentsName: string = students[i].name;
  var studentsAge: number = students[i].age;
  var studentsStatus = students[i].status;
  var studentsGrades = students[i].grades;



  if (studentsAge > 18) {
    console.log(`18 yoshdan kattalar ismi: ${studentsName}; yoshi: ${studentsAge}`);
  }
  if (studentsStatus == StudentStatus.Active) {
    console.log(`Active: ${studentsName}`);
  }

  for (let index = 0; index < studentsGrades.length; index++) {

    const min = Math.min(...studentsGrades);
    const max = Math.max(...studentsGrades);

    let indexMax = studentsGrades.indexOf(max);
    if (indexMax !== -1) {
      studentsGrades.splice(indexMax, 1);
    }

    let indexMin = studentsGrades.indexOf(min);
    if (indexMin !== -1) {
      studentsGrades.splice(indexMin, 1);
    }
        
    console.log(`${studentsName}ning o'rtacha bali ${studentsGrades}`);
    
  }

}

// Talabalar ro‘yxati yaratiladi


// Har bir talaba bo‘yicha ma’lumotlar chiqariladi


// 18 yoshdan kattalar ajratiladi

// Faqat Active holatdagilar ajratiladi


// Har bir talaba uchun o‘rtacha baho hisoblanadi

// Qisqa StudentSummary[] tuziladi