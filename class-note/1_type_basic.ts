// var str = "hello world";

// const str: string = 'hello';

let str : string = 'hello';

// Ts 숫자
let num:number = 10;

// TS 배열
let arr : Array<number> = [1, 2, 3];
let heros : Array<string> = ['Capt',10];
var items: number[] = [1, 2, 3];

// TS 튜플
// 특정 위치에 타입을 지정 가능한 타입 -> 튜플
let address : [string,number] = ['강남',0];

// TS 객체
let obj: object = {};
// let person: object = {
//     name : 'capt',
//     age:100,
// }
let person : {name : string, age:number}={
    name:'thor',
    age:100,
}

let show = true;