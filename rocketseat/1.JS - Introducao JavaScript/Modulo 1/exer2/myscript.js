var btn = document.querySelector('#btn') 
var res = document.querySelector('div#res')

btn.onclick = function(){
    for (var i=32 ; i<=321 ; i++){
        if (i%2 == 0){
            res.innerHTML += `${i} => ` 
      	}
    }
}