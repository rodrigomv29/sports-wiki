const Person = require("./Person")
class Athlete extends Person{
    constructor (name, sport){
        super();
        this.name = name;
        this.sport = sport;
    }
    getSport(){
        return this.sport;
    }
    setSport(sport){
        this.sport = sport;
    }
    isInjured(){
        return false;
    }
}
//Canelo = new Athlete("Canelo", 32);
// Canelo.sayHello();
// module.exports = Athlete;
console.log(Athlete);