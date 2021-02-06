- Para rodar os testes, deverá ser executado os seguintes comandos na raiz do projeto:
```sh
npm install
npx codeceptjs run --steps
```
- Os testes de API foram feitos utilizando o Postman.
- Para rodar os testes, deverá ser executado os seguintes passos:
```sh
1. Abrir o Postman
2. Importar a collection "API.postman_collection.json" (se encontra na pasta /api_test)
3. Importar as variáveis globais "API.postman_globals.json" (se encontra na pasta /api_test)
4. Acessar o Runner
5. Arrastar a Collection "API" para dentro do Runner
6. Clicar em "Run API"
7. O resultado dos testes irá aparecer dentro do Runner
```
