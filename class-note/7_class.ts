function Person(name, age){
    this.name = name;
    this.age = age;
}

var capt = new Person('zz',100);

class TPerson {
    private name : string;
    public age : number;
    public readonly log: string;

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
}

var soo = new Person('수',30);
console.log(soo); ; 

