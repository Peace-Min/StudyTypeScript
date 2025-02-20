interface User{
    age : number;
    name : string;
}

// 변수에 인터페이스 활용
var seho : User ={
    age:33,
    name:'세호',
};

function getuser(user: User){
    console.log(user);
}

getuser({
    age : 27,
    name:'민평화',
});

// 함수의 스펙(구조)에 인터페이스를 활용

interface SumFunction{
    (a : number, b: number) : number;
}

let sum : SumFunction;
sum = function(a : number, b: number) : number{
    return a+b;
};

// 인덱싱
// 배열에 접근할 땐 number, return은 string
interface StringArray{
    [index : number] : string;
}

var arr0 : StringArray = ['a','b','c'];
arr0[0] = '10';

// 딕셔널 ㅣ패턴
interface StringRegexDictionary{
    [key:string] : RegExp
}

var obj0: StringRegexDictionary = {
    cssFile:/\.css$/,
    jsFile:/\.js$/,
}

Object.keys(obj0).forEach(function(value){});

// 인터페이스 확장.
interface Person{
    name: string;
    age: number;
}

// extends -> 상속
interface Developer extends Person{
    language:string;
}

var minpeace : Developer ={
    name:'zz',
    age:52,
    language : 'ts',
};
