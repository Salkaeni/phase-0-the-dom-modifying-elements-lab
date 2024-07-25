// Step 1: Remove the main#main element
const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.remove();
}

// Step 2: Create a new <h1> element and assign it to newHeader variable
const newHeader = document.createElement("h1");

// Step 3: Set the id of newHeader to 'victory'
newHeader.id = "victory";

// Step 4: Set the text content of newHeader
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the newHeader to the body
document.body.append(newHeader);
