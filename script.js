document.addEventListener("DOMContentLoaded", function() {
    // Get the file input and file list container
const uploadInput = document.getElementById("upload");
const fileListContainer = document.getElementById("fileList");
 
// Dynamically update the year in the footer
 document.getElementById("currentYear").textContent = new Date().getFullYear();

// Store all uploaded files in an array
let allFiles = [];

// Listen for file selection changes
uploadInput.addEventListener("change", function() {
    // Get the selected files from the current input
    const files = Array.from(uploadInput.files);

    // Add the new files to the allFiles array
    allFiles = allFiles.concat(files);

    // Clear the existing list in the container (to rebuild it with all files)
    fileListContainer.innerHTML = "";

    // Create an unordered list element to display the file names
    const ul = document.createElement("ul");

    // Loop through all files and create list items for each file
    for (let i = 0; i < allFiles.length; i++) {
        const li = document.createElement("li");
        li.textContent = allFiles[i].name;
        ul.appendChild(li);
    }

    // Append the list to the container
    fileListContainer.appendChild(ul);
});

});
