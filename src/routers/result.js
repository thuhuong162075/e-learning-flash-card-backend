const express = require('express');
const resultRouter = express.Router();

const asyncMiddleware = require('../middlewares/async');
const resultController = require('../controllers/result');
const { auth } = require('../middlewares/auth');

resultRouter.get(
  '/result/getResultByUserId',
  auth,
  asyncMiddleware(resultController.getResultByUserId),
);
resultRouter.post(
  '/result/createResult',
  auth,
  asyncMiddleware(resultController.createResult),
);
resultRouter.patch(
  '/result/editResult',
  auth,
  asyncMiddleware(resultController.editResult),
);

module.exports = resultRouter;
