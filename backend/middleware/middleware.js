

// Middleware
const logger = (req, res, next) => {
    console.log(req.method, req.url);

    // Go to response
    next();
}

// Custome middleware(validation)

const validateUser = (req, res, next) => {
    const { name, email, age } = req.body;

    if (!name || !email || age === undefined) {
        return res.status(404).json({
            message: "Name, email and age are required",
        })
    }

    if (typeof age !== "number") {
        return res.status(400).json({
            message: "Age must be a number",
        });
    }

    next();
}



export { logger, validateUser }