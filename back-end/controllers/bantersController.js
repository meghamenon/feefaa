var models = require('../models');
var Banter = models.Banter;
// var Bash = models.Bash

function index(req, res){
  Banter.find({}, function(err, banters){
    if(err) res.send(err);
    else res.json(banters)
  });
}

function create(req, res){
  Banter.create(req.body, function(err, banter){
    if(err) res.send(err);
    else res.json(banter)
  });

}

function show(req, res){
  Banter.findById(req.params.banter_id, function(err, banters){
    if(err) res.send(err);
    else res.json(banters)
  });
}

function update(req, res){
  Banter.findByIdAndUpdate(req.params.banter_id, {$set: req.body},
     function(err, banters){
      if(err) res.send(err);
    else res.json(banters)
  });
}

function destroy(req, res){
  Banter.findByIdAndRemove(req.params.banter_id, function(err, banters){
    if(err) res.send(err);
    else res.json("Success: Deleted!")
  });
}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
