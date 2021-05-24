/*-----기본 타입------*/

var num = 10;     //숫자
var myname = "서채운";  //문자열
var str;    //undefined

/*-----숫자 타입------*/
var firtNum = 10;
var second = 10.00;
var thirdNum = 10e6;
var fourthNum = 10e-6;

/*-----문자 타입------*/
var firstStr = "이것도 문자열 입니다.";
var secondStr = '이것도 문자열 입니다.';
var thirdStr = "나의 이름은 '홍길동'입니다.";
var fourthStr = '나의 이름은 "홍길동" 입니다.';

/*-----boolean 타입------*/
function changebool() {
  var firstNum = 10;
  var secondNum = 11;
  document.getElementById("result").innerHTML = (firstNum == secondNum); //false
}

/*-----symbol 타입------*/
var sym = Symbol("javascript");
var symObj = Object(sym);// 심볼은 유일하고 변경할 수 없는 타입으로, 객체의 프로퍼티를 위한 식별자로 사용할 수 있습니다.

