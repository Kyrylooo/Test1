const express = require("express")
const router = express.Router()
const User = require("../user");


router.get("/info", async (req, res, next) => {
    try {
        const user = await User.find().select(["info.full_name", "info.group", "status.attendance"])
        if (user) {
            res.status(200).send(user)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong, please try again")
    }
});
router.post("/info", async (req, res, next) => {
    try {
        const user = await User. create({
            "info": {
                "number": "1001231234",
                "telegram_id": 818128381,
            }
        })
        if (user) {
            res. status (200).json (user)
        }
    } catch (error) {
        console.log (error);
        res.status (500).send("Something went wrong")
    }
})

module.exports = router
