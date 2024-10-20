const IndividualTask = require('../../models/Task.model')

async function ReadTaskById(req,res){
    const taskId = req.params.taskId
    if(!taskId) {
        req.status(400).send({message:'Invalid Task Id'})
    }
    try {
        const resp = await IndividualTask.findOne({_id:taskId})
        
        return res.status(200).send(resp)
    } catch (error) {
        res.status(500).send({message:'No such Task Exist'})
    }
}

module.exports = ReadTaskById