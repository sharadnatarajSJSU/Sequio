let text = document.getElementById('parallax-title');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let menu_icon = document.getElementById('menu_icon');
let mobile_nav = document.getElementsByClassName('mobile_nav');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  if (window.innerWidth > 768) { 
    text.style.marginTop = `${value * 2.5}px`;
    // leaf.style.bottom = `${value * 1.5}px`;
    // hill5.style.bottom = `${value * 1.5}px`; 
    hill4.style.bottom = `${value * -0.5}px`;
    // hill3.style.bottom = `${value * 0.5}px`;
    hill2.style.bottom = `${value * -0.5}px`;
    hill1.style.bottom = `${value * -0.7}px`;  
  }

});


window.addEventListener('scroll', () => {
  let value = window.scrollY;
  let scrollSpeedMultiplier = 1; 
  if (window.innerWidth <= 768) { 
    text.style.marginTop = `${value * 2.5}px`;
    // leaf.style.bottom = `${value * 1.5}px`;
    // hill5.style.bottom = `${value * 1.5}px`; 
    hill4.style.bottom = `${value * -0.5}px`;
    // hill3.style.bottom = `${value * 0.5}px`;
    // hill2.style.bottom = `${value}px`;
    hill1.style.bottom = `${value * -0.7}px`;  
  }


});





function view_menu(){
  Array.from(mobile_nav).forEach(function(element) {

    if(element.classList.contains('hide_nav')){
      element.classList.remove('hide_nav');
      element.classList.add('show_nav');
    }
    else{
      element.classList.add('hide_nav');
      element.classList.remove('show_nav');
    }  });
  
};


window.addEventListener('scroll', reveal);

function reveal() {
  const revealer = document.querySelectorAll('.reveal');

  for (let i of revealer) {
    let windowheight = window.innerHeight;
    let revealTop = i.getBoundingClientRect().top;

    let revealPoint = 75;
    if (revealTop < windowheight - revealPoint) {
      i.classList.add('active');
    } 
    else {
        i.classList.remove('active');  
    }
  }
};
