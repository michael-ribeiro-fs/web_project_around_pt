class Card {
  constructor(data, cardSelector, handleImageClick, confirmPopup, api, userId) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClickCallback = handleImageClick;
    this._confirmPopup = confirmPopup;
    this._api = api;

    this._id = data._id;
    this._ownerId = data.owner._id || data.owner;
    this._userId = userId;
    this._isLiked = data.isLiked;
  }

  _handleLikeClick() {
    const method = this._isLiked ? "unlikeCard" : "likeCard";

    this._api[method](this._id)
      .then((updatedCard) => {
        this._isLiked = updatedCard.isLiked;
        this._likeButton.classList.toggle("card__like-button_is-active");
      })
      .catch((err) => {
        console.error("Erro ao curtir/descurtir:", err);
      });
  }

  _handleDeleteClick() {
    this._confirmPopup.setSubmitAction(() => {
      this._api
        .deleteCard(this._id)
        .then(() => {
          this._element.remove();
          this._confirmPopup.close();
        })
        .catch((err) => {
          console.error("Erro ao excluir cartão:", err);
        });
    });
    this._confirmPopup.open();
  }

  _handleImageClick() {
    this._handleImageClickCallback(this._name, this._link);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.cloneNode(true)
      .querySelector(".card");
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeClick());

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteClick());

    this._cardImage.addEventListener("click", () => this._handleImageClick());
  }

  generateCard() {
    this._element = this._getTemplate();

    this._likeButton = this._element.querySelector(".card__like-button");
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_is-active");
    }

    this._cardImage = this._element.querySelector(".card__image");

    const deleteButton = this._element.querySelector(".card__delete-button");
    if (this._ownerId !== this._userId) {
      deleteButton.remove();
    }

    this._setEventListeners();
    this._element.querySelector(".card__title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._element;
  }
}

export default Card;
