// const projectSchema=require("../models/projectModels");


// //  project

// // getproject user
// exports.getProject = async(req,res)=>{
   
//     const project = await projectSchema.find();

//   try {
//     res.json(project);
//   } catch (error) {
//     res.status(500).json({ msg: "server problem" });
//   }
// }


// // addproject user
// exports.addProject = async(req,res)=>{
//     const { project } = req.body;

//   try {
//     const newProject = new projectSchema({
//       project,
//     });

//     await newProject.save();
//     res.json(newProject);
//   } catch (error) {
//     res.status(500).json({ msg: "server problem" });
//   }

// }


// // get specific user id
// exports.getProjectId = async(req,res)=>{
//     try {
//         const project = await projectSchema.findById(req.res.id);
//         res.json(project);
//       } catch (error) {
//         res.status(500).json({ msg: "server problem" });
//       }
// }


// // update specific user
// exports.updateProject = async(req,res)=>{
    

//     const {project}=req.body;
  
//   try {
//     const newProject = await projectSchema.findByIdAndUpdate(req.params.id,{
//         project
//     });
  
//     let results=await newProject.save();
//     await results;
//     res.json({msg:"Item updated"})
//   } catch (error) {
//     res.status(500).json({ msg: "server problem" });
      
//   }
// }


// // delete specific user
// exports.deleteProject = async(req,res)=>{
//     const project= await projectSchema.findByIdAndDelete(req.params.id)
//     project;
//     res.json({msg:"Item deleted"})
  
// }