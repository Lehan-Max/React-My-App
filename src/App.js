// //var   -> can be accissible within function
// //let   -> can be acciscible within block
// //const -> can be acciscible within block
// function SayHello() {
//    let array = []
//     for (let i=0; i<=10; i++) {
//         array.push(i)
//     }
//     return (
//         <>
//         {array.map(res => {
//             return <p>{res}</p>
//         })}
//         </>
//     )
// }
// export default SayHello;



// //objects in react
// function SayHello() {
//     const person = {
//         name: 'Max',
//         walk() {},
//         talk() {},
//         meta: {
//             minutesWriting: 20,
//             minutesProcrastinating: 0,
//           }
//     }
//     console.log(person)
//     return (
//         <div>{person.meta.minutesWriting}</div>
//     )
// }
// export default SayHello;



// //this in react
// function SayHello() {
//     var person = {
//         name: 'Max',
//         walk() {
//             console.log(this)
//         },
//         talk() {}
//     }
//     const walk = person.walk;
//     console.log(walk)
// }

// export default SayHello;



// // binding this in react
// function SayHello() {
//     var person = {
//         name: 'Max',
//         walk() {
//            return this;
//         },
//         talk() {}
//     }
//     const walk = person.walk.bind(person);
//     console.log(walk())
// }

// export default SayHello;



// // Arrow Function in react
// function SayHello() {
//     //normal js
//     const square = function(number) {
//         console.log(number * number);
//     }
//     square(10);

//     //Es6
//     const square1 = (number) => {
//         console.log( number * number);
//     }
//     square1(20);

//     //if single parameter can ignore paranthesis
//     const square2 = number => console.log( number * number);
//     square2(30);

//     const Jobs = [
//         {id: 1, isActive: true},
//         {id: 2, isActive: true},
//         {id: 3, isActive: false}
//     ]

//     const isActive = Jobs.filter(function(Job) {
//         return Job.isActive;
//     })
//     console.log(isActive)

//     //simplified
//     const isActiveJobs = Jobs.filter( Job => Job.isActive)
//     console.log(isActiveJobs)
// }

// export default SayHello;



// //Arrow Function and this
// function SayHello() {
//     //using callback function you need to specify this to some other keyword and use it or else it returns window object
//     const Person = {
//         walk() {
//             var self = this;
//             setTimeout(function() {
//                 console.log('self',self)
//             },1000)
//         }
//     }
//     Person.walk()

//     //using arror function you need not specify this to some other keyword and use it instead you can directly use this
//     const Person1 = {
//         walk() {
//             // var self = this;
//             setTimeout(() => console.log('this',this) ,2000)
//         }
//     }
//     Person1.walk()
// }
// export default SayHello;



// // Array Map in react
// function SayHello() {
//     const colors = ['red', 'green', 'yellow'];
//     // colors.map(function(color) {
//     //     console.log(color);
//     // })
//     // colors.map(color => {
//     //     console.log(color+'.');
//     // })
//     const items = colors.map(color => `${color}`);
//     console.log(items)
// }

// export default SayHello;



// // Object Destructuring in react
// function SayHello() {
//     const address = {
//         street: 'Test Street',
//         city: 'Test City',
//         country: 'Test Country'
//     }
//     // const streetValue = address.street;
//     // const cityValue = address.city;
//     // const countryValue = address.country;
    
//     //instead of calling again and again address.key to fetch individulal values destructing is helpful as below reducing the code.
//     const {street, city: ct, country} = address;
//     console.log(street);
//     console.log(ct);
//     console.log(country);
// }
// export default SayHello;



// // Spread Operator in react
// function SayHello() {
//     // //Spread Operator in array
//     // const first = [1,2,3];
//     // const second = [4,5,6];
//     // // const combined = first.concat(second)
//     // const combined = [...first, 'a', ...second, 'b']
//     // console.log(combined)

//     //Spread Operator in object
//     const firstObj = {name: 'Lehan'};
//     const secondObj = {profession: 'Engineer'};
//     const combinedObj = {...firstObj, ...secondObj, Loaction: 'Australia'}
//     console.log(combinedObj)
// }
// export default SayHello;



// // Classes in react
// function SayHello() {
//     // //If we have 2 or more objects and those have same functions in it, if something goes wrong to change coe for function in every object 
//     // // We will place the object in single place and use it wherever required. So, We use class
//     // const person1 = {
//     //     name: 'Max',
//     //     walk() {
//     //         console.log('walk')
//     //     }
//     // }
//     // const person2 = {
//     //     name: 'Max',
//     //     walk() {
//     //         console.log('walk')
//     //     }
//     // }
//     // console.log(person1)
//     // console.log(person1.walk)
//     // console.log(person2)
//     // console.log(person2.walk)
    
//     class Person {
//         constructor(name) {
//             this.name = name;
//         }
//         walk() {
//             console.log('walk')
//         }
//     }
//     const person = new Person('Max');
//     const person1 = new Person('Sam');
//     console.log(person)
//     console.log(person.walk)
//     console.log(person1)
//     console.log(person1.walk)
// }
// export default SayHello;



// // Inheritence in react
// function SayHello() {
//     class Person {
//         constructor(name) {
//             this.name = name;
//         }
//         walk() {
//             console.log('walk')
//         }
//     }
//     class Teacher extends Person{
//         constructor(name, degree) {
//             super(name);
//             this.degree = degree;
//         }
//         teach() {
//             console.log('teach')
//         }
//     }
//     const teacher1 = new Teacher('max', 'B.E');
//     teacher1.teach();
//     teacher1.walk();
//     console.log(teacher1)
//     const teacher12 = new Teacher('Lehan', 'Engineering');
//     teacher12.teach();
//     teacher12.walk();
//     console.log(teacher12)
// }
// export default SayHello;
