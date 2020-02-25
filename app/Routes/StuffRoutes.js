const express = require('express');
const router = express.Router();
ctrlStuff = require('../Controller/stuffCtrl');
//create thing
router.post('/',ctrlStuff.createThing);
//get thing by id
router.get('/:id',ctrlStuff.getThingById);
// updating a thing
router.put('/:id',ctrlStuff.updateThing);
//deleting a thing
router.delete('/:id',ctrlStuff.deleteThing);
//get all things
router.get('/', ctrlStuff.getAllThings);

module.exports = router;
