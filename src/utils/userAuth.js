export const BASE_URL = 'https://auth.nomoreparties.co';

const handleServerResponse = (response) => {
    response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`)
}

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const onRegister = ({email, password}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers,
        body: JSON.stringify({email, password})
      })
      .then((response) => {
        handleServerResponse(response);
    });
};

export const authorize = ({email: identifier, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers,
        body: JSON.stringify({identifier, password})
      })
      .then((response) => {
        handleServerResponse(response);
    });
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            ...headers,
            'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        handleServerResponse(response);
    });
}
