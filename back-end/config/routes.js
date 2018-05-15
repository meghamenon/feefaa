var express = require('express');
var router = express.Router();
var bantersController = require('../controllers/bantersController');
var bashesController = require('../controllers/bashesController');


//Banter Routes (tweets)  post
router.get('/api/banters', bantersController.index);
router.post('/api/banters', bantersController.create);
router.get('/api/banters/:banter_id', bantersController.show);
router.put('/api/banters/:banter_id', bantersController.update);
router.delete('/api/banters/:banter_id', bantersController.destroy);

//Bash Routes (replies)  comment
router.get('/api/banters/:banter_id/bashes', bashesController.index);
router.post('/api/banters/:banter_id/bashes', bashesController.create);
router.get('/api/banters/:banter_id/bashes/:bashes_id', bashesController.show);
router.put('/api/banters/:banter_id/bashes/:bashes_id', bashesController.update);
router.delete('/api/banters/:banter_id/bashes/:bashes_id', bashesController.destroy);





module.exports = router;
