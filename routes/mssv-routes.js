const mssvController = require('../controllers/mssv-controllers')

const express = require('express');
const mssvRouter = express.Router();

mssvRouter.post('/:id', mssvController.addNewMember);
mssvRouter.get('/:id', mssvController.getMember);

module.exports = mssvRouter;