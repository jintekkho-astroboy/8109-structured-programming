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
        id: Math.floor(Math.random() * 10000) + 1,
        name: newName,
        dateDue: newDateDue,
        urgency: newUrgency
    }
    tasks.push(newTask);
}

addTask(tasks, "Clean the bathroom", "2026-05-04", 5);
displayTasks(tasks);