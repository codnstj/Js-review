function alertDialogBox() {
  alert("확인을 누를 떄 까지 다른 작업을 할 수 없어요!");
}
function inner() {
  var str = document.getElementById("test");
  str.innerHTML = "이문장으로 바뀌었습니다.";
}
function write() {
    document.write("4 * 5");
}
function cx() {
    console.log(4 * 5);
}