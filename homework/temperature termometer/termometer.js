function updateTermometer(){
	var input = document.getElementById('temperature-input');
	var div_tempIndic = document.getElementById('termometer-indicator');
	var alert = 'Error! Insert only numbers between -20 to 50!';
	var alert_area = document.getElementById('alert_area');
	var values = input.value;
	var temp0 = 60; // 0 degree
	var onegC = 3;//px
	var showTemp = (onegC * values)+temp0;
	
	if(values >= -20 && values <= 50){
		alert_area.innerText="";
		div_tempIndic.style.width = `${showTemp}px`;
	}else{
		alert_area.innerText= alert;
	}
}
