var mongoose=require("mongoose");
var Physicsground=require("./models/physicsground");
var Comment=require("./models/comment");

// add a few physicsgrounds
// add a few comments
// add a few comments

var data =[
  {
    name: "Theory of Relativity",
    image: "https://gaspull-geeksaresexytech.netdna-ssl.com/wp-content/uploads/2011/05/spacetime1.jpg",
    description:"In physics, the theory of relativity is a scientific theory describing the effects due to the invariance of the speed of light. In particular, the meaning of space and time are altered by the motion of the observer. Relativity predicts phenomena such as time dilation and length contraction for observers moving relative to one another at very high (relativistic) speed."
  },
  {
    name: "Higgs Boson",
    image: "http://www.scind.org/content_images/full/1429864820Higgs_Boson.jpg",
    description:"The Higgs boson is, if nothing else, the most expensive particle of all time. It’s a bit of an unfair comparison; discovering the electron, for instance, required little more than a vacuum tube and some genuine genius, while finding the Higgs boson required the creation of experimental energies rarely seen before on planet Earth."
  },
  {
    name: "Photoelectric effect",
    image: "http://www.faqs.org/docs/qp/images/peeffect.gif",
    description:"The photoelectric effect refers to the emission, or ejection, of electrons from the surface of, generally, a metal in response to incident light."
  },
  {
    name: "Gravitational Wave",
    image: "http://www.nasa.gov/sites/default/files/thumbnails/image/ns_gw_art.jpg",
    description:"Gravitational waves are 'ripples' in the fabric of space-time caused by some of the most violent and energetic processes in the Universe."
  }
]

function seedDB(){
  Physicsground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed Physicsground!");
        // add a few physicsgrounds
      data.forEach(function(seed){
        Physicsground.create(seed, function(err, physicsground){
          if (err){
              console.log(err);
          } else {
              console.log("added a physicsground");
                // add a few comments
              Comment.create(
                {
                  text: "This place is great, but I wish there was internet",
                  author: "Homer"
                }, function(err, comment){
                  if(err){
                    console.log(err);
                  } else {
                  //  physicsground.comments.push(comment);
                    physicsground.save();
                    console.log("Created new comment");
                  }
                });
          }
        });
    });
  });

}
module.exports=seedDB;
