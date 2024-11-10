document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const messageDiv = document.getElementById("message");

    // Registration
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;
        const role = document.getElementById("register-role").value;

        const userData = { email, password, role };

        try {
            const response = await fetch("http://127.0.0.1:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                messageDiv.textContent = "Registration successful! Redirecting...";
                messageDiv.style.color = "green";
                setTimeout(() => {
                    window.location.href = "dashboard.html"; // Redirect to your next page
                }, 2000);
            } else {
                const errorData = await response.json();
                messageDiv.textContent = errorData.message || "Registration failed. Please try again.";
                messageDiv.style.color = "red";
            }
        } catch (error) {
            console.error("Error during registration:", error);
            messageDiv.textContent = "An error occurred. Please try again.";
            messageDiv.style.color = "red";
        }
    });

    // Login
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        const loginData = { email, password };

        try {
            const response = await fetch("http://127.0.0.1:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                const responseData = await response.json();
                messageDiv.textContent = "Login successful! Redirecting...";
                messageDiv.style.color = "green";
                setTimeout(() => {
                    window.location.href = "dashboard.html"; // Redirect to your dashboard
                }, 2000);
            } else {
                const errorData = await response.json();
                messageDiv.textContent = errorData.message || "Login failed. Please try again.";
                messageDiv.style.color = "red";
            }
        } catch (error) {
            console.error("Error during login:", error);
            messageDiv.textContent = "An error occurred. Please try again.";
            messageDiv.style.color = "red";
        }
    });
});
