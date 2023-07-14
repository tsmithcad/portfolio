async function displayHUD() {  
    // Fetch the list of HTML file names from the "/projects" endpoint
    const response = await fetch('templates/template-hud.html');
    const htmlFragment = await response.text();
  
    // Get the container element where the projects will be displayed
    const hudContainer = document.getElementById('hud-container');
    
    // Create a new div element to hold the HTML fragment
    const div = document.createElement('div');
    div.innerHTML = htmlFragment;
    div.style.font = 'absolute';
  
      // Append the div element to the projects container
      if(hudContainer != null) {
        hudContainer.appendChild(div);
        console.log('hud component created!');
      }
  }

// Replace the headshot image with your own Google Drive image
// const headshotImage = document.getElementById('headshot-image');
// headshotImage.src = 'https://drive.google.com/uc?id=1_Hp_806n5G1wf8u6LbcMJL3zKFkJO86K';

// fetch and display the html component files
displayHUD();
