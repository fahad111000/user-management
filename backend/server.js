import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

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

app.get("/users", (req, res) =>{
    res.json(users);
})


app.listen(PORT, () => console.log(`Server running on ${PORT}`))