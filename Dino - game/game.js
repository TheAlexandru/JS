// "_" drum
// "&#127797;" cactus
var map = [];
var is_jumping = false ;
var hp = 20; //viata 
var score = 0;



for(var n=1; n<=70; n++){
	map.push('_');
	
}


function showMap(){
	
	document.getElementById("theMap").innerHTML ="";//stergent ce contine elementul
	
	
	if(is_jumping){
		document.getElementById("theMap").innerHTML ='<img class="jump" src="Dino.png" >';
	}else{
		document.getElementById("theMap").innerHTML ='<img src="Dino.png" >';
	}
	
	
	for(var i=0; i < map.length; i++){
		document.getElementById("theMap").innerHTML += map[i];
		
	}
	map.shift();//eliminam 1 celula din harta
	//////

var x= Math.round(Math.random()*100);
	
	if(x >= 0 && x <= 90){
		map.push("_");	//adaugam 1 celula la sfarsitu hartii
	}else if(x > 90 && x<= 95){
		map.push("<span class='c-small'>&#127797;</span>");
	}else if(x > 95 && x<=97){
			map.push("<span class='c-mediu'>&#127797;</span>");
	}else if(x >97 && x<=99){
		map.push("<span class='c-big'>&#127797;</span>");
	}else{
		map.push("<span class='kebab'><img src='Kebab.png' style='width:30px;'></span> ")
	}

//scade HP daca nu sare.
	if(map[0]== "<span class='c-small'>&#127797;</span>" && is_jumping==false ){
		hp--;
		//scrie -1
		document.getElementById('hp-alert').innerHTML="-1";
		//peste 1.5 secunda cheama functia de a sterge -1
		setTimeout(hideAlert,150);
		 
	}else if(map[0]== "<span class='c-mediu'>&#127797;</span>" && is_jumping==false){
		hp = hp - 2;
		
		//scrie -2
		document.getElementById('hp-alert').innerHTML="-2";
		//peste 1.5 secunda cheama functia de a sterge -2
		setTimeout(hideAlert,150);
	}else if(map[0]== "<span class='c-big'>&#127797;</span>" && is_jumping==false){
		hp = hp -3;
		
		//scrie -3
		document.getElementById('hp-alert').innerHTML="-3";
		//peste 1.5 secunda cheama functia de a sterge -3
		setTimeout(hideAlert,150);
	}else if(map[0]=="<span class='kebab'><img src='Kebab.png' style='width:30px;'></span> "){
		
		hp = hp +5;
		//scrie +5
		document.getElementById('hp-alert').innerHTML="<span style='color:green'>+5</span>";
		//peste 1.5 secunda cheama functia de a sterge +5
		setTimeout(hideAlert,150);
	}

	document.getElementById("hp").innerHTML =hp;
	score++;
	document.getElementById('score').innerHTML= score;
	
	if(hp<=0){
			console.log('game over');
			clearInterval(interval); 
		document.getElementById('theMap').innerHTML="<h1 style='margin-top:-40px;'>Game Over!</h1>"+ "<h2>Your score is:</h2>"+"<h2>"+score+"</h2>";
		}
}



//sterge -1
function hideAlert(){
	document.getElementById('hp-alert').innerHTML="";
}

//sare
function jump(){
	is_jumping = true;
	setTimeout(fall,300);//peste jumate de sec. cade.
}
  
function fall(){
		is_jumping =false;
	}

// afisam harta la fiecare secunda
var interval = setInterval( showMap,90);

