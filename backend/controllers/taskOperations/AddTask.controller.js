const Tasks = require('../../models/Tasks.model')
const IndividualTask = require('../../models/Task.model')

async function AddTask(req,res) {
    const newTask = new IndividualTask({
        username:req.body.username,
        title:req.body.title,
        content:req.body.content,
        deadline:req.body.deadline,
        completed:req.body.completedStatus
    })
    
        const userExists = await Tasks.findOne({username:req.body.username})
        if(userExists)
        {
            userExists.task.push(newTask)
            await userExists.save()
            await newTask.save()
            console.log('User Already Existed, Added to his task queue')
        }
        else 
        {
            try
            {
                const createdTasks = new Tasks({username:req.body.username,task:[newTask]})
                await createdTasks.save()
                await newTask.save()
                console.log('New User Tasks created and added to his task queue')
            }
            catch(error) {
                res.status(500).send({error:error})
                console.log(error)
            }
        }
        
        return res.status(200).send({message:'Task Added Successfully'})
        
}

module.exports = AddTask