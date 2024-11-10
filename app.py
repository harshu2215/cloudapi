<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Dashboard</title>
</head>
<body data-page="dashboard">
    <div class="header">
        <h1>Health Dashboard</h1>
        <div class="user-id">22MID0278</div>
    </div>

    <div class="container">
        <h2>Update Your Health Data</h2>
        <div class="form-group">
            <label for="sleep">Hours of Sleep:</label>
            <input type="number" id="sleep" placeholder="Enter hours of sleep">
        </div>
        <div class="form-group">
            <label for="exercise">Minutes of Exercise:</label>
            <input type="number" id="exercise" placeholder="Enter minutes of exercise">
        </div>
        <div class="form-group">
            <label for="mood">Mood:</label>
            <input type="text" id="mood" placeholder="Enter your mood">
        </div>

        <!-- Submit Health Data Button -->
        <button id="submitHealthData" class="btn">Submit Health Data</button>

        <!-- Book an Appointment Button -->
        <button onclick="window.location.href='appointment.html'" class="btn">Book an Appointment</button>

        <!-- Go to Summary Button -->
        <button id="summaryPage" class="btn">Go to Summary</button>
    </div>

    <!-- Logout Button (Fixed at the bottom) -->
    <div class="logout-container">
        <button id="logout" class="btn logout">Logout</button>
    </div>

    <script src="dashboard.js" defer></script>
</body>
</html>
