const findMorning = document.getElementById('mor');
const findVideo = document.getElementById('mainVideo');


function changeBackground() {
  findMorning.addEventListener('click',function(){
    findVideo.src = 'movie.mp4';
  })
}

changeBackground();
