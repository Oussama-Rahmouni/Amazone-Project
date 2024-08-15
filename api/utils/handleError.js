const handleError = (err, res ) => {
    const { message, status = 500 } = err;
    res.status(status).json({ message });
};


export default handleError;