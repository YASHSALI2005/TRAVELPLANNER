// In your frontend code
const API_URL = "https://travel-planner-sqnb.onrender.com";

// Example API call
fetch(`${API_URL}/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email, password })
})
.then(response => response.json())
.then(data => console.log(data));
