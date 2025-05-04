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

export { signup, signin, checkRes };
