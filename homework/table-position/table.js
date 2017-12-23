var table = document.getElementById('table');
var products = [
table.children[0],// product 1
table.children[1],// product 2
table.children[2] // product 3
]

function moveOneUp(){
	//daca in primu si ultimul child nu este productul 2 :
		if(table.firstElementChild != products[1] && table.lastElementChild != products[1]){
				table.removeChild(table.children[1]);
			//adauga productul 2 INAINTE de primul child:
				table.insertBefore(products[1],table.firstElementChild);
		}else if(table.lastElementChild === products[1]){
	//daca in ultimul rand este productul 2:
				table.removeChild(table.lastElementChild);
				table.insertBefore(products[1],table.lastElementChild);
		}
   }

function moveOneDown(){
	//daca in primul child este productul 2:
		if(table.firstElementChild === products[1]){
				table.removeChild(table.firstElementChild);
				table.insertBefore(products[1],products[2]);
		}else if(
	//daca in al doilea child este productul 2:
				table.children[1] === products[1]){
				table.removeChild(table.children[1]);
				table.appendChild(products[1]);
		}

   }

