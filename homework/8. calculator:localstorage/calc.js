var inputs = [document.getElementById('firstNr'),document.getElementById('secNr'),document.getElementById('result')]
function calculate(){
   inputs[2].value = eval(`${inputs[0].value} ${event.target.value} ${inputs[1].value}`); 
    for(var i=0;i<3;i++){ localStorage.setItem(`Nr_${i}`,inputs[i].value) }
}
window.onload= function(){
    for(var i = 0; i < 4; i++){ document.getElementById('buttons').children[i].addEventListener('click',calculate)}
    for(var i=0;i<3;i++){ inputs[i].value=localStorage.getItem(`Nr_${i}`) }
}
