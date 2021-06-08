/*----Type Conversion----*/
var num = 20;//Number타입
num = "이십"; //String타입
var num ; //한 변수를 여러 번 초기화 할수는 있으나 , 재선언 할 수 없습니다.

/*----implict type conversion----*/
10 + "문자열"; // 문자열 연결을 위해 숫자 10이 문자열로 변환됨.
"3" * "5";     // 곱셈 연산을 위해 두 문자열이 모두 숫자로 변환됨.
1 - "문자열";  // Not a Number

/*----explicit type conversion----*/
Number("10"); // 숫자 10
String(true); // 문자열 "true"
Boolean(0);   // 불리언 false
Object(3);    // new Number(3)와 동일한 결과로 숫자 3

/*----Number to String----*/
var asd = 10
console.log(asd.toExponential());
console.log(asd.tofixed());