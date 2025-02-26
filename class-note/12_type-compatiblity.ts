interface Developer{
    name: string;
    skill : string;
}

class QPerson{
    name:string;
}

var developer : Developer;
var person : QPerson={
    name :'asd'
};

// 함수

var add = function(n : number){
    // console.log(n);
}

var sum = function(n: number, b: number){
    // return n+b;
}

sum = add;

// 제네릭
interface Empty<T> {
    // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;

// empty1 = empty2;

interface NotEmpty<T> {
    data: T;
}

var notempty1 : NotEmpty<number>;
var notempty2 : NotEmpty<string>;

// notempty1 = notempty2;