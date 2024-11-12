class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        cost = Number(cost);
        priority = Number(priority);
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        } else {
            this.tasks.push({ description, cost, priority });
            this.budget -= cost;
            return `The task '${description}' has been successfully added to the renovation plan.`;
        }
    }

    markTaskAsCompleted(description) {
        let descriptionIndex = this.tasks.findIndex(task => task.description === description);
        if (descriptionIndex === -1) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        } else {
            let completedTask = this.tasks[descriptionIndex];
            this.tasks.splice(descriptionIndex, 1);
            this.completedTasks.push(completedTask);
            return `The task '${description}' has been successfully completed.`;
        }
    }

    getPriorityTasksCount(minimalPriority) {
        minimalPriority = Number(minimalPriority);
        if (minimalPriority <= 0) {
            return 'The priority cannot be zero or negative.';
        } else {
            let tasksCount = 0;
            for (let task of this.tasks) {
                if (task.priority >= minimalPriority) {
                    tasksCount++;
                }
            }
            if (tasksCount === 0) {
                return `No tasks found with priority ${minimalPriority} or higher.`;
            } else {
                return `You have ${tasksCount} tasks to prioritize.`;
            }
        }
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error('No tasks have been completed yet!');
        } else {
            let result = [];
            result.push(`Budget left $${this.budget}.`);
            result.push(`You have completed ${this.completedTasks.length} tasks.`);
            result.push('Pending tasks in the renovation plan:');
            for (let task of this.tasks) {
                result.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`);
            }
            return result.join(`\n`);
        }
    }

}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());



