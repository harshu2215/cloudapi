document.getElementById('appointmentForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const doctor = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointment_date').value;

    const token = localStorage.getItem('token');  // Assuming JWT is stored in localStorage

    const response = await fetch('http://localhost:5000/appointments/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            doctor: doctor,
            appointment_date: appointmentDate
        })
    });

    if (response.ok) {
        alert('Appointment booked successfully');
        window.location.href = 'dashboard.html';  // Redirect back to dashboard after booking
    } else {
        alert('Failed to book appointment');
    }
});

// Back to Dashboard
document.getElementById('backToDashboard').addEventListener('click', () => {
    window.location.href = 'dashboard.html';
});
