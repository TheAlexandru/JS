var editor = document.getElementById('editor');  
var button = document.getElementById('btn-edit');
var active = 0;
function turnEditOn(){
	if(active==0){
		active=1;
		button.innerHTML="<img src='icons/editable.png'>"
	  for (var i=0; i < editor.children.length; i++){
		  editor.children[i].setAttribute('contenteditable','true');
	  }
	}else{ turnEditOff(); }
   }

function turnEditOff(){
	 button.innerHTML="<img src='icons/noteditable.png'>"
     for (var i=0; i < editor.children.length; i++){
		  editor.children[i].setAttribute('contenteditable','false');
	  }
	   active=0;
   }