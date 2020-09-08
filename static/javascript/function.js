// Variables for Audio
var songs = [];
var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");
var song = new Audio();
    var currentSong = 0;  
    var currentTime = song.currentTime;  
// Audio player
window.onload = playSong;   
/**
 * Play the Audio from current time of Audio and update Audio file name
 */  
function playSong(){
	song.src = "static/audio/"+songs[currentSong];  
    songTitle.textContent = songs[currentSong]; 
    song.currentTime=currentTime;
    song.play();    

}
/**
 * Play or Pause the Audio
 */
function playOrPauseSong(){
	if(song.paused){
		song.play();
		$("#play img").attr("src","static/images/Pause.png");
	}
	else{
		song.pause();
		$("#play img").attr("src","static/images/Play.png");
	}
}
song.addEventListener('timeupdate',function(){ 
	var	position = song.currentTime / song.duration;
	fillBar.style.width = position * 100 +'%';
});
/**
 * Seek Audio to 5 seconds ahead from the current time of Audio
 */
function next(){
    //currentSong++;
    currentTime+=5;
    /*
    if(currentSong > 2){
	currentSong = 0;
	}*/
	playSong();
	$("#play img").attr("src","static/images/Pause.png");
}
/**
 * Seek Audio to 5 seconds back from current time of Audio
 */
function pre(){
    //currentSong--;
    currentTime-=5;
    /*
    if(currentSong < 0){
		currentSong = 2;
	}*/
	playSong();
	$("#play img").attr("src","static/images/Pause.png");
}


