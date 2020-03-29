/**
 * Rota
 *  * 
 */


 /**
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

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); /** define quem pode acessar a aplicação */
app.use(express.json());
app.use(routes); /** deve ser abaixo da linha app.use(express.json()); */

app.listen(3333);
