// 타입 추론 기본 1
var a;

// // 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> ={
//     value: 'min',
//     title: 'min',
// }

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<T> extends Dropdown<T>{
    description: string;
    tag: T;
}

var detailedItem :DetailedDropdown<number>={
    value:10,
    title:'asd',
    description:'asd',
    tag:20,
}

// Best Common Type
var arr = [1,2,true,'a',null];