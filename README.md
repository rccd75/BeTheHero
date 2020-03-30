# BeTheHero
Uses React, React Native and NodeJS

# Frontend


# Backend

Biblioteca de validação - Celebrate 
npm install celebrate 

Framework de Testes - JEST
npm install jest

Inicialização do Jest:
npx jest --init

Para executar os testes:
npm test

Para os testes de integração com base de dados deve ser instalado o cross-env. No JSON deve ser criada uma variavel NODE-ENV para distinguir os "ambientes". Esta verificação é realizada no arquivo "connection.js" (database)
npm install cross-env

Para os testes de integração utilizando banco de dados, também será necessário utilizar a biblioteca supertest
npm install supertest


# Mobile - Anotações Diversas

1) Para iniciar o projeto, foi necessário instalar o expo-cli
2) Executar o comando:
    expo init mobile (pasta deste projeto)

3) O teste do App tambem pode ser realizado atraves do Expo Snack (browser), mas com limitações 
4) Para testar no Expo Mobile, executar: yarn start
   garantir que nao esta no modo debug (export EXPO_DEBUG=true)

Premissas: 
1) O explo client deve esar instalado (npm install -g expo-cli)
2) O yarn deve estar instalado (brew install yarn)
3) Instalação do react navigation no projeto
    npm install @react-navigation/native

4) Como e um projeto usando expo, executar:
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

5) Para o aplicativo em questão, também deve ser instalado a tipo de navegação stack:
    npm install @react-navigation/stack

6) Devem ser instalados os seguinte pacotes adicionais:
    expo install expo-constants
    expo install expo-mail-composer
    npm install axios
    npm install intl



Observações:
1) Estudar a documentação contida em "https://reactnavigation.org/docs/getting-started" e "https://reactnavigation.org/docs/hello-react-navigation"
2) No api.js, o IP informado é o IP de acesso ao backend


# Sugestão de Hospedagem
Backend
HEROKU - vide youtube "Deploy Heroku Node" (youtube da RocketSeat)
Digital Ocean - video youtube "Deploy Node.JS" (youtube da RocketSeat)

Frontend
Netlify - 

Outras Dicas:
Gerando apk expo (youtube da RocketSeat)


# Continuando os estudos
- Padrões de Código: ESLInt, Pretier
- Autenticação AWT
- Styled Components



# Anotações Diversas 

  * Métodos HTTP:
  * 
  * GET: Buscar/listar informações do back-end
  * POST: Criar informações no back-end
  * PUT: Alterar informações no back-end
  * DELETE: Excluir informações no back-end
  */


  /** 
   * Tipos de parametros:
   * 
   * Query Params: Parametros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
    */

/** 
    app.get('/users', (request, response) => {

    const params = request.query;
    console.log(params);
*/

/**
 * Bancos de Dados SQL (SQLite, Postgree, Oracle) e noSQL (MongoDB) 
 * 
 * Comando para criar conexão Sqlite: npx knex init
 * 
 */

/** Driver: SELECT * FROM users
 *  Query Builder: table('users').select('*').where()
 */