// Created for codepad.co
// https://codepad.co/snippet/aSiGmsBE

// var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/Lecrae_-_Anomaly_(Lyric_Video).mp3');
var audio = new Audio('/home/hbkhanh/Downloads/BookBlock/fall_all_in_you.mp3');
audio.volume = 0.1;
audio.play();

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
