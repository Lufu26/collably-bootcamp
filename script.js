const userProfile = {
    username: "George",
    age: 23,
    skills:["HTML", "CSS", "JavaScript"],
}

console.log(userProfile.username);
console.log(userProfile.skills[0]);

function displayWelcomeMessage(user){
    console.log(`We are happy to see  you ${user} you are welcome to our website`);
    
}

displayWelcomeMessage(userProfile.username);

function checkLoginStatus(profile) {
    if (userProfile.username) {
        return "User is logged in";
    } else {
        return "User is not logged in";
    }
}

const statusMessage = checkLoginStatus(userProfile);
console.log(statusMessage);
