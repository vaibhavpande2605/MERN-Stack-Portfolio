const experienceSchema=require("../models/experienceModels");


//  experience

// getexperience user
exports.getExperience = async(req,res)=>{
   
    const experience = await experienceSchema.find();

  try {
    res.json(experience);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }
}


// addexperience user
exports.addExperience = async(req,res)=>{
    const { experience } = req.body;

  try {
    const newExperience = new experienceSchema({
      experience,
    });

    await newExperience.save();
    res.json(newExperience);
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
  }

}


// get specific user id
exports.getExperienceId = async(req,res)=>{
    try {
        const experience = await experienceSchema.findById(req.res.id);
        res.json(experience);
      } catch (error) {
        res.status(500).json({ msg: "server problem" });
      }
}


// update specific user
exports.updateExperience = async(req,res)=>{
    

    const {experience}=req.body;
  
  try {
    const newExperience = await experienceSchema.findByIdAndUpdate(req.params.id,{
        experience
    });
  
    let results=await newExperience.save();
    await results;
    res.json({msg:"Item updated"})
  } catch (error) {
    res.status(500).json({ msg: "server problem" });
      
  }
}


// delete specific user
exports.deleteExperience = async(req,res)=>{
    const experience= await experienceSchema.findByIdAndDelete(req.params.id)
    experience;
    res.json({msg:"Item deleted"})
  
}