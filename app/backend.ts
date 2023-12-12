export const registerUser = () => {
  fetch("http://localhost:3002/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: "Simon",
      last_name: "Atkins",
      email: "test@simon.com",
      password: "hello",
      password_confirmation: "hello",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

export const login = () => {
  fetch("http://localhost:3002/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "test@simon.com",
      password: "hello",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};
