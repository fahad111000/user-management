import users from "../data/data.js";
import {
    getUserId,
    getAllUsers,
    createUser,
    updateUser, 
    removeUser
} from "../services/services.js";

// getUsers
export const getUsers = (req, res) => {
    const { search } = req.query;
    const users = getAllUsers(search);

    res.json(users);
};

// Get users by ID
export const getUser = ((req, res) => {
    const id = Number(req.params.id);
    const user = getUserId(id);

    if (!user) {
        return res.status(404).json({
            messgage: "user not found"
        });

    }
    res.json(user);
})


// Post users
export const postUser = ((req, res) => {
    const { name, email, age } = req.body;
    const newUser = createUser(name, email, age);

    res.status(201).json(newUser);

})


// Patch user (updated User)
export const patchUser = (req, res) => {
    const id = Number(req.params.id);
    const { name, email, age } = req.body;
    const user = updateUser(id, name, email, age)

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }


    res.json(user);
};


// Delete user
export const deleteUser = ((req, res) => {
    const id = Number(req.params.id);
    const deletedUser = removeUser(id)

    if (!deleteUser) {
        return res.status(404).json({
            messgage: "user not found"
        });

    }


    res.json({
        message: "User deleted successfully",
        user: deletedUser,
    })

});



