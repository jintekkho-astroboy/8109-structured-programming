//1. define the state and create some mock data 
let tasks = [
    {
        "id": 1,
        "name":"Wash the car",
        "dateDue":"2026-05-05",
        "urgency":3
    },
    {
        "id": 2,
        "name":"Clean the room",
        "dateDue":"2026-05-31",
        "urgency":1
    },
    {
        "id": 3,
        "name":"Buy cat food",
        "dateDue":"2026-05-25",
        "urgency":5
    }
]

// tasks will be an array of objects
// and each objects must have the following id, name, dataDue and urgency
function displayTasks(tasks) {
    let i = 0;
    // tasks.length will give us how many items are in the array
    while (i<tasks.length) {
        let currentTask = tasks[i];
        console.log(`${currentTask.id}. ${currentTask.name} is due on ${currentTask.dateDue} with urgency ${currentTask.urgency}`);
        // example output
        //"1. Wash the care is due on 2026-05-05 with urgency 3"
        i=i+1;
    }
}

function addTask(tasks, newName, newDateDue, newUrgency) {
    let newTask = {
        id: Math.floor(Math.random() * 10000) + 1, //in actual production code, the Math.random should not be used as numbers will be randomly assigned
        name: newName,
        dateDue: newDateDue,
        urgency: newUrgency
    }
    tasks.push(newTask);
}

function deleteTask(tasks, idToDelete) {
    // goal: given id, find its index number
    let i = 0;
    let wantedIndex = -1; // -1 does not found
       while (i < tasks.length) {
        //console.log(tasks[i]);
        if (tasks[i].id == idToDelete) {
            wantedIndex = i;
            break; // the code immedately finished
        }
        i=i+1;
    }
    // if wantedIndex is not -1, then we have found inded to delete
    if (wantedIndex != -1) {
        tasks.splice(wantedIndex,1);
    }
}

function updateTask(tasks, idToUpdate, newName, newDateDue, newUrgency) {
    let modifiedTask = {
        id: idToUpdate,
        name: newName,
        dateDue: newDateDue,
        urgency: newUrgency
    }

    let indexToUpdate = -1;
    let i = 0;
    while (i < tasks.length) {
        if (tasks[i].id == idToUpdate) {
            indexToUpdate = i;
            break;
        }
        i=i+1;
    }
    if (indexToUpdate != -1) {
        tasks[indexToUpdate] = modifiedTask;
    }
}

addTask(tasks, "Clean the bathroom", "2026-05-04", 5);
updateTask(tasks, 2, "Clean the master bedroom", "2026-05-31", 1);
displayTasks(tasks);
deleteTask(tasks,1);
console.log("After delete task");
displayTasks(tasks);
