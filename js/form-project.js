async function displayProjectForm() { // Fetch the list of HTML file names from the "/projects" endpoint
    const response = await fetch('projects/create/form-project.html');
    const htmlFragment = await response.text();

    // Get the container element where the projects will be displayed
    const projectsForm = document.getElementById('projects-form');

    // Create a new div element to hold the HTML fragment
    const div = document.createElement('div');
    div.innerHTML = htmlFragment;

    // Append the div element to the projects container
    if (projectsForm != null) {
        projectsForm.appendChild(div);
        console.log('project form created!');
    }
}

document.getElementById('projectForm').addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('fetch project form values...');
    // Retrieve form field values
    const clientBenefits = document.getElementById('clientBenefits').value;
    const date = document.getElementById('date').value;
    const goal = document.getElementById('goal').value;
    const googledrivelink = document.getElementById('googledrivelink').value;
    const platform = document.getElementById('platform').value;
    const productName = document.getElementById('productName').value;
    const projectName = document.getElementById('projectName').value;
    const solution = document.getElementById('solution').value;
    const technologyTable = document.getElementById('technologyTable').value;
    const id = uuidv4(); // Generate a new UUID for the GUID field

    console.log('create project json');
    
    // Create project from form values
    const project = new Project(clientBenefits, date, goal, googledrivelink, id, platform, productName, projectName, solution, technologyTable);

    // Convert JSON object to string
    var jsonData = JSON.stringify(project);

    // Create file name
    var fileName = 'project-' + projectName.toLowerCase() + '-' + platform.toLowerCase() + '-' + func.toLowerCase() + '.json';

    // Create a new Blob object
    var blob = new Blob([jsonData], {type: 'application/json'});

    console.log('save project json file');
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Programmatically click the link to trigger the file download
    link.click();
    console.log('project json file downloaded!');
});
