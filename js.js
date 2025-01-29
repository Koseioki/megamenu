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

  // when escape key is pressed, hide the content
  button.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      content.style.display = 'none';
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('span').textContent = '▼';
    }
  });



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

  // when escape key is pressed, hide the content
  button2.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      content2.style.display = 'none';
      button2.setAttribute('aria-expanded', 'false');
      button2.querySelector('span').textContent = '▼';
    }
  });