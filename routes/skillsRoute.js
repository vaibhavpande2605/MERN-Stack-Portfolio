const router = require("express").Router();
const skillsSchema = require("../models/skillsModel")
const {
  getSkills,
  updateSkills,
  getSkillsId,
  addSkills,
  deleteSkills,
} = require("../controlers/skillsCtrl");
const { $where } = require("../models/skillsModel");

//  education

// get education user
router.get("/skills", getSkills);


// add education user
router.post("/skills", addSkills);


// get education specific user id
router.get("/skills/:id",getSkillsId );



// update education specific user
router.put("/skills/update/:id", updateSkills);


// delete education specific user
router.delete("/skills/:id",deleteSkills);

module.exports = router;
