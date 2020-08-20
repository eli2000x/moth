const mongoose = require("mongoose");
const User = require("./models/user");


const users = [

    {
        username: "eli",
        email: " ",
        password: "12",
        role: "Developer"
    },

    {
        username: "Demo Admin",
        email: " ",
        password: "34",
        role: "Administrator"

    },

    {
        username: "Demo Project Manager",
        email: " ",
        password: "56",
        role: "Project Manager"

    },

    {
        username: "Demo Submitter",
        email: " ",
        password: "78",
        role: "Submitter"


    }, 

    {
        username: "Demo Developer",
        email: " ",
        password: "910",
        role: "Developer"

    }

]


const seedDb = () => {
    User.deleteMany({}, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("removed users");
            users.forEach((account) => {
                const newUser = {username: account.username, email: account.email, role: account.role};
                User.register(newUser, account.password, (err, createdUser) => {
                    if (err) {
                        console.log(err.message);
                    } else {
                        console.log("added a user");
                    }

                })


            })

        }


    })
}

// const seedDb = () => {
//     users.forEach((account) => {
//         User.create(account, (err, createdUser) => {
//             if (err) {
//                 console.log(err.message);
//             } else {
//                 console.log("added a user");
//             }
//         });
//     });
// }





module.exports = seedDb;