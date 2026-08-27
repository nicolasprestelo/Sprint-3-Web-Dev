# Hello World Corporation — Sprint 3

Aplicação acadêmica desenvolvida para a **Sprint 3 de Web Development**, com foco na organização de anotações e conteúdos de estudo.

O projeto conta com uma **landing page responsiva**, sistema de autenticação demonstrativo e uma área de estudos protegida, além de melhorias implementadas durante a evolução da aplicação.

## Funcionalidades

* Landing page com apresentação do projeto, funcionalidades, benefícios e equipe.
* Login demonstrativo com validação de campos e mensagens de feedback.
* Dashboard protegido após a autenticação.
* Atalhos para anotações, flashcards e resumos.
* Persistência demonstrativa da sessão utilizando `localStorage`.
* Validações de entrada durante o processo de autenticação.
* Navegação entre páginas utilizando React Router.
* Layout responsivo para diferentes tamanhos de tela.
* Organização dos estilos CSS por contexto da aplicação.
* Componentização da interface utilizando React.

## Tecnologias

* React 19
* React Router 7
* Vite 7
* JavaScript com JSX
* CSS
* `localStorage`

## Uso de Inteligência Artificial

Durante o desenvolvimento e evolução do projeto, foi utilizado o **Claude** como ferramenta de apoio ao desenvolvimento.

A utilização da IA esteve principalmente relacionada a:

* Auxílio na **migração da aplicação para React**.
* Apoio na organização e componentização da estrutura do projeto.
* Implementação e revisão de **validações**.
* Auxílio na implementação de **novas funções e melhorias**.
* Sugestões para organização e correção de código.
* Apoio na identificação e resolução de problemas durante o desenvolvimento.

A implementação, adaptação, testes e decisões finais sobre o código foram realizadas pela equipe responsável pelo projeto.

## Execução local

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

Para gerar e visualizar a versão de produção:

```bash
pnpm build
pnpm preview
```

## Rotas

* `/` — página inicial.
* `/login` — tela de login.
* `/dashboard` — área de estudos protegida.

## Usuários de teste

A autenticação é **somente demonstrativa** e não deve ser utilizada em um ambiente de produção.

| Usuário | Senha |
| ------- | ----- |
| `admin` | `123` |
| `joao`  | `abc` |
| `maria` | `456` |

## Estrutura principal

```text
src/
├── App.jsx
├── main.jsx
├── auth/
│   ├── ContextoAutenticacao.jsx
│   └── armazenamento.js
├── components/
│   ├── FeatureSection.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── RotaProtegida.jsx
│   └── TeamSection.jsx
├── data/
│   ├── conteudo.js
│   └── equipe.js
├── pages/
│   ├── LandingPage.jsx
│   ├── PaginaLogin.jsx
│   └── PaginaPainel.jsx
└── styles/
    ├── dashboard.css
    ├── global.css
    ├── landing.css
    └── login.css
```

## Observações

* Não há backend ou banco de dados.
* As credenciais são fixas e servem apenas para demonstração.
* A sessão é armazenada no `localStorage` do navegador.
* O `vercel.json` mantém o fallback necessário para o React Router em produção.
* Os atalhos presentes no dashboard são elementos demonstrativos e não representam módulos independentes completos.

## Equipe

Os integrantes da equipe podem ser encontrados no arquivo **integrantes.txt**.a

Os integrantes da equipe também são definidos em `src/data/equipe.js` e renderizados pelo componente `TeamSection`.

## Deploy

O projeto está disponível online através da Vercel:

**https://sprint3-web-dev-psi.vercel.app/**

## Licença

Projeto acadêmico desenvolvido para a **Sprint 3 de Web Development — Hello World Corporation**.
