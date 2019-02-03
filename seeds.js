var mongoose   = require("mongoose"),
    Campground =  require("./models/campground"),
    Comment    = require("./models/comment");

var data = [
    {name: "Cloud's Rest", 
     image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
     description: "Meh drinking vinegar artisan mlkshk paleo. Art party cronut kinfolk, hashtag 8-bit franzen iceland. Mustache tilde semiotics activated charcoal woke meditation cronut, vaporware seitan hell of cliche iceland. Flannel you probably haven't heard of them post-ironic, brunch cronut tousled viral man braid tofu blog green juice hammock pok pok. Everyday carry yr forage, la croix sartorial photo booth master cleanse +1 health goth. Subway tile ethical hella fixie, gentrify crucifix portland kinfolk letterpress you probably haven't heard of them shabby chic kombucha."    
    },
    {name: "Snakebite Ridge", 
     image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
     description: "Meh drinking vinegar artisan mlkshk paleo. Art party cronut kinfolk, hashtag 8-bit franzen iceland. Mustache tilde semiotics activated charcoal woke meditation cronut, vaporware seitan hell of cliche iceland. Flannel you probably haven't heard of them post-ironic, brunch cronut tousled viral man braid tofu blog green juice hammock pok pok. Everyday carry yr forage, la croix sartorial photo booth master cleanse +1 health goth. Subway tile ethical hella fixie, gentrify crucifix portland kinfolk letterpress you probably haven't heard of them shabby chic kombucha."    
    },
    {name: "Cougar Quarry", 
     image: "https://images.unsplash.com/19/nomad.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=688&q=80",
     description: "Meh drinking vinegar artisan mlkshk paleo. Art party cronut kinfolk, hashtag 8-bit franzen iceland. Mustache tilde semiotics activated charcoal woke meditation cronut, vaporware seitan hell of cliche iceland. Flannel you probably haven't heard of them post-ironic, brunch cronut tousled viral man braid tofu blog green juice hammock pok pok. Everyday carry yr forage, la croix sartorial photo booth master cleanse +1 health goth. Subway tile ethical hella fixie, gentrify crucifix portland kinfolk letterpress you probably haven't heard of them shabby chic kombucha."    
    }
    ]


function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
        console.log("removed campgrounds");
//         //add a few campgrounds AFTER campgrounds removed
//         data.forEach(function(seed){
//             Campground.create(seed, function(err, campground){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log("added camps");
//                     //create a comment
//                     Comment.create(
//                         {
//                             text: "Great but no wifi, cmon yo",
//                             author: "Homer"
//                         }, function(err, comment){
//                             if(err){
//                                 console.log(err);
//                             } else {
//                                 campground.comments.push(comment);
//                                 campground.save();
//                                 console.log("created new comment");
//                             }
//                         })
//                 }
//             })
//         });
    }
});
}

module.exports = seedDB;
