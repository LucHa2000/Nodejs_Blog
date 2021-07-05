var express = require('express');
var router =express.Router();

const newsController = require('../app/controllers/NewsController')

router.use('/:slug',newsController.show);
router.use('/',newsController.index);//'/' tuyen duong dau tien

module.exports =router;
