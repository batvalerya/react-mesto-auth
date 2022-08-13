export const BASE_URL = 'https://auth.nomoreparties.co';

const handleServerResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const register = ({email, password}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers,
        body: JSON.stringify({email, password})
      })
      .then((response) => {
        return handleServerResponse(response);
    });
};

export const authorize = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers,
        body: JSON.stringify({email, password})
      })
      .then((response) => {
        return handleServerResponse(response);
    });
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            ...headers,
            "Authorization" : `Bearer ${token}`
        }
      })
      .then((response) => {
        return handleServerResponse(response);
    });
}
