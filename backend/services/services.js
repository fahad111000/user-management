import users from "../data/data.js";

// Search by users
export const getAllUsers = (search) => {
    if (!search) {
        return users;
    }

    return users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

}

// Search by user(id) specific user
export const getUserId = (id) => {
    const user = users.find(user => user.id === id);

    if (!user) {
        return null
    }
    return user
}

export const createUser = (name, email, age) => {

    const newUser = {
        id: users.length + 1,
        name,
        email,
        age,
    };


    users.push(newUser);
    return newUser
}


// Patch user (update user)
export const updateUser = (id, name, email, age) => {
    const user = users.find((user) => user.id === id);

    if (!user) {
        return null;
    }

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (age !== undefined) user.age = age;

    return user
}

export const removeUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return null;
    }
    const deletedUser = users.splice(userIndex, 1);

    return deletedUser[0];

}

