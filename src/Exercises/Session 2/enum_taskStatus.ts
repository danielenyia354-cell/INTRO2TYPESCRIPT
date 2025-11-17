// 
// 1. Create an enum called TaskStatus.
enum TaskStatus {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED"
}


function checkStatus(status: TaskStatus): void {
  
    if (status === TaskStatus.Pending) {
        console.log("Action: This task hasn't started yet. Time to get moving!");
    } else if (status === TaskStatus.InProgress) {
        console.log("Action:  Keep working! This task is currently active.");
    } else if (status === TaskStatus.Completed) {
        console.log("Action:  Task finished! Great job.");
    } else {
       
       
    }
}

// Example Usage:
checkStatus(TaskStatus.InProgress);
checkStatus(TaskStatus.Pending);
checkStatus(TaskStatus.Completed);