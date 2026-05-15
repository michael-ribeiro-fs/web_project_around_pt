//Mostra Mensagem de erro
function showInputError(inputElement, errorMessage) {
  //Acha o span
  const errorElement = document.querySelector(
    `.popup__error_type_${inputElement.name}`,
  );

  //Atribui Mensagem de erro ao span
  errorElement.textContent = errorMessage;

  //adiciona classe para span se tornar visivel
  errorElement.classList.add("popup__error_visible");
}

//Remove mensagem de erro
function hideInputError(inputElement) {
  //Acha o span
  const errorElement = document.querySelector(
    `.popup__error_type_${inputElement.name}`,
  );

  //Remove a classe que o torna visivel
  errorElement.classList.remove("popup__error_visible");

  //Limpar texto de erro
  errorElement.textContent = "";
}

//Checando validade do input
function checkInputValidity(inputElement) {
  //É Inválido?
  if (!inputElement.validity.valid) {
    //Mostre a Mensagem de erro
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    //Senão, apaga a mensagem de erro
    hideInputError(inputElement);
  }
}
//Tem algum input iválido?
function hasInvalidInput(inputList) {
  //Retorne algum nesta lista de input
  return inputList.some(function (inputElement) {
    //Algum que esteja inválido
    return !inputElement.validity.valid;
  });
}

//Como está o estado? Vou alterar o botão
function toggleButtonState(inputList, buttonElement) {
  //Se estiver inválido
  if (hasInvalidInput(inputList)) {
    //Desativar botão
    buttonElement.disabled = true;
    //E adiciona as características de disabled
    buttonElement.classList.add("popup__button_disabled");
  } else {
    //Mas se estiver válido (Tudo certo)
    //Ativar botãp
    buttonElement.disabled = false;
    //E remover caracteristicas de botão disabled
    buttonElement.classList.remove("popup__button_disabled");
  }
}

//Estou ouvindo...
function setEventListeners(formElement) {
  //Pega lista de inputs
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));

  //Pega Botão equivalente
  const buttonElement = formElement.querySelector(".popup__button");

  //Botão começa desativado
  toggleButtonState(inputList, buttonElement);

  //Listener de digitação a cada input
  inputList.forEach(function (inputElement) {
    //Ouça o input
    inputElement.addEventListener("input", function () {
      //Input é válido?
      checkInputValidity(inputElement);

      //Atualize os botões
      toggleButtonState(inputList, buttonElement);
    });
  });
}

//Procurando formulário e aplicando validação
function enableValidation() {
  //Procurando formulários
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  //Achou formulário? Comece a escutar
  formList.forEach(function (formElement) {
    setEventListeners(formElement);
  });
}

//Resetar validação ao reabrir
function resetValidation(formElement) {
  //Todos os input do formulário e botões
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");

  //Ocultar erro de input para cada input
  inputList.forEach(function (inputElement) {
    hideInputError(inputElement);
  });

  //Desativa botão novamente
  toggleButtonState(inputList, buttonElement);
}

// Chama a função principal no final
enableValidation();
