// const express = require("express")
// const router = express.Router()
// const User = require("../user");


// router.get("/info", async (req, res, next) => {
//     try {
//         const user = await User.find().select(["info.full_name", "info.group", "status.attendance"])
//         if (user) {
//             res.status(200).send(user)
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Something went wrong, please try again")
//     }
// });

// module.exports = router