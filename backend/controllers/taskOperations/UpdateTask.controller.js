const IndividualTask = require('../../models/Task.model');

async function UpdateTask(req, res) {
    const taskId = req.params.taskId;

    try {
        // Find the task by ID and update it
        const updatedTask = await IndividualTask.findByIdAndUpdate(
            taskId,
            {
                $set: {
                    username: req.body.username,
                    title: req.body.title,
                    content: req.body.content,
                    deadline: req.body.deadline,
                    completed: req.body.completed
                }
            },
            { new: true, runValidators: true }  // Options: Return the updated document and run validation
        );

        // If the task does not exist
        if (!updatedTask) {
            return res.status(404).send({ message: 'Task not found' });
        }

        // Task was updated successfully
        return res.status(200).send({ message: 'Task Updated Successfully!', task: updatedTask });
    } catch (error) {
        // Error handling
        console.error('Error updating task:', error);
        return res.status(500).send({ message: 'Unable to Update', error: error.message });
    }
}

module.exports = UpdateTask;
