const express = require('express');
const tempController = require('../controllers/tempController');
const router = express.Router();

router.get('/api/getLogs/:deviceID', tempController.getLogs);
router.post('/api/logTemp/:deviceID/:temperature', tempController.logTemp);

module.exports = router;