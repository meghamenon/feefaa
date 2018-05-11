var models = require('../models');
var Banter = models.Banter
var Bash = models.Bash

function index(req, res){
  Banter.findById(req.params.banter_id, function(err, banter){
    if(err) res.send(err);
    else{
      var bash = banter.bash;
      res.json(bash);
    }
  });
}
function show(req, res){
  Bash.findById(req.params.bashes_id, function(err, bash){
    if(err) res.send(err);
    else{
      res.json(bash)
    }
  });
}
function create(req, res){
  Bash.create(req.body, function(err, bash){
    if(err) res.send(err);
    else{
      Banter.findById(req.params.banter_id, function(err, banter){
        if(err) res.send(err);
        else{
          banter.bash.push(bash);
          banter.save();
          res.json(banter);
        }
      })
    }
  })
}
function update(req, res){
  Bash.findByIdAndUpdate(req.params.bashes_id,
    {$set:req.body}, function(err, bash){
      if(err) res.send(err);
      else{
        Banter.findById(req.params.banter_id, function(err, banter){
          if(err) res.send(err);
          var bashToUpdate = banter.bash.id(req.params.bashes_id);
          bashToUpdate.content = req.body.content;

          banter.save()
          bash.save()
          res.json(bashToUpdate);
        })
      }
    })
}


function destroy(req, res){
  Bash.findByIdAndRemove(req.params.bashes_id, function(err, bash){
    if(err) res.send(err);
    else{
      Banter.findByIdAndUpdate(req.params.banter_id,
      {$pull: {bash: {_id: req.params.bashes_id}}}, function(err){
        if(err) res.send(err);
        else res.send('Success: Deleted!')
      })
    }
  })
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
