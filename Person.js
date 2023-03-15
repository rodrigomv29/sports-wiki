export class Person {
    constructor (name, age = -1){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age = age;
    }
    sayHello(){
        console.log("Hello");
    }
    
};
Canelo = new Person("Canelo");
console.log(Canelo);

