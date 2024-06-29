
class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

const handleError = (err, req, res, next) => {
    const { message, status = 500 } = err;
    res.status(status).json({ message });
};


export default handleError;