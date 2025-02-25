interface Developer {
    name : string;
    skill: string;
}

interface Person{
    name:string;
    age:number;
}

function introduce(): Developer | Person{
    return { name:'zxc', age:33, skill:'asd'}
}

var tony=introduce();

if((tony as Developer).skill){
    var skill = (tony as Developer).skill;
} else if( (tony as Person).age){
    var age = (tony as Person).age;
    console.log(age);
}

//타입 가드 정의
function isDeveloper(target : Developer | Person): target is Developer {
    return (target as Developer).skill != undefined;
}

function isPerson(target : Developer | Person): target is Person {
    return (target as Person).age != undefined;
}

//타입 가드 사용 예제
if(isDeveloper(tony)){
    var skill = tony.skill;
}else {
    var age = tony.age;
}