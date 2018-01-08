
function showPreloader(){
    var thisNr = 0;
    var backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    var preloader = document.createElement('div');
    preloader.setAttribute('id','preloader');
    preloader.style.left = `${window.innerWidth/2 - 50/2}px`;
    preloader.style.top = `${window.innerHeight/2 - 10/2}px`;
    for(i=0;i<3;i++){
        var div = document.createElement('div');
        preloader.appendChild(div);
    }
    backdrop.appendChild(preloader);
    document.body.appendChild(backdrop);
    
    //BONUS (load bar)
    var divload = document.createElement('div');
    var anime = document.createElement('div');
    divload.className='loader';
    anime.className='animeLoad';
    divload.style.marginLeft = `${window.innerWidth/2 - 100/2}px`;
    divload.style.marginTop = `${window.innerHeight/1.9 - 10/1.9}px`;
    function animate(){
        setTimeout(function(){
            thisNr +=1;
            anime.style.width=`${thisNr}px`;
            divload.appendChild(anime);
            backdrop.appendChild(divload); 
            thisNr<100 ? animate(): '';
        },45)
       
    }
    animate(); 
}

function hidePreloader(){
    var preloader = document.getElementById('preloader');
    document.body.removeChild(preloader.parentElement);
}

window.onload = showPreloader;
setTimeout(hidePreloader,5000);


//By Artin Alexandru 2018

