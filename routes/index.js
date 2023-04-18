var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.status(200).json({"message":"homepage"})
  res.render('home');
});

// router.post('/upload-video',role.admin,upload.array("video"),contentController.addVideo);
// exports.addVideo = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   let video = [];
//   try {
//     req.files.forEach((file) => {
//       if (file.mimetype.startsWith("video/")) {
//         let obj = {
//           url: file.path,
//           private: 0,
//         };
//         video.push(obj);
//       } else {
//         return false;
//       }
//     });

//     await Content.bulkCreate(video);
//     if (video.length == 0) {
//       return res.status(400).json({ msg: "please upload video only" });
//     } else {
//       return res.status(200).json({ MSG: "video uploaded sucessfully" });
//     }
//   } catch (e) {
//     console.error(e);
//     return res.status(400).json({ msg: "video not found" });
//   }
// };

module.exports = router;
