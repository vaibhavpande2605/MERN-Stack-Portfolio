const router = require("express").Router();
const experienceSchema = require("../models/experienceModels");
const {
  getExperience,
  updateExperience,
  getExperienceId,
  addExperience,
  deleteExperience,
} = require("../controlers/experienceCtrl");
const { $where } = require("../models/experienceModels");

//  experience

// get experience user
router.get("/experience", getExperience);


// add experience user
router.post("/experience", addExperience);


// get specific user id
router.get("/experience/:id",getExperienceId );


// update specific user
router.put("/experience/update/:id", updateExperience);


// delete specific user
router.delete("/experience/:id",deleteExperience);

module.exports = router;
