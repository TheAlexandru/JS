function updateTermometer(){
	var values = document.getElementById('temperature-input').value;
	var alert_area = document.getElementById('alert_area');
	var showTemp = (3/*px*/ * values)+60; //60 is default 0 degree
	
	if(values >= -20 && values <= 50){
		alert_area.innerText="";
		document.getElementById('termometer-indicator').style.width = `${showTemp}px`;
	}else{
		alert_area.innerText= 'Error! Insert only numbers between -20 to 50!';
	}
}
