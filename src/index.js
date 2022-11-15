import React, {Component} from 'react';
import ReactDOM from 'react-dom'
// import { promote, Teacher } from './teacher';
import Teacher, {promote} from './teacher';

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById('root'))
console.log(element);

function sayHello(){
    for (var index = 0; index < 5; index++) {
        console.log(index)
    }
    console.log(index)
}

function sayHello2(){
    for (let index = 0; index < 5; index++) {
        console.log(index)
    }
    // console.log(index)
}

const x = 1 // x is read only - it cannot be reassign
// x = 2 

sayHello()
sayHello2()

const person = {
    name: 'Gonzalo',
    walk: function() {
        console.log(this); // reference to the current obj
    }, // walk is a method in the person obj
    talk() {}
}

person.name = "Test"
console.log(person.name);
person['name'] = 'Enrique';
console.log(person.name);

const targetMember = 'name';
person[targetMember.value] = 'Gonzalo';
console.log(person[targetMember.value]);

person.walk();

const walk = person.walk;
console.log(walk) // function ref
walk(); // windows ref

const walk2 = person.walk.bind(person); // fix issue
walk2();

// const square = function(number){
//     return number * number;
// }

// const square2 = (number => {
//     return number * number
// })

// const square4 = number => {
//     return number * number
// }

// better
const square5 = number => number * number
console.log(square5(5));

// const square3 = () => {
//     return 2
// }

const jobs = [
    {id: 1 , isActive: true},
    {id: 2 , isActive: true},
    {id: 3 , isActive: false},
];

const activeJobs = jobs.filter(function(job) { return job.isActive});
const activeJobs2 = jobs.filter( job => job.isActive);
console.log(activeJobs2);

const person2 = {
    name: 'Gon',
    talk() {
        var self = this; // fix issue
        setTimeout(function() {
            console.log('self', self);
        }, 1000)
    }
}

const person3 = {
    name: 'Gon',
    talk() {
        setTimeout(() => {
            console.log('this', this);
        }, 1000)
    }
}

// console.log(person2.talk.bind(person2)); just for test
person2.talk(); // show windows obj bcs of setTimeout
person3.talk();

// Arrw functions do not rebind THIS keyword
const colors = ['red', 'green', 'blue'];
<li>

</li>

const items = colors.map(function(color) {
    return '<li>' + color + '<li>';
});

const items2 = colors.map(color => '<li>' + color + '<li>')

const items3 = colors.map(color => `<li>${color}<li>`)
console.log(items3);

const address = {
    street: 'Urb',
    city: 'Aqp',
    country: 'Peru'
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

const { street: st} = address;
console.log(st);
const { street, city, country} = address; // obj destructuring

const first = [1, 2, 3];
const second = [4, 5, 6];
const combinec = first.concat(second);

const combined = [...first, 'a',...second, ... 'b']; // spread operator
console.log(combined)

const clone = [...first];
console.log(first);
console.log(clone);

const names = { name: 'Gonzalo'}
const work = { job: 'Developer'}

const combination = {...first, ...second, location: 'Australia'}
console.log(combination)

const clonation = {...names};

// problem
const peruvian = {
    name: 'Gon',
    walk() {
        console.log("walk");
    }
};

const peruvian2 = {
    name: 'Gon',
};

// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     walk() {
//         console.log("walk");
//     }
// }

// const p = new Person('Ro')
// const p2 = new Person('May')

// // Inheritance
// class Teacher extends Person {
//     constructor(name, degree){
//         super(name);
//         this.degree = degree;
//     }
//     teach(){
//         console.log("teach")
//     }
// }

// const teacher = new Teacher('Me', "MCS")
// teacher.walk();

const teacher = new Teacher('Me', "MCS")
teacher.teach();

