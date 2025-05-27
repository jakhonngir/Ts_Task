"use strict";
// let fullName: string = 'johon'
// let son: number = 124
// let bool: boolean = true
function printUser(user) {
    console.log(`ID: ${user.id}, Name: ${user.name}, Role: ${user.role}`);
}
function getShortInfo(user) {
    return [user.name, user.role];
}
function handleResponse(data) {
    if (typeof data === "object" && data !== null && "id" in data && "name" in data && "role" in data) {
        const user = data;
        console.log("User detected:");
        printUser(user);
    }
    else {
        console.log("Not a valid user object.");
    }
}
const users = [
    { id: 1, name: "Ali", role: "admin" },
    { id: 2, name: "Laylo", role: "user" },
    { id: 3, name: "Botir", role: "guest" },
];
for (const user of users) {
    printUser(user);
    const info = getShortInfo(user);
    console.log(`Short Info: [${info[0]}, ${info[1]}]`);
}
