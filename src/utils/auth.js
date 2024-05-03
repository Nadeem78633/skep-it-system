// auth.js - Service for managing authentication
export const isAuthenticated = () => {
  // Check if the user's token or remembered email is stored in local storage
  return localStorage.getItem('token') || localStorage.getItem('rememberEmail') ? true : false;
};

export const authenticate = (email, password, callback) => {
  // Here you would call your backend to verify the credentials
  // For this example, let's assume the credentials are correct
  const token = "user-token"; // Token received from backend after verification
  localStorage.setItem("token", token);
  callback(); // Invoke the callback function after setting the token
};

// userData.js - Simulated user data (replace with actual data from your backend)
const users = [
  { email: "user1@example.com", password: "password1" },
  { email: "user2@example.com", password: "password2" },
  // Add more users as needed
];

export const getUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};
