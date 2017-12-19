//var bone_nr = 0;
function findNextBone(){
	var bone = document.getElementsByClassName('bone');
	if(bone.length > 0){
		console.log(bone[0]);
		bone[0].className = 'bone-found';
	}else{
			document.getElementById('yard').innerHTML = "GAME OVER";
		}
}