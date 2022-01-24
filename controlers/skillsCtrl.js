const res = require("express/lib/response");
const skillsSchema = require("../models/skillsModel");

//  skills

// get skills user
exports.getSkills = async (req, res) => {
  const skills = await skillsSchema.find();

  try {
    res.json(skills);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
};

// add skills user
exports.addSkills = async (req, res) => {
  const { skills } = req.body;

  try {
    const newSkills = new skillsSchema({
      skills,
    });

    await newSkills.save();
    res.json(newSkills);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
};

// get specific user id
exports.getSkillsId = async (req, res) => {
  try {
    const skills = await skillsSchema.findById(req.res.id);
    res.json(skills);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
};

// update specific user
exports.updateSkills = async(req,res)=>{
    

    const {skills}=req.body;
  
  try {
    const newSkills = await skillsSchema.findByIdAndUpdate(req.params.id,{
       skills
    });
  
    let results=await newSkills.save();
    await results;
    res.json({msg:"Item updated"})
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
      
  }
}


// delete specific user
exports.deleteSkills = async (req, res) => {
  const skills = await skillsSchema.findByIdAndDelete(req.params.id);
  skills;
  res.json({ msg: "Item deleted" });
};
