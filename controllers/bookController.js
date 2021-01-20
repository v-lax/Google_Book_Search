const db = require("../models")

module.exports = {
    findAll: function(req,res){
        db.GoogleBooks.find(req.query)
            .then(dbModel=> res.json(dbModel))
            .catch(err=>res.status(422).json(err))
    },
    create:function(req,res){
        console.log('trying to save a book')
        db.GoogleBooks.create(req.body)
          .then(dbModel=>res.json(dbModel))
          .catch(err => res.status(422).json(err))
    }
}