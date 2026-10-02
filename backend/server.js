import express from "express";
import { logger, validateUser } from "./middleware/middleware";

const app = express();
const PORT = 5000;

app.use(express.json());

// Register Logger
app.use(logger);


// temp array
const users = [
    {
        id: 1,
        name: "Fahad",
        email: "fahad@example.com",
        age: 28,
    },
    {
        id: 2,
        name: "Faisal",
        email: "faisal@example.com",
        age: 27,
    },
];

app.get("/users", (req, res) => {
    const { search } = req.query;



    if (!search) {
        return res.json(users);
    }

    const filterdUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase())
    })

    res.json(filterdUsers);
})

app.post('/users', validateUser, (req, res) => {
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

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            messgage: "user not found"
        });

    }

    res.json(user);
})


app.delete("/users/:id", (req, res) => {
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




app.listen(PORT, () => console.log(`Server running on ${PORT}`))