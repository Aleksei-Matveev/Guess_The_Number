window.onload=function(){    
    var btn = document.getElementsByClassName("btn");
    for (var i = 0; i < btn.length; i++){
        btn[i].addEventListener("click", check, false);
    }

    function check(e){
        console.log("click");
    }
}