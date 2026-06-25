import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(".popup__button");
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();

      const originalText = this._submitButton.textContent;
      this._submitButton.textContent = "Salvando...";
      this._submitButton.disabled = true;

      const result = this._handleFormSubmit(this._getInputValues());

      if (result instanceof Promise) {
        result
          .then(() => {
            this._submitButton.textContent = originalText;
            this._submitButton.disabled = false;
            this.close();
          })
          .catch((err) => {
            this._submitButton.textContent = originalText;
            this._submitButton.disabled = false;
            console.error("Erro no submit:", err);
          });
      } else {
        this._submitButton.textContent = originalText;
        this._submitButton.disabled = false;
        this.close();
      }
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;
