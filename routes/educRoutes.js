const router = require("express").Router();
const educationSchema = require("../models/educationModels")
const {
  getEducation,
  updateEducation,
  getEducationId,
  addEducation,
  deleteEducation,
} = require("../controlers/educationCtrl");
const { $where } = require("../models/educationModels");

//  education

// get education user
router.get("/education", getEducation);


// add education user
router.post("/education", addEducation);


// get education specific user id
router.get("/education/:id",getEducationId );
router.get("/education/:id",getEducationId );


// update education specific user
router.put("/education/update/:id", updateEducation);


// delete education specific user
router.delete("/education/:id",deleteEducation);

module.exports = router;
