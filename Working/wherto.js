document.addEventListener('DOMContentLoaded', function() {
    // Get the current date
    const today = new Date();
    
    // Format it as YYYY-MM-DD for the date input
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    // Set the default value for the date input
    document.getElementById('date').value = formattedDate;
  });

const fromStation = document.getElementById('fromstation');
const toStation = document.getElementById('tostation');
const date = document.getElementById('date');
const searchButton = document.getElementById('find-train');