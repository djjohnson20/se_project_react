const baseUrl = "http://localhost:3001";

function checkRes(res) {
  return res.json().then((data) => {
    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

function signup({ name, avatarUrl, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      avatar: avatarUrl,
      email: email,
      password: password,
    }),
  }).then(checkRes);
}

function signin({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkRes);
}

function checkToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
}

export { signup, signin, checkToken, checkRes };
