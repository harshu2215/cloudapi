document.addEventListener("DOMContentLoaded", () => {
    const currentPage = document.body.dataset.page;

    if (currentPage === "summary") {
        // Fetch and display summary data
        fetchSummaryData();

        document.getElementById("logout").addEventListener("click", () => {
            localStorage.removeItem("token");
            window.location.href = "index.html"; // Redirect to login page
        });

        document.getElementById("backToDashboard").addEventListener("click", () => {
            window.location.href = "dashboard.html"; // Redirect to dashboard
        });
    }
});

async function fetchSummaryData() {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch("http://127.0.0.1:5000/dashboard", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            displaySummaryData(data);
        } else {
            console.error("Failed to fetch summary data");
        }
    } catch (error) {
        console.error("Error fetching summary data:", error);
    }
}

function displaySummaryData(data) {
    const summaryDataDiv = document.getElementById("summaryData");
    summaryDataDiv.innerHTML = ""; // Clear previous summary
    data.forEach(item => {
        const summaryItem = document.createElement("div");
        summaryItem.innerHTML = `
            <p>Date: ${item.date}, Sleep: ${item.sleep} hours, Exercise: ${item.exercise} minutes, Mood: ${item.mood}</p>
        `;
        summaryDataDiv.appendChild(summaryItem);
    });
}
