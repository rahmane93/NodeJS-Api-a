const express = require('express');
const router = express.Router();
ctrlStuff = require('../Controller/stuffCtrl');
const auth = require('../midleware/auth');
//create thing
router.post('/',auth,ctrlStuff.createThing);
//get thing by id
router.get('/:id',auth,ctrlStuff.getThingById);
// updating a thing
router.put('/:id',auth,ctrlStuff.updateThing);
//deleting a thing
router.delete('/:id',auth,ctrlStuff.deleteThing);
//get all things
router.get('/',auth, ctrlStuff.getAllThings);

module.exports = router;
