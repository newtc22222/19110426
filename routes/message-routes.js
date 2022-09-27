const messageController = require('../controllers/message-controllers');

const express = require('express');
const messageRouter = express.Router();

messageRouter.get('', messageController.getAllMembers);
messageRouter.get('/', messageController.getAllMembers);
messageRouter.get('/:id', messageController.getMember);

module.exports = messageRouter;