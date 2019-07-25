var arr = new Array();
var count=0;

window.onload=function(){    
    var btn = document.getElementsByClassName("btn");

    initgame();
   
    for (var i = 0; i < btn.length; i++){        
        btn[i].addEventListener("click", check);
       
        btn[i].innerHTML = arr[i];
        btn[i].value = arr[i];
    }
    arr.sort(function(a , b){return a-b;});
}

function initgame(){
    for (var i = 0; i < 16; i++){
		var numberRand = parseInt(Math.random()*(99-1)+1);
		for (var y = 0; y <= i; y++) {

			if (numberRand == arr[y]) {
				numberRand = parseInt(Math.random()*(99-1)+1);
				y = 0;
			}
		}
        arr[i] = numberRand;        
    }
    
    count=0;
}

function check(){
    console.log(arr);
    console.log(arr[count]);
    console.log(parseInt(this.value))

    if (arr[count]==parseInt(this.value)){
        console.log("true");
        count++;
        this.disabled=true;
    }
    else
     console.log("false");

}