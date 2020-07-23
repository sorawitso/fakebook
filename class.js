/*
class Person {
    constructor(name,age, height){
        this.name = name,
        this.age = age,
        this.height = height
    }

    run(){
        console.log(` ${this.name} is running`)
    }

}

class People extends Person {
    constructor(name, age, height, speed){
        super()
        this.name = name,
        this.age = age,
        this.height = height,
        this.speed = speed
    }

}


let person = new People("A", 10, 111, 99);
//console.log(person)
//person.run();

class Human{
    constructor(name, country, skill, sex){
        this.name = name,
        this.country = country,
        this.skill = skill,
        this.sex = sex
    }
}
// console.log( new Human("AAAA","Thailand","VBA","F"));
// console.log( new Human("BBBB","Thailand","VBA","F"));
// let human = new Human("CCC","Thailand","VBA","F");
// console.log(human);

class Superhuman{
    constructor(name, country, skill, sex){
        this.name = name,
        this.country = country,
        this.skill = skill,
        this.sex = sex
    }
    fly(country){
        console.log("fly into",country);
    }
}
let superhuman = new Superhuman("AAAA","Thailand","VBA","F");

//console.log(superhuman.fly())
//superhuman.Createpower("99");
/*console.log('Flying to', superhuman.country);

class Xman extends Superhuman{
    constructor(name, country, skill, sex, spacialSkill){
        super()
        this.name = name,
        this.country = country,
        this.skill = skill,
        this.sex = sex,
        this.spacialSkill = spacialSkill
    }
}

let xman = new Xman("AAAA",'Thailand',"VBA","M","Talk");
//console.log(xman.spacialSkill);

class NormalHuman extends Superhuman {
    constructor(name, country, skill, sex){
        super(name, country, skill, sex)
     }
    fly(country,speed){
        super.fly(country);
        console.log("flying with",speed)
    }
    static walk() {
        console.log(`${this.name}, is waling `)
    }

}
new NormalHuman("AAAA",'Thailand',"VBA","M").fly("Thailand",100)
/*
*/
/*
let arr = ["A", "B", "C","D","E"]
console.log(arr);
let [one, two, tree, four, five] = arr;
console.log(four);
let obj = {name : "Sony", surname: "Manop"};
let objx = {...obj};
objx.name = "PPP"
console.log(objx.name)
console.log(obj.name)
*/

let sum = function(a, b){
    return a + b;
};

//Arrow function
let sum2 = (a, b) => a + b;

console.log(sum(4,5));
console.log(sum2(4,4));



