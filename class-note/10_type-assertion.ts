// 타입 단언(type assertion)
var a;
a=20;
a='a';
var b = a as string;

// DOM API 조작
// 웹 페이지 태그 정보 조작 및 접근 -> DOM API

// <div id="app">hi</div>

var div = document.querySelector('div') as HTMLDivElement
// div는 Null인 가능성 농후함.
div.innerText;