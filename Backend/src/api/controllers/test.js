const mongoose = require('mongoose')

const usersCollection = mongoose.connection.collection('users');

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

exports.getDbTest = async (req, res, next) => {
    try {
        // Use projection to get only the 'email' field
        const isUserExists = await usersCollection.find({}, { projection: { email: 1 } }).toArray();

        if (!isUserExists || isUserExists.length === 0) {
            return res.status(404).json({ message: "Emails not found." });
        }

        res.status(200).json(isUserExists);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "500: Error occurred" });
    }
};

