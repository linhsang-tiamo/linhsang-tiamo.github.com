// Created for codepad.co
// https://codepad.co/snippet/aSiGmsBE

// var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/Lecrae_-_Anomaly_(Lyric_Video).mp3');
var audio = new Audio('fall_all_in_you.mp3');
audio.volume = 1;
var playPromise = audio.play();
if (playPromise !== undefined){
    playPromise.then(_ => {
      audio.play();
    })
    .catch(error => {
      audio.pause();
      $('.fa-play').show();
      $('.fa-pause').hide();
      $('.music-card').removeClass('playing');
    })
}


$('.trigger').click(function() {
  if (audio.paused == false) {
      audio.pause();
      $('.fa-play').show();
      $('.fa-pause').hide();
      $('.music-card').removeClass('playing');
  } else {
      audio.play();
      $('.fa-pause').show();
      $('.fa-play').hide();
      $('.music-card').addClass('playing');
  }
});

$('.js .photostack').after().click(function() {
  if (audio.paused != false) {
      audio.play();
      $('.fa-pause').show();
      $('.fa-play').hide();
      $('.music-card').addClass('playing');
  }
});
