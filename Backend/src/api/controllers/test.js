
exports.getTest = async (req, res, next) => {
    try {

        res.status(200).json({
            message: "Api is working!"
        });

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "404: Error occured" });
    }
}