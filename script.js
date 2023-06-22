const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.nav-links');
// const toTop = document.querySelector('toTop');
const toTop = document.getElementById("toTop");

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    // console.log("test");
});


window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var tabButtons = document.querySelectorAll('.tab-button');
    var tabPanels = document.querySelectorAll('.tab-panel');
  
    // Function to handle tab click event
    function handleTabClick(event) {
      // Remove active class from all tab buttons and panels
      tabButtons.forEach(function(button) {
        button.classList.remove('active');
      });
      tabPanels.forEach(function(panel) {
        panel.classList.remove('active');
      });
  
      // Add active class to the clicked tab button and panel
      var tabId = event.target.getAttribute('data-tab');
      event.target.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }
  
    // Add click event listener to each tab button
    tabButtons.forEach(function(button) {
      button.addEventListener('click', handleTabClick);
    });
  });
  


