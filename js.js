// Get references to the button and the content
  const button = document.getElementById('toggleButton');
  const content = document.getElementById('toggleContent');
  const button2 = document.getElementById('toggleButton2');
  const content2 = document.getElementById('toggleContent2');

  // by default the content is hidden
  // content.style.display = 'none';
  // content2.style.display = 'none';

  // When the button is clicked,
  // 1. toggle div toggleContent
  // 2. set aria-expanded="true" or "false"
  // 3. change the button text inside the span to "▼" or "▲"

  button.addEventListener('click', function() {
    if (content.style.display === 'none') {
      content.style.display = 'grid';
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('span').textContent = '▲';
      content2.style.display = 'none';
      button2.setAttribute('aria-expanded', 'false');
      button2.querySelector('span').textContent = '▼';
      
    } else {
      content.style.display = 'none';
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('span').textContent = '▼';
    }
  }
  );

  // -----

  button2.addEventListener('click', function() {
    if (content2.style.display === 'none') {
      content2.style.display = 'grid';
      button2.setAttribute('aria-expanded', 'true');
      button2.querySelector('span').textContent = '▲';
      content.style.display = 'none';
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('span').textContent = '▼';

    } else {
      content2.style.display = 'none';
      button2.setAttribute('aria-expanded', 'false');
      button2.querySelector('span').textContent = '▼';

    }
  }
  );

  // whenever escape key is pressed, hide the content
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      content.style.display = 'none';
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('span').textContent = '▼';
      content2.style.display = 'none';
      button2.setAttribute('aria-expanded', 'false');
      button2.querySelector('span').textContent = '▼';
    }
  });

  // Add keyboard navigation for the menus
  document.addEventListener('keydown', function(event) {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const menuItems = document.querySelectorAll(focusableElements);
    const menuArray = Array.prototype.slice.call(menuItems);
    const currentIndex = menuArray.indexOf(document.activeElement);

    if (event.key === 'ArrowDown') {
      const nextIndex = (currentIndex + 1) % menuArray.length;
      menuArray[nextIndex].focus();
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      const prevIndex = (currentIndex - 1 + menuArray.length) % menuArray.length;
      menuArray[prevIndex].focus();
      event.preventDefault();
    }
  });

  // log på
  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menubutton");
    const menu = document.getElementById("$menu-{label}");

    if (menuButton && menu) {
        menuButton.addEventListener("click", function () {
            const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
            menuButton.setAttribute("aria-expanded", !isExpanded);
            menu.style.display = isExpanded ? "none" : "block";
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
                menu.style.display = "none";
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    }
  });
