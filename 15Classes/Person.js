class Person {

    static innerType = 'Some Person Class'

    constructor(firstName,lastName,age,email){
        if(Number.isInteger(age) == false){
            throw new TypeError('Age must be an integer');
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

    
}
const myPerson = new Person('John','Smith',26,'john@abv.bg');
console.log(myPerson.toString());
console.log(Person)