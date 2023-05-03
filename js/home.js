const greeting = document.querySelector('.greeting');

const logOut = document.querySelector('.logout');

// Get the current date and time
var now = new Date();

// Check if the current time is after 3:05am
if (now.getHours() > 3 || (now.getHours() == 3 && now.getMinutes() >= 8)) {
  // If it is, open the "after-3-05.html" page
  alert("Hey its It's 12.00 5.05.2023");
  window.location.href = "../index.html";
} 

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