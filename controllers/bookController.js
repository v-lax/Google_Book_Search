const db = require("../models")

module.exports = {
    findAll: function(req,res){
        db.googlebooks.find(req.query)
            .then(dbModel=> res.json(dbModel))
            .catch(err=>res.status(422).json(err))
    },
    create:function(req,res){
        console.log(req.body)
        console.log('fskjhdfkjhsf')
        db.googlebooks.create(req.body)
          .then(dbModel=>res.json(dbModel))
          .catch(err => res.status(422).json(err))
    }
}