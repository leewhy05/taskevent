const TASKEVENT = require('../model/taskModel')


// post users, C -- for create

const create_task = async(req,res)=>{
    try{
      const user = await TASKEVENT.create(req.body)
      res.status(201).json({msg:'user created successfully'})
    }catch(error){
      console.log(error);
      res.status(500).json({msg:error})
    }
  
  }
  
// get users, R -- for read

const getAll_task = async(req,res)=>{
    try{
      const user = await TASKEVENT.find({});
      if(user.length < 1)return res.json({msg:'No users found'})
      res.status(200).json({user})
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

// update user, U -- for update 

const update_task = async(req,res)=>{
    try{
      const {id} = req.params
      const user = await TASKEVENT.findOneAndUpdate({_id:id}, req.body)
      res.status(200).json({msg:'user updated successfully'})
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
  }

// single user, U -- for update 

const single_task =async (req,res)=>{
    try{
      const {id:userid} = req.params
    const user = await TASKEVENT.findOne({_id:userid})
    res.status(200).json({user})
    }catch(error){
        console.log(error);
    }
  }
  
// delete user, U -- for delete 

const delete_task = async(req,res)=>{
    try{
      const {id} = req.params
      const user = await TASKEVENT.findOneAndDelete({_id:id})
      res.status(200).json({msg:'user deleted successfully'}) 
     }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
  }


module.exports ={
    create_task,
    getAll_task,
    update_task,
    single_task,
    delete_task
}
