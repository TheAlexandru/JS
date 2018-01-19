document.getElementById('minus-btn').addEventListener('click',func);
document.getElementById('plus-btn').addEventListener('click',func);
document.getElementById('save-btn').addEventListener('click',saveit);
document.getElementById('reset-btn').addEventListener('click',reset);
var alert = document.getElementById('alert');
var age = document.getElementById('age');
var name_input = document.getElementById('name');

function func(e){
    if(e.target.id == 'plus-btn' && age.value < 100 ){age.value++ }
    if(e.target.id == 'minus-btn' && age.value > 0 ){age.value-- }
}
 
function saveit(){
        if(name_input.value.length<3){
            alert.innerHTML='The name must have more than 3 characters !';
            alert.style.color='red';
        }else{
            localStorage.setItem('value',age.value);
            localStorage.setItem('name',name_input.value);
            localStorage.setItem('saved',true);
            alert.innerHTML='Saved!';
            alert.style.color='green';
        }
}
function reset(){
        age.value = 10;
        name_input.placeholder = 'name';
        localStorage.setItem('saved',false);
        localStorage.removeItem('value');
        localStorage.removeItem('name');        
}

window.onload = function (){
                    if(localStorage.getItem('saved')=='true'){
                        age.value = localStorage.getItem('value');
                        name_input.placeholder = `${localStorage.getItem('name',name_input.value)}`;
                    }else{
                        reset();
                    }
                };