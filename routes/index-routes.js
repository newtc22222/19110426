const { getAllMembers } = require('../controllers/index-controllers.js');

const express = require('express');
const router = express.Router();

router.get('/', getAllMembers);

module.exports = router;
