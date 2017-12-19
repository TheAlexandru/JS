function findNextBone(){
	var bone = document.getElementsByClassName('bone');
	bone.length > 0 ? bone[0].className = 'bone-found' : document.getElementById('yard').innerHTML = "GAME OVER";
}
