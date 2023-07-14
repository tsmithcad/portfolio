async function projectDetailButtonClick_EventHandler() {
    console.log('subcribing to project detail button click event...');
    const coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", toggleContentDisplay);
    }
}

function toggleContentDisplay() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}


async function displayProjects() {
    console.log('fetch projects...');

    // Fetch the list of HTML file names from the "/prsojects" endpoint
    const response = await fetch('projects/index.json');
    const fileNames = await response.json();

    // Get the container element where the projects will be displayed
    const projectsContainer = document.getElementById('projects-container');

    // Iterate over each file name
    // Iterate over each file name
    for (const fileName of fileNames) { // Fetch the HTML fragment for the current file
        const response = await fetch(`projects/${fileName}`);
        const htmlFragment = await response.text();

        // Create a new div element to hold the HTML fragment
        const div = document.createElement('div');
        div.innerHTML = htmlFragment;
    

        // Append the div element to the projects container
        if (projectsContainer != null) {
            projectsContainer.appendChild(div);
            console.log(`created: ${fileName}`);
        }
    }
    projectDetailButtonClick_EventHandler();
}

// fetch and display the html project files
// displayProjectForm();
displayProjects()
