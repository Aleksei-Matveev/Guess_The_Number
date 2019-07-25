function check(event){
    console.log(event.type);           

window.onload=function(){    
    var btn = document.getElementsByClassName("btn");
    var arr = new Array();
    for (var i = 0; i < btn.length; i++){        
        btn[i].addEventListener("click", check);
        arr[i] = parseInt(Math.random()*(99-1)+1);
        btn[i].innerHTML = arr[i];
    }
    
}