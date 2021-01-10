const express = require('express');
const MetasController = require('../controllers/MetasController');
const router = express.Router();

router.get('/metas', MetasController.Index);
router.post('/metas', MetasController.Create);

module.exports = router;
