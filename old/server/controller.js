const helpers = require('../database/helpers.js');

const controller = {
  getAll: (req,res)=>{
    helpers.getAllAdventureInfo()
    .then((result)=>{
      res.status(200).send(result);
    })
    .catch((err)=>{
      res.status(404).send(err);
      console.log(err);
    })
  },
  post: (req,res)=>{
    helpers.postAdventure(req)
    .then(()=>{
      res.status(201).send('Successfully Added!');
    })
    .catch((err)=>{
      console.log(err);
      res.status(404).send(err);
    })
  },
  getSkills: (req,res)=>{
    helpers.getAllMySkills()
    .then((skills)=>{
      res.status(202).send(skills);
    })
    .catch((err)=>{
      console.log(err);
      res.status(404);
    })

  },
  download: (req,res) => {
    res.download(__dirname +'/benko.pdf',(err)=>{
      if(err)throw err;

      console.log('Downloaded!');
    });
  }


};

module.exports = controller;
