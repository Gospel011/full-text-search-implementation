const User = require('../models/user_model');

const createUser = async (req, res, next) => {
    const {name,
        occupation} = req.body;

    const user = await User.create({
        name,
        occupation
    });

    res.status(201).json({
        status: "success",
        message: 'New user created successfully'
    })
}


const getUsers = async (req, res, next) => {
    const {query} = req.query;

    const users = await User.find({$text: {$search: query}});


    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    })
}


module.exports = {
    createUser,
    getUsers
}