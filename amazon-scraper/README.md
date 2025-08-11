# 🛒 Amazon Product Scraper

Este projeto é um "Amazon Scraper" construído com uma arquitetura simples de back-end e front-end. O back-end é responsável por raspar os dados de produtos da Amazon, enquanto o front-end fornece uma interface amigável para interagir com a aplicação.

O objetivo é demonstrar a capacidade de construir uma aplicação web completa, desde a raspagem de dados até a visualização em uma interface de usuário.

## 🚀 Tecnologias Utilizadas

### Back-end
* **Bun**: Ambiente de execução para JavaScript e TypeScript.
* **Express**: Framework web para criar o servidor e o endpoint da API.
* **Axios**: Cliente HTTP para fazer requisições à página da Amazon.
* **JSDOM**: Biblioteca para analisar o HTML da página, criando uma representação do DOM.
* **TypeScript**: Para adicionar tipagem estática e garantir um código mais robusto.
* **CORS**: Middleware para permitir requisições do front-end para o back-end.

### Front-end
* **Vite**: Ferramenta de desenvolvimento para um ambiente de front-end rápido.
* **HTML**: Estrutura da página.
* **CSS**: Estilização da interface.
* **Vanilla JavaScript**: Lógica para interagir com a API e exibir os resultados.

## 🔧 Configuração e Instalação

Para rodar este projeto, você precisará ter o [Bun](https://bun.sh/) instalado em sua máquina.

### Back-end
1.  Navegue para a pasta do back-end:
    ```bash
    cd amazon-scraper
    ```
2.  Instale as dependências:
    ```bash
    bun install
    ```
3.  Inicie o servidor do back-end:
    ```bash
    bun run start
    ```
    O servidor estará rodando em `http://localhost:3000`.

### Front-end
1.  Abra um novo terminal e navegue para a pasta do front-end:
    ```bash
    cd amazon-scraper-frontend
    ```
2.  Instale as dependências:
    ```bash
    bun install
    ```
3.  Inicie o servidor de desenvolvimento do front-end:
    ```bash
    bun dev
    ```
    O front-end estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## 🖥️ Como Usar

1.  Certifique-se de que o back-end e o front-end estão rodando em terminais separados.
2.  Abra o navegador e acesse a URL do front-end (ex: `http://localhost:5173`).
3.  Na página, insira uma palavra-chave de busca (ex: "smartwatch") no campo de entrada.
4.  Clique no botão "Buscar Produtos".
5.  Os resultados da raspagem de dados da Amazon serão exibidos na página.

---

Com este `README.md`, qualquer pessoa que for avaliar o seu projeto terá todas as informações que precisa para entendê-lo, configurá-lo e executá-lo sem problemas.

Parabéns por todo o trabalho! Você concluiu com sucesso a tarefa do projeto.