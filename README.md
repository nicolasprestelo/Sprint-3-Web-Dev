# Hello World Corporation — Sprint 3

Aplicação acadêmica desenvolvida para a **Sprint 3 de Web Development**, com foco na organização de anotações e conteúdos de estudo.

O projeto conta com uma **landing page responsiva**, sistema de autenticação demonstrativo e uma área de estudos protegida, além de melhorias implementadas durante a evolução da aplicação.

## Funcionalidades

* Landing page com apresentação do projeto, funcionalidades, benefícios e equipe.
* **Seção do Protótipo JOVI** — preview interativo com animação discreta e acesso ao protótipo HTML.
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

### Protótipo JOVI

O **Protótipo JOVI** foi desenvolvido com o auxílio do Claude e está integrado à landing page da aplicação. A seção apresenta:

* Preview visual do protótipo com animação discreta
* Moldura de smartphone responsiva
* Botão de acesso direto ao protótipo HTML interativo (`public/jovi-prototype.html`)
* Componente React simplificado (`PrototypeSection.jsx`) que não transforma o HTML do protótipo em componentes React, mantendo-o como arquivo independente

### Outras utilizações de IA

A utilização da IA esteve principalmente relacionada a:

* Auxílio na **migração da aplicação para React**.
* Apoio na organização e componentização da estrutura do projeto.
* Integração do **Protótipo JOVI** à landing page com estilo e animações.
* Implementação e revisão de **validações**.
* Auxílio na implementação de **novas funções e melhorias**.
* Sugestões para organização e correção de código.
* Apoio na identificação e resolução de problemas durante o desenvolvimento.

A implementação, adaptação, testes e decisões finais sobre o código foram realizadas pela equipe responsável pelo projeto.

## Execução local

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Para gerar e visualizar a versão de produção:

```bash
npm run build
npm run preview
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
│   ├── PrototypeSection.jsx
│   ├── ProtectedRoute.jsx
│   ├── TeamSection.jsx
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
    ├── login.css
    └── prototype.css
```

### Protótipo

```text
public/
└── jovi-prototype.html
```

O arquivo `jovi-prototype.html` é um protótipo interativo independente, acessível através do botão "Explorar protótipo" na seção dedicada da landing page.

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

O projeto está disponível online através da Vercel e GitHub:

**https://github.com/nicolasprestelo/Sprint-3-Web-Dev**

**https://v0-sprint-3-web-dev-hello-world.vercel.app/**

## Licença

Projeto acadêmico desenvolvido para a **Sprint 3 de Web Development — Hello World Corporation**.
