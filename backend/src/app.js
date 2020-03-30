const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors()); /** define quem pode acessar a aplicação */
app.use(express.json());
app.use(routes); /** deve ser abaixo da linha app.use(express.json()); */
app.use(errors());

module.exports = app;