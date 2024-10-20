const IndividualTask = require('../../models/Task.model')
const Tasks = require('../../models/Tasks.model')
async function DeleteAllTasks(req,res) {
    const username = req.params.username
    if(!username) {
        return res.status(400).send({message:'Invalid Username'})
    }
    try {
        const tasksExists = await Tasks.findOne({username})
        const taskExists = await IndividualTask.findOne({username})
        if(taskExists && taskExists) 
        {await Tasks.deleteOne({username})
        await IndividualTask.deleteMany({username})
        res.status(200).send({message:"All Tasks for the particular user deleted."})}
        else res.status(400).send({message:'No such Task Id Exist'})
    } catch (error) {
        res.status(500).send({error:error})
    }
}

module.exports = DeleteAllTasks