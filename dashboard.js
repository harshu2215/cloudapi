document.getElementById('submitHealthData').addEventListener('click', () => {
    // Handle health data submission
    const sleep = document.getElementById('sleep').value;
    const exercise = document.getElementById('exercise').value;
    const mood = document.getElementById('mood').value;

    // Call your API to submit health data
    console.log('Submitting health data:', { sleep, exercise, mood });
});

document.getElementById('summaryPage').addEventListener('click', () => {
    // Redirect to summary page
    window.location.href = 'summary.html';
});

document.getElementById('logout').addEventListener('click', () => {
    // Handle logout
    localStorage.removeItem('token');  // Assuming you're storing JWT token
    window.location.href = 'login.html';  // Redirect to login page after logout
});
