const Tasks = require('../../models/Tasks.model')

async function ReadTask(req,res) {
    const userId = req.params.id 
    try {
        const fetchedTasks = await Tasks.findOne({userId:userId}).populate('task')
        return res.status(200).send(fetchedTasks.task)
    } catch (error) {
        return res.status(500).send({error:error})
    }
}

module.exports = ReadTask