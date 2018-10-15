'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-controller');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.post('/', controller.post);
router.put('/admin/:id', controller.put);
router.delete('/admin/:id', controller.delete);

module.exports = router;