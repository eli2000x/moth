const User = require("../models/user")
const Ticket = require("../models/ticket")
const Comment = require("../models/comment")
const Project = require("../models/project")


function addComments() {

    Comment.find({ticket: "Website"}, function(err, foundComments) {
        Ticket.findOne({title: "Website unresponsive"}, function(err, ticket) {
            foundComments.forEach(function(comment) {
                ticket.comments.push(comment)

            })
            ticket.save()
            
            
        })
        
    })

    Comment.find({ticket: "Blip"}, function(err, foundComments) {
        Ticket.findOne({title: "Blip on homepage"}, function(err, ticket) {
            foundComments.forEach(function(comment) {
                ticket.comments.push(comment)

            })
            ticket.save()
            
            
        })

    })

    Comment.find({ticket: "Auth"}, function(err, foundComments) {
        
        Ticket.findOne({title: "Auth properties"}, function(err, ticket) {
            foundComments.forEach(function(comment) {
                ticket.comments.push(comment)
            })
            ticket.save()
        })
    })

}

module.exports = addComments
