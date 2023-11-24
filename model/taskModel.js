// require mongoose
//from mongoose , we would use a mthod called schema. thos defines d structure of the document that we would store in the collection. model is used to wrap the schema and then send it to d DB
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


// create schema for user model
const TASKSchema = new Schema({
    taskTitle: { 
        type: String, 
        required: [true, 'Task is required']
    },
    description: { 
        type: String, 
        required: [true, 'description is required']
    },
    tag:{
          type: String,
         enum: ['urgent', 'important'],
         required: [true, 'select a tag']
    },
    date:{
        type:Date,
        default:Date.now(),

    }
}, {timestamps:true})

const TASKEVENT = mongoose.model('User', TASKSchema)
module.exports = TASKEVENT