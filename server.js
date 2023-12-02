const fs = require("fs")

const prompt = require("prompt-sync")();

let storage = fs.readFileSync("db.json");

let users = JSON.parse(storage);

function readUser(){
    let id = prompt("Enter user ID to Read")
    console.log(users[id]);
}

function deleteUsers(){
    let id = prompt("Enter user ID to delete")
    if(users[id]){
    delete users[id];
    let dataToString = JSON.stringify(users);
    console.log("User deleted successfully");
    fs.writeFileSync("db.json", dataToString);
    } else {
    console.log("Invalid user!!");
    }
}

function createUser(){
    let id = prompt("Enter User ID:");
    let name = prompt("Enter User NAME:");
    let age = prompt("Enter User AGE:");
    let city = prompt("Enter User CITY:");

    users[id] = {
        name,
        age,
        city,
    }
    let dataToString = JSON.stringify(users);
    console.log("user added successfully!!");
    fs.writeFileSync("db.json", dataToString);
}

function updateUsers(){
    let id = prompt("Enter User ID to Update:");
    let name = prompt("Enter User NAME to Update:");
    let age = prompt("Enter User AGE to Update:");
    let city = prompt("Enter User CITY to Update:"); 

    if(users[id]){
        users[id] = {
            name,
            age,
            city,
        }
        let dataToString = JSON.stringify(users);
        fs.writeFileSync("db.json", dataToString); 
        console.log("User uptedated successfully");
    } else {
        console.log("Invalid User!!");
    }
}

function exit(){
    console.log("Program exited successfully!");
}

console.log(" Create User: Press 1 \n Read   User: Press 2 \n Update User: Press 3 \n Delete User: Press 4 \n Exit  While: Press 5");

while(true){
    let selection = prompt("Select an option");
    selection = parseInt(selection);
    if(selection === 1){
        createUser();
    } else if(selection === 2){
        readUser();
    } else if(selection === 3){
        updateUsers();
    } else if(selection === 4){
        deleteUsers();
    } else if(selection === 5){
        exit();
        break;
    }
}