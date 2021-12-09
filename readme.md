<br />
<p align="center">
  <a href="https://github.com/NickRios/verzelmotors-api">
    <img src="./assets/Logo.png" alt="Logo" height="300">
  </a>

  <h3 align="center">Verzel Motors API</h3>

  <p align="center">
    Docker, Typescript, Typeorm, JWT, swagger, Routing Controllers e PostgreSQL
    <br />
  </p>
</p>

## Table of Contents

- [Requisitos](#requisitos)
- [Como executar](#como-executar)
- [Coleção no postman](#coleção-no-postman)
- [Docker](#docker)
- [Migrações](#migrações)

## Requisitos:

- `nodejs`
- `postgres`
- `docker`

## Como executar:

> Antes de executar, certifique-se de atualizar o arquivo `.env` na raiz do projeto com as variaveis do seu ambiente e atualize o banco de dados com as migrações com o comando: `yarn migration:run`. OBS: Se ao executar o comando e o mesmo apresentar erro, rode o comando: `yarn`.
>
> [(mais informações sobre as migrações aqui)](#migrações)
>
> As migrações iniciais criando um usuario administrador e um usuário genérico.
>
> ```json
> {
>   "email": "admin@email.com",
>   "password": "admin"
> },
> {
>   "email": "user@email.com",
>   "password": "user"
> }
> ```

```sh
git clone git@github.com:NickRios/verzelmotors-api.git

cd node-crud

yarn install

cp .env.example .env

yarn migration:run

yarn dev
```

## Coleção no postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/2232e822bc7e0a7a2ca8)

## Docker

```sh
# subir container
yarn up

# derrubar container
yarn stop

# remover container
yarn down
```

## Migrações

```sh
# criar migração a partir de mudanças nos modelos
yarn migration:generate

# criar nova migração manual
yarn migration:create

# rodar migrações na base
yarn migration:run

# mostrar estado do banco
yarn migration:show

# voltar para a migração anterior
yarn migration:rollback

# resetar o schema (cuidado este comando limpa a base e cria novamente)
yarn migration:drop-create

# rodar os seeds
yarn seed:run

# criar novo arquivo de seeds
yarn seed:create
```
