window.onload=function(){
    console.log("start");
var btn = document.getElementsByClassName("btn");
console.log(btn);
for (var i = 0; i < btn.length; i++){
    console.log(btn[i].id);
btn[i].addEventListener("click", check, false);
}

function check(e){
    console.log("click");
}
}