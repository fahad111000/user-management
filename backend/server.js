import express from "express";
import { logger } from "./middleware/middleware.js";
import userRoutes from './routes/userRoutes.js';
import cors from "cors";

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

// Register Logger
app.use(logger);



app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`))