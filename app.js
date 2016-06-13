var express = require("express"),
    app = express(),
    bodyParser=require("body-parser"),
    mongoose=require("mongoose"),
    Physicsground=require("./models/physicsground"),
    seedDB=require("./seeds"); 


seedDB();
mongoose.connect("mongodb://localhost/Physics_Camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
}); // Index route
app.get("/physicsgrounds", function(req, res){
  // Get all physicsgrounds from the MongoDB database(DB).
  Physicsground.find({}, function(err, allPhysicsgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("index", {physicsgrounds: allPhysicsgrounds}); 
    }
  });

});
// Here, we are taking data from the form.
// CREATE - add new physicsground to the database
app.post("/physicsgrounds", function(req, res){
  res.send("You hit the post route!");
    // get data from form and add to campground array.
    var name=req.body.name; // taking name from the form.
    var image=req.body.image; // taking the body from the form.
    var desc=req.body.description;
    var newPhysicsground={name:name, image:image, description: desc}; // taking data from the form.
    
    // Create a new campground and save it to the database.
    Physicsground.create(newPhysicsground, function(err, newlyCreated){
      if(err){
        console.log(err);
      } else {
          // Redirecting back to physicsgrounds page.
        res.redirect("/physicsgrounds");
      }
    });
});
// NEW - show form to create a new physicsground. 
app.get("/physicsgrounds/new", function(req, res){
  res.render("new.ejs");
})

// SHOW - shows more info about one campground
app.get("/physicsgrounds/:id", function(req, res){
  // Find the campground with provided ID
  // Render show template with that campground.
 Physicsground.findById(req.params.id, function(err, foundPhysicsground){
    if(err){
        console.log(err);
    } else {
      res.render("show", {physicsground: foundPhysicsground});
    }
 });
 
});
app.listen(3000, function(){
  console.log("PhysicsCamp Server Has Started!")
});
