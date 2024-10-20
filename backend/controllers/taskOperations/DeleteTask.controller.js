const IndividualTask = require('../../models/Task.model')
async function DeleteTask(req,res) {
    const taskId = req.params.taskId
    if(!taskId) {
        return res.status(400).send({message:'Invalid Task Id'})
    }
    try {
        await IndividualTask.findOne({_id:taskId})
        await IndividualTask.deleteOne({_id:taskId})
        res.status(200).send({message:'Task Deleted Successfully'})
    } catch (error) {
        res.status(500).send({error:error})
    }
}

module.exports = DeleteTask