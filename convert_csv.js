// Array to store all users' data
let allUsersData = [];

// Get references to the form and submit button
const form = document.getElementById('registration-form');
const submitBtn = document.getElementById('submit-btn');

// Add an event listener to the submit button
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    
    // Collect the form data
    const formData = {
        name: form.name.value,       // Get the value of the "name" field
        email: form.email.value,     // Get the value of the "email" field
        password: form.password.value // Get the value of the "password" field
    };

    // Add the current user's data to the array
    allUsersData.push(formData);
    
    // Clear the form fields
    form.reset();
    
    // Optionally, you can show a message to the user that their data was added
    alert("User data added! You can add another user or download the CSV file.");
});

// Function to download the CSV file with all users' data
function downloadCSV() {
    if (allUsersData.length === 0) {
        alert("No data to download!");
        return;
    }

    // Create the CSV header
    let csvContent = "name,email,password\n";
    
    // Add each user's data to the CSV content
    allUsersData.forEach(userData => {
        const row = `${userData.name},${userData.email},${userData.password}\n`;
        csvContent += row;
    });

    // Create a Blob (a type of file) with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv' });
    
    // Use the FileSaver.js library to save the file
    saveAs(blob, 'all_users_data.csv'); // The file will be named "all_users_data.csv"
}

// Add a button in your HTML to download the CSV file
