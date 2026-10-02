import express from "express";
import { logger } from "./middleware/middleware.js";
import userRoutes from './routes/userRoutes.js';


const app = express();
const PORT = 5000;

app.use(express.json());

// Register Logger
app.use(logger);



app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`))