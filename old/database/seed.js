//this file will seed a bunch of data into the database. Will be real data just will be easier to bulk insert everything
//will hopefully add a sorting function that will sort based on date and can easily add past adventures
const Mongo = require('mongodb').MongoClient;
const config = require('./config.js');

let seed = (toSeed,toFill) =>{

  Mongo.connect(config.url, { useUnifiedTopology: true },(err,client)=>{
    if(err){
      throw(err);
    }
    console.log('Seeding...')
    const db = client.db(config.db);
    const collection = db.collection(toFill);

    collection.insertMany(toSeed,(err)=>{
      if(err)throw err;

      console.log('Successfully Seeded Database 👾!');
      client.close()
    })
  })

};

const adventureData = [
  {
    "img": "https://i.imgur.com/krT6JGZ.jpg",
    "date": "06/26/2020",
    "desc": "Big Sur,Ca"
  },
  {
    "img":"https://i.imgur.com/5hmcbfI.jpg",
    "date":"06/21/2020",
    "desc":"Agate Beach, Humbolt County California"
  },
  {
    "img":"https://i.imgur.com/WTXWtoe.jpg",
    "date":"06/20/2020",
    "desc":"My dog Kaia near Chandler Walk Through Tree - Leggett,Ca"
  },
  {
    "img":"https://i.imgur.com/fwl02Js.jpg",
    "date":"06/09/2020",
    "desc":"Sunset in my backyard"
  },
  {
    "img":"https://i.imgur.com/TEHEULG.jpg",
    "date":"03/12/20",
    "desc":"Sunset at Ranchos Palos Verdes - Los Angeles,Ca"
  },
  {
    "img":"https://i.imgur.com/DtxarRi.jpg",
    "date":"01/13/2020",
    "desc":"La Jolla sunset - San Diego, Ca"
  },

  {
    "img":"https://i.imgur.com/QU6cWG1.jpg",
    "date":"02/12/2020",
    "desc":"Sunset at Joshua Tree National Park Key's View"
  },
  {
    "img":"https://i.imgur.com/4qP5riK.jpg",
    "date":"12/13/2019",
    "desc":"Sunset at the Death Valley National Park Salt Flats"
  },
  {
    "img":"https://i.imgur.com/bCI0gxF.jpg",
    "date":"11/16/2019",
    "desc":"Sunset with girlfriend - Oceanside, Ca"
  },
  {
    "img":"https://i.imgur.com/B4FznUX.jpg",
    "date":"11/02/2019",
    "desc":"Cabrillo National Monument"
  },
];




const skills = [
{
  "img": "https://i.imgur.com/8120dwc.png",
  "skill": "React",
  "category":"frontend"
},
{
  "img": "https://i.imgur.com/LQ3ZpVR.jpg",
  "skill": "PostgreSQL",
  "category":"datbase"
},
{
  "img": "https://i.imgur.com/zPeeFJT.png",
  "skill": "Node.js",
  "category":"backend"
},
{
  "img": "https://i.imgur.com/7IJqxnB.jpg",
  "skill": "HTML5",
  "category":"frontend"
},
{
  "img":"https://i.imgur.com/VPaWI2v.png",
  "skill":"CSS3",
  "category":"frontend"
},
{
  "img": "https://i.imgur.com/dx3demE.png",
  "skill": "Javascript",
  "category":"language"
},
{
  "img": "https://i.imgur.com/ZgTi6dF.png",
  "skill": "MongoDB",
  "category":"database"
},
{
  "img": "https://i.imgur.com/YvJ4IT5.png",
  "skill": "MySQL",
  "category":"database"
},
{
  "img": "https://i.imgur.com/sT2l5Ye.jpg",
  "skill": "Docker",
  "category":"tool"
},
{
  "img": "https://i.imgur.com/dcBZuuH.jpg",
  "skill": "NGINX",
  "category":"tool"

},
{
  "img": "https://i.imgur.com/gmkSepZ.png",
  "skill": "Jest",
  "category":"tool"
},
{
  "img":"https://i.imgur.com/DK8sIse.png",
  "skill":"AWS",
  "category":"tool"
},
{
  "img":"https://i.imgur.com/FFZCdA1.png",
  "skill":"jQuery",
  "category":"frontend"
},
{
  "img":"https://i.imgur.com/YDlqOos.png",
  "skill":"Git",
  "category":"tool",

},
{
  "img":"https://i.imgur.com/FmntMtw.png",
  "skill":"Python",
  "category":"language"
}];

let adv = 'adventures';
let skill = 'skills'

seed(skills,skill);
