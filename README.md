# Around The U.S.

> Uma galeria fotográfica interativa que conecta pessoas aos lugares mais belos dos Estados Unidos.

---

## Problema 📋

Usuários que viajam pelo território americano não possuem um espaço simples, visual e interativo para **registrar, compartilhar e curtir** os lugares que visitam. Plataformas genéricas de redes sociais são pesadas, cheias de distrações e não focam na experiência visual das fotografias.

---

## Solução 🎯

**Around The U.S.** é uma página web interativa e responsiva onde os usuários podem:

- 🖼️ **Adicionar** novas fotos com nome e link de imagem
- 🗑️ **Remover** fotos que não desejam mais exibir
- ❤️ **Curtir** as fotos favoritas da galeria
- ✏️ **Editar** o perfil do usuário com nome e descrição
- ✅ **Validar** formulários em tempo real com feedback instantâneo
- ⌨️ **Fechar pop-ups** clicando fora (overlay) ou pressionando a tecla ESC

Tudo isso em uma interface limpa, focada na experiência visual, sem ruídos ou distrações.

---

## Arquitetura 🏗️

O projeto segue a metodologia **BEM (Block Element Modifier)** para organização do CSS, garantindo escalabilidade e manutenibilidade do código.

```
around-the-us/
├── blocks/               # Componentes CSS isolados (BEM)
│   ├── card.css          # Estilo do card individual
│   ├── cards.css         # Grid de cards
│   ├── content.css       # Área principal de conteúdo
│   ├── footer.css        # Rodapé
│   ├── header.css        # Cabeçalho com logo
│   ├── page.css          # Configurações globais da página
│   ├── popup.css         # Modais (adicionar foto / editar perfil)
│   └── profile.css       # Seção de perfil do usuário
│
├── images/               # Assets visuais e ícones SVG
│
├── pages/
│   └── index.css         # Ponto de entrada CSS (importa todos os blocos)
│
├── scripts/
│   ├── index.js          # Lógica interativa (adicionar, remover, curtir)
│   └── validate.js       # Validação de formulários (Sprint 9)
│
├── vendor/               # Dependências externas
│   ├── fonts/            # Fonte Inter (Black, Medium, Regular)
│   ├── fonts.css         # Declaração @font-face
│   └── normalize.css     # Reset CSS cross-browser
│
└── index.html            # Estrutura semântica da aplicação
```

---

## Decisões Técnicas 🧠

| Decisão                         | Justificativa                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **HTML Semântico**              | Tags como `<section>`, `<article>`, `<header>` e `<footer>` melhoram o SEO e a acessibilidade da página para leitores de tela              |
| **CSS Grid Layout**             | Permite criar a galeria de fotos de forma responsiva e flexível, adaptando automaticamente o número de colunas conforme o tamanho da tela  |
| **Metodologia BEM**             | Cada bloco CSS é isolado e independente, facilitando manutenção e evitando conflitos de estilos                                            |
| **Vanilla JavaScript**          | Sem dependências externas de frameworks — mantém o projeto leve e demonstra domínio dos fundamentos do JS                                  |
| **Validação nativa HTML5 + JS** | Utiliza `required`, `minlength`, `maxlength`, `type="url"` e a propriedade `ValidityState` para feedback imediato sem bibliotecas externas |
| **Fechamento de pop-ups**       | Clicar fora (overlay) ou tecla ESC para melhor experiência do usuário e acessibilidade                                                     |
| **Fonte Inter (local)**         | Carregada via `@font-face` com arquivos `.woff2`, eliminando a dependência de CDNs externas e melhorando a performance                     |
| **SVGs para ícones**            | Ícones vetoriais garantem nitidez em qualquer resolução de tela sem custo de carregamento adicional                                        |
| **normalize.css**               | Garante consistência visual entre diferentes navegadores sem resetar todos os estilos                                                      |

---

## Novas Funcionalidades ✨

- ✅ **Validação em tempo real** dos formulários "Editar Perfil" e "Novo Local"
- ✅ **Botão de envio desativado** enquanto houver campos inválidos
- ✅ **Mensagens de erro padrão do navegador** para feedback consistente
- ✅ **Fechar pop-up ao clicar fora** (na sobreposição escura)
- ✅ **Fechar pop-up com a tecla ESC** para melhor acessibilidade
- ✅ **Reset automático da validação** ao reabrir formulários

---

## Como Executar 🚀

Por ser um projeto de **HTML, CSS e JS puro**, não há necessidade de instalação de dependências ou build tools.

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Git instalado na máquina

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/michael-ribeiro-fs/web_project_around_pt

# 2. Acesse a pasta do projeto
cd web_project_around_pt

# 3. Abra o arquivo no navegador
# Opção A: Abra o index.html diretamente pelo explorador de arquivos
# Opção B: Use a extensão Live Server no VS Code para hot-reload
```

> 💡 **Dica:** Para a melhor experiência de desenvolvimento, utilize a extensão **Live Server** no VS Code e acesse via `http://127.0.0.1:5500`.

---

## Validação dos Formulários 📝

| Campo                           | Regras de Validação             |
| ------------------------------- | ------------------------------- |
| **Nome** (Editar Perfil)        | Obrigatório, 2 a 40 caracteres  |
| **Sobre** (Editar Perfil)       | Obrigatório, 2 a 200 caracteres |
| **Título** (Novo Local)         | Obrigatório, 2 a 30 caracteres  |
| **Link da Imagem** (Novo Local) | Obrigatório, URL válida         |

Todos os campos utilizam mensagens de erro padrão do navegador e o botão de envio permanece desativado até que todos os campos estejam válidos.

---

## Próximos Passos 🔮

- [ ] 🔐 Adicionar autenticação de usuário com JWT
- [ ] ☁️ Integrar backend para persistência de dados (Node.js + MongoDB)
- [ ] 📱 Melhorar a experiência mobile com gestos de toque (swipe para curtir)
- [ ] 🗺️ Adicionar mapa interativo vinculando fotos às localizações geográficas
- [ ] 🌐 Suporte a múltiplos idiomas (i18n)
- [ ] ♿ Auditoria completa de acessibilidade (WCAG 2.1)
- [ ] ⚡ Lazy loading nas imagens para melhor performance

---

## Repositório 🔗

[github.com/michael-ribeiro-fs/web_project_around_pt](https://github.com/michael-ribeiro-fs/web_project_around_pt)

```

```
