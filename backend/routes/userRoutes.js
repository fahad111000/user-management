import express from "express";
import { validateUser } from "../middleware/middleware.js";


const router = express.Router();


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

router.get("/", (req, res) => {
    const { search } = req.query;



    if (!search) {
        return res.json(users);
    }

    const filterdUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase())
    })

    res.json(filterdUsers);
})

router.post('/', validateUser, (req, res) => {
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

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            messgage: "user not found"
        });

    }

    res.json(user);
})


router.delete("/:id", (req, res) => {
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



export default router;