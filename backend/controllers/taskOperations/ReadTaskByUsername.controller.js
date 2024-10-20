const Tasks = require('../../models/Tasks.model')

async function ReadTask(req,res) {
    const username = req.params.username

    try {
        const fetchedTasks = await Tasks.findOne({username:username}).populate('task')
        return res.status(200).send(fetchedTasks.task)
    } catch (error) {
        return res.status(500).send({error:error})
    }
}

module.exports = ReadTask