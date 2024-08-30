// Function to get date from URL hash
function getDateFromHash() {
    const hash = window.location.hash.substring(1);
    return hash ? new Date(hash) : null;
}

// Function to set date in URL hash
function setDateInHash(date) {
    window.location.hash = date.toISOString().split('T')[0];
}

// Function to count Sundays
function countSundays(futureDate) {
    const resultElement = document.getElementById('result');
    const postitElement = document.getElementById('postit');
    const today = new Date();

    // Check if the input date is valid and in the future
    if (isNaN(futureDate.getTime()) || futureDate <= today) {
        resultElement.textContent = "Introduce una fecha válida (en el futuro)";
        postitElement.style.display = 'block';
        return;
    }

    let sundayCount = 0;
    let currentDate = new Date(today.getTime());

    // Set currentDate to the next Sunday
    currentDate.setDate(currentDate.getDate() + (7 - currentDate.getDay()) % 7);

    // Count Sundays
    while (currentDate < futureDate) {
        sundayCount++;
        currentDate.setDate(currentDate.getDate() + 7);
    }

    resultElement.textContent = `Pat, quedan sólo ${sundayCount} Domingos! 😄`;
    postitElement.style.display = 'block';

    // Update URL with the selected date
    setDateInHash(futureDate);
}

// Function to handle button click
function handleCountClick() {
    const futureDateInput = document.getElementById('futureDate');
    const futureDate = new Date(futureDateInput.value);
    countSundays(futureDate);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    const futureDateInput = document.getElementById('futureDate');
    const today = new Date().toISOString().split('T')[0];
    futureDateInput.setAttribute('min', today);
    
    // Hide the post-it note initially
    document.getElementById('postit').style.display = 'none';

    // Check for date in URL
    const hashDate = getDateFromHash();
    if (hashDate && hashDate > new Date()) {
        futureDateInput.value = hashDate.toISOString().split('T')[0];
        countSundays(hashDate);
    }

    // Add event listener to the button
    document.querySelector('button').addEventListener('click', handleCountClick);
});

// Listen for hash changes
window.addEventListener('hashchange', function() {
    const hashDate = getDateFromHash();
    if (hashDate) {
        document.getElementById('futureDate').value = hashDate.toISOString().split('T')[0];
        countSundays(hashDate);
    }
});