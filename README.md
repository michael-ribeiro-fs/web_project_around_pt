# Around The U.S.

> Uma galeria fotográfica interativa onde usuários podem compartilhar, visualizar e gerenciar seus lugares favoritos, com dados persistidos em servidor.

## Problema📋

Criar uma aplicação web responsiva capaz de gerenciar cartões de imagens dinamicamente, permitindo edição de perfil, criação de novos cartões, visualização ampliada de imagens, validação de formulários e persistência de dados via API, mantendo uma arquitetura escalável e organizada.

## Solução🎯

O projeto foi desenvolvido utilizando JavaScript moderno com Programação Orientada a Objetos (POO), modularização via ES Modules e separação de responsabilidades através de componentes reutilizáveis, agora totalmente integrado a uma API REST para persistência de dados.

A aplicação permite:

- Adicionar novos cartões (persistidos no servidor)
- Remover cartões, com popup de confirmação
- Curtir e descurtir imagens, com toggle visual
- Editar informações do perfil (nome e descrição)
- Editar foto de perfil (avatar)
- Visualizar imagens ampliadas
- Validar formulários em tempo real
- Fechar popups por overlay ou tecla ESC
- Exibir feedback visual ("Salvando...") durante requisições
- Tratar erros de requisições
- Navegação responsiva para diferentes dispositivos

![Preview do Projeto](./images/preview.png)

## Arquitetura🏗️

O projeto segue uma arquitetura baseada em componentes, com uma classe dedicada à comunicação com a API.

```text
src
├── components
│   ├── Api.js
│   ├── Card.js
│   ├── FormValidator.js
│   ├── Popup.js
│   ├── PopupWithConfirmation.js
│   ├── PopupWithForm.js
│   ├── PopupWithImage.js
│   ├── Section.js
│   └── UserInfo.js
│
└── page
    ├── index.css
    └── index.js
```

### Principais Componentes

| Classe                | Responsabilidade                                  |
| --------------------- | ------------------------------------------------- |
| Api                   | Comunicação com o servidor (CRUD completo)        |
| Card                  | Criação e gerenciamento dos cartões               |
| FormValidator         | Validação dos formulários                         |
| Popup                 | Classe base para gerenciamento de modais          |
| PopupWithConfirmation | Popup de confirmação de ações (ex.: exclusão)     |
| PopupWithForm         | Popup especializado para formulários, com loading |
| PopupWithImage        | Popup especializado para visualização de imagens  |
| Section               | Renderização dinâmica de coleções                 |
| UserInfo              | Gerenciamento das informações do perfil           |

## Decisões Técnicas🧠

O projeto utiliza:

- HTML5 semântico
- CSS3
- JavaScript ES6+
- Programação Orientada a Objetos (POO)
- Encapsulamento (métodos privados com `_`)
- Herança (`Popup` como classe base)
- Polimorfismo (3 subclasses de `Popup`)
- ES Modules
- Metodologia BEM
- Normalize.css
- Integração com API REST (Fetch API + `Promise.all`)

A estrutura foi organizada para facilitar manutenção, reutilização de código, baixo acoplamento entre classes e responsabilidade única por componente.

## Como Executar🚀

```bash
# Clone o repositório
git clone https://github.com/michael-ribeiro-fs/web_project_around_pt

# Entre na pasta do projeto
cd web_project_around_pt
```

Abra o projeto utilizando o Live Server do VS Code.

> Como o projeto utiliza módulos ES6, o arquivo index.html não deve ser aberto diretamente pelo navegador.

## Endpoints📊

| Método | Endpoint           | Função                         |
| ------ | ------------------ | ------------------------------ |
| GET    | `/users/me`        | Buscar perfil do usuário       |
| GET    | `/cards`           | Buscar todos os cartões        |
| PATCH  | `/users/me`        | Editar perfil (nome/descrição) |
| PATCH  | `/users/me/avatar` | Editar foto de perfil          |
| POST   | `/cards`           | Adicionar novo cartão          |
| PUT    | `/cards/:id/likes` | Curtir cartão                  |
| DELETE | `/cards/:id/likes` | Descurtir cartão               |
| DELETE | `/cards/:id`       | Excluir cartão                 |

## Próximos Passos🔮

- Sistema de autenticação (login/registro)
- Gerenciamento de múltiplos usuários
- Testes automatizados (unitários e de integração)
- Melhorias de acessibilidade
- Otimizações de desempenho
- Deploy em produção

## Licença📝

MIT

Projeto desenvolvido durante o programa de Desenvolvimento Web da TripleTen.
