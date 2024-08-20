const handleError = (err, res ) => {
    console.log("haw hna , ",err)
    const { message, status = 500 } = err;
    res.status(status).json({ message });
};


export default handleError;