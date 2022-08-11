class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _handleServerResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
          return Promise.reject(`Ошибка: ${res.status}`);
      }
    }

    _request(path) {
      return fetch(`${this._baseUrl}${path}`, {
            headers: this._headers,
        })
        .then(this._handleServerResponse);
    }

    getUserInfo() {
        return this._request('/users/me');
    }

    getInitialCards() {
        return this._request('/cards');
    }

    updateUserInfo({name, about}) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            name,
            about,
          })
      })
      .then(this._handleServerResponse)
    }

    addNewCard({name, link}) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name,
          link,
        })
      })
      .then(this._handleServerResponse)
    }

    addLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers,
      })
      .then(this._handleServerResponse)
    }

    removeLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(this._handleServerResponse)
    }

    removeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(this._handleServerResponse)
    }

    editProfileAvatar({avatar}) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            avatar,
          })
      })
      .then(this._handleServerResponse)
    }

    changeLikeCardStatus(cardId, isLiked) {
     const likeCardStatus = isLiked ? this.removeLike(cardId) : this.addLike(cardId)
     return likeCardStatus
    }

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '1dbd9da5-77e9-4a35-93ab-318f7b7209f2',
    'Content-Type': 'application/json'
  }
});


