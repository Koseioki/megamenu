  // Get references to the button and the content
  const button = document.getElementById('toggleButton');
  const content = document.getElementById('toggleContent');

  // by default the content is hidden
  // content.style.display = 'none';

  // When the button is clicked,
  // 1. display the hidden div toggleContent
  // 2. set aria-expanded="true" or "false"
  // 3. change the button text inside the span to "▼" or "▲"
  // 4. set aria-label to "Expand dit liv" or "close dit liv"

  button.addEventListener('click', function() {
    if (content.style.display === 'none') {
      content.style.display = 'block';
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('span').textContent = '▼';
      button.setAttribute('aria-label', 'close dit liv');
    } else {
      content.style.display = 'none';
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('span').textContent = '▲';
      button.setAttribute('aria-label', 'Expand dit liv');
    }
  }
  );

  // when reaching the end of the content, focus the button