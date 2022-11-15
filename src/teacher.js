import { Person } from "./person";

// Default --> import ... from '';
// Named --> import { ... } from '';
export function promote(){}

export default class Teacher extends Person {
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("teach")
    }
}