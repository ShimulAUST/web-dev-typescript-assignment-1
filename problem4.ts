class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public getDetails(): string {

        return `The name of the person is ${this._name} and his/her age is ${this._age}`;
    }
}

class Student extends Person {
    private _grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this._grade = grade;
    }
    public getGrade(): string {
        return `The grade is ${this._grade}`;
    }
}

let Student1 = new Student("Shimul", 26, "A+");
console.log(Student1.getDetails());
console.log(Student1.getGrade());