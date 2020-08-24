const Mongo = require('mongodb').MongoClient;
const config = require('./config.js');

module.exports = {
  getAllAdventureInfo(){
    return new Promise((resolve,reject)=>{
      Mongo.connect(config.url, { useUnifiedTopology: true },(err,client)=>{
        if(err){
          reject(new Error(`Connecting: ${err.stack}`))
        }
        const db = client.db(config.db);
        const collection = db.collection('adventures');

        collection.find().toArray((err,results)=>{
          if(err){
            reject(new Error(`Getting Data: ${err.stack}`))
          }
          resolve(results);
          client.close()
        })

      })
    })
  },
  postAdventure(req){
    return new Promise((resolve,reject)=>{
      Mongo.connect(config.url, { useUnifiedTopology: true },(err,client)=>{
        if(err){
          reject(new Error(`Connecting: ${err.stack}`))
        }

        const db = client.db(config.db);
        const collection = db.collection('adventures');
        console.log('Adding Adventure Data...');

        collection.insertOne(req.body,(err)=>{
          if(err){
            reject(new Error(`Inserting Into Database: ${err.stack}`));
          }
          resolve('Successfully added new adventure');
        })

      })
    })
  },
  getAllMySkills(){
    return new Promise((resolve,reject)=>{
      Mongo.connect(config.url, { useUnifiedTopology: true },(err,client)=>{
        if(err){
          reject(new Error(`Connecting: ${err.stack}`))
        }

        const db = client.db(config.db);
        const collection = db.collection('skills');
        console.log('Adding Adventure Data...');

        collection.find().toArray((err,results)=>{
          if(err){
            reject(new Error(`Getting Data: ${err.stack}`))
          }
          resolve(results);
          client.close()
        })

      })
    })

  }
}


