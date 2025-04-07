// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the form element
    const helpForm = document.getElementById('helpForm');

    // Add an event listener for form submission
    helpForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Get user input values
        const location = document.getElementById('location').value;
        const emergencyType = document.getElementById('emergency').value;

        // Display the submitted information
        alert(`Help Request Sent!\nLocation: ${location}\nEmergency Type: ${emergencyType}`);

        // Optionally, clear the form after submission
        helpForm.reset();
    });
});