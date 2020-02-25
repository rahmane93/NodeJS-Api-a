const Thing = require('../model/Things');
exports.createThing = (req,res,next) =>{
    delete req.body._id;
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    // const thing = new Thing({
    // ...req.body
    // });
    thing.save()
        .then(() => res.status(201).json({message:'Création effectuée !'}))
        .catch(error =>res.status(400).json({error}));
};
exports.updateThing =(req,res,next) => {
    const thing = new Thing({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    Thing.updateOne({_id: req.params.id}, thing)
        //or  Thing.updateOne({_id:req.params.id}, {...req.body, _id:req.params.id})
        .then(() => res.status(201).json({message:'Modification effectuée !'}))
        .catch(error => res.status(404).json({error}))
};

exports.getThingById = (req,res,next) => {
    Thing.findOne({_id:req.params.id})
        .then(Thing => res.status(200).json(Thing))
        .catch(error => res.status(404).json({error}))
};

exports.deleteThing = (req,res,next) => {
    Thing.deleteOne({_id:req.params.id})
        .then(() => res.status(201).json({message:'Suppression effectuée !'}))
        .catch(error => res.status(404).json({error}))
};

exports.getAllThings = (req, res, next) => {
    Thing.find()
        .then(Things => res.status(200).json(Things))
        .catch(error =>res.status(400).json({error}));
};
