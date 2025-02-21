var min : string | number | boolean;
function logMessage(value : string | number){
    if(typeof value == 'number'){
        
    }
    else{
        value.toString()
    }

    throw new TypeError('value must be string or number');
}

// \(pipe)를 유니온 타입이라고 지칭함
logMessage('hello');
logMessage(100);

interface Developer{
    name :string,
    skill : string,
}

interface IPerson{
    name : string,
    age : number,
}

// 유니온의 인터페이스는 공통된 필드만 제공한다.
// 타입가드
function askSomeone(someone : Developer | IPerson){
    someone.age
}

function askSomeone0(someone : Developer & IPerson){
    someone.age
}

var k : string | number | boolean;
var kk : string & number & boolean;