const express = require("express");
const router = express.Router();
let { upload } = require("../middleware/uploadFile");

router.post("/", upload.single("file"), function (req, res) {
  const filePathURL = 'http://localhost:4000/assets/'+req.file.originalname
  res.json({ filePathURL:filePathURL });
});

module.exports = router;