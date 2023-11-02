let menu_icon = document.getElementById("menu_icon");
let mobile_nav = document.getElementsByClassName("mobile_nav");

function view_menu() {
  Array.from(mobile_nav).forEach(function (element) {
    if (element.classList.contains("hide_nav")) {
      element.classList.remove("hide_nav");
      element.classList.add("show_nav");
    } else {
      element.classList.add("hide_nav");
      element.classList.remove("show_nav");
    }
  });
}

function adjustContentHeight() {
  const content = document.getElementById("content");
  const sections = content.querySelectorAll(".content-section");
  let totalHeight = 150;

  sections.forEach((section) => {
    totalHeight += section.offsetHeight;
  });

  content.style.height = `${totalHeight}px`;
}

// Call the function initially to set the initial height
adjustContentHeight();

// Use setInterval to update the content height every second
setInterval(adjustContentHeight, 10);