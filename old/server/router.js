const express = require('express');
const controller = require('./controller.js');
const router = express.Router();

router.route('/adv')
.get(controller.getAll)
.post(controller.post)

router.route('/skills')
.get(controller.getSkills)

router.route('/download')
.get(controller.download)

module.exports = router