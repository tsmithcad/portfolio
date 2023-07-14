async function displayRoles() {
    // Fetch the list of HTML file names from the "/projects" endpoint
    const response = await fetch('templates/template-roles.html');
    const htmlFragment = await response.text();

    // Get the container element where the projects will be displayed
    const welcomeContainer = document.getElementById('welcome-container');
    
    // Create a new div element to hold the HTML fragment
    const div = document.createElement('div');
    div.innerHTML = htmlFragment;

    // Append the div element to the projects container
    if(welcomeContainer != null) {
      welcomeContainer.appendChild(div);
      console.log('welcome component created!');
    }
  }

// fetch and display the html project files
displayRoles();