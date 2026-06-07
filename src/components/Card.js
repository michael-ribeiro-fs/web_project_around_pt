class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClickCallback = handleImageClick;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle("card__like-button_is-active");
  }

  _handleDeleteClick() {
    if (confirm("Tem certeza que deseja excluir este cartão?")) {
      this._element.closest(".card").remove();
    }
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
    this._cardImage = this._element.querySelector(".card__image");

    this._setEventListeners();
    this._element.querySelector(".card__title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._element;
  }
}

export default Card;
