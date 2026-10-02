import users from "../data/data.js";

// getUsers
export const getUsers = (req, res) => {
    const { search } = req.query;

    if (!search) {
        return res.json(users);
    }

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    res.json(filteredUsers);
};

// Postusers
export const postUser = ((req, res) => {
    const { name, email, age } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email,
        age,
    };


    users.push(newUser);
    res.status(201).json(newUser);

})

export const getUser = ((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            messgage: "user not found"
        });

    }

    res.json(user);
})

export const patchUser = (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, email, age } = req.body;

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (age !== undefined) user.age = age;

    res.json(user);
};


export const deleteUser = ((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            messgage: "user not found"
        });

    }

    const deletedUser = users.splice(userIndex, 1);

    res.json({
        message: "User deleted successfully",
        user: deletedUser[0],
    })

});



