const router = require("express").Router();
const aboutSchema = require("../models/aboutModels");
const {
  getAbout,
  updateAbout,
  getAboutId,
  addAbout,
  deleteAbout,
} = require("../controlers/aboutCtrl");
const { $where } = require("../models/aboutModels");

//  about

// get about user
router.get("/about", getAbout);


// add about user
router.post("/about", addAbout);


// get specific user id
router.get("/about/:id",getAboutId );


// update specific user
router.put("/about/update/:id", updateAbout);


// delete specific user
router.delete("/about/:id",deleteAbout);

module.exports = router;
