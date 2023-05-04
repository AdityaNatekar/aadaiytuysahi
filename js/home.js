const greeting = document.querySelector('.greeting');

const logOut = document.querySelector('.logout');


logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}

$(function(){

    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
      if ($('.timeline-content').hasClass('js--fadeInLeft')) {
        $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
      }
  
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
    } else {
      
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
    }
    
    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
  
  
  });


  function showVideo() {
    var videoOverlay = document.getElementById("video-overlay");
    var videoContainer = document.getElementById("video-container");
    var videoPlayer = document.getElementById("video-player");
    videoOverlay.style.display = "block";
    videoContainer.style.display = "block";
    videoPlayer.src += "?autoplay=1";
  }
  
  document.addEventListener("click", function(event) {
    var videoOverlay = document.getElementById("video-overlay");
    var videoContainer = document.getElementById("video-container");
    var videoPlayer = document.getElementById("video-player");
    if (event.target == videoOverlay || event.target == videoContainer) {
      videoOverlay.style.display = "none";
      videoContainer.style.display = "none";
      videoPlayer.src = videoPlayer.src.replace("?autoplay=1", "");
    }
  });
  
  function hideVideo() {
    var videoPlayer = document.getElementById("video-player");
    videoPlayer.innerHTML = "";
  }