let menu_icon = document.getElementById('menu_icon');
let mobile_nav = document.getElementsByClassName('mobile_nav');


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