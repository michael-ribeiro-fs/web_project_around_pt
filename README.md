# Around The U.S.

> Uma galeria fotográfica interativa onde usuários podem compartilhar, visualizar e gerenciar fotos de lugares favoritos pelos Estados Unidos.

---

## 📋 Sobre o Projeto

O **Around The U.S.** é uma aplicação web responsiva desenvolvida para praticar conceitos modernos de desenvolvimento front-end utilizando **HTML, CSS e JavaScript puro**.

A plataforma permite que usuários adicionem novas imagens à galeria, curtam fotos, removam cartões e editem informações do perfil em uma interface limpa, dinâmica e focada na experiência visual.

---

## ✨ Funcionalidades

- 🖼️ Adicionar novos cartões com imagem e título
- 🗑️ Remover cartões da galeria
- ❤️ Curtir e descurtir imagens
- ✏️ Editar informações do perfil
- 🔍 Abrir imagens em modal ampliado
- ✅ Validação de formulários em tempo real
- ⌨️ Fechamento de popups com `ESC` ou clique no overlay
- 📱 Layout totalmente responsivo

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**
- **CSS3**
- **JavaScript ES6+**
- **Programação Orientada a Objetos (POO)**
- **ES Modules**
- **Metodologia BEM**
- **Normalize.css**

---

## 🧠 Estrutura do Projeto

O projeto foi organizado utilizando separação de responsabilidades e modularização do JavaScript para facilitar manutenção e escalabilidade.

### Organização dos Scripts

| Arquivo            | Responsabilidade                        |
| ------------------ | --------------------------------------- |
| `Card.js`          | Criação e gerenciamento dos cartões     |
| `FormValidator.js` | Validação dos formulários               |
| `utils.js`         | Funções utilitárias de modal            |
| `index.js`         | Inicialização e integração da aplicação |

---

## 📁 Estrutura de Pastas

```bash id="sl8x2d"
.
├── blocks
│   ├── card.css
│   ├── cards.css
│   ├── content.css
│   ├── footer.css
│   ├── header.css
│   ├── page.css
│   ├── popup.css
│   └── profile.css
│
├── images
├── pages
│   └── index.css
│
├── scripts
│   ├── Card.js
│   ├── FormValidator.js
│   ├── index.js
│   └── utils.js
│
├── vendor
│   ├── fonts
│   ├── fonts.css
│   └── normalize.css
│
└── index.html
```

---

## 🚀 Como Executar

```bash id="2s7xqd"
# Clone o repositório
git clone https://github.com/michael-ribeiro-fs/web_project_around_pt

# Entre na pasta do projeto
cd web_project_around_pt
```

Depois, abra o projeto utilizando o **Live Server** no VS Code.

> O projeto utiliza módulos ES6, portanto o `index.html` não deve ser aberto diretamente no navegador.

---

## 🔮 Próximas Melhorias

- Integração com backend/API
- Persistência de dados
- Sistema de autenticação
- Melhorias de acessibilidade
- Otimização de performance
- Internacionalização (i18n)

---

## 🔗 Repositório

GitHub: https://github.com/michael-ribeiro-fs/web_project_around_pt

# Around The U.S.

![Preview do projeto](./images/preview.png)

> Uma galeria fotográfica interativa...
