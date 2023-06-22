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
  