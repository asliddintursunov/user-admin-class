//=======================
console.log('\n');
//=======================


// Class User
class User{
    constructor(id, email, name, address){
        this.userID = id;
        this.userEmail = email;
        this.userName = name;
        this.userAddress = address;
        this.score = 0;
    }
    login(){
        console.log(`${this.userEmail} has just logged in under ${this.userID} ID`);
        return this;
    }
    logout(){
        console.log(`${this.userEmail} has just logged out under ${this.userID} ID`);
        return this;
    }
    updateScore(){
        this.score++;
        console.log(`${this.userEmail} has ${this.score} score`);
        return this;
    }
}

// Class Admin
class Admin extends User{
    /*
    removeUser(user){
        usersList = usersList.filter(u => {
            if (user.userID != u.userID) {
                return user.userID;
            } else {
                return;
            }
        });
    }
    */
}

// Admin Data Input
let adminID = prompt(`Admin ID: `);
let adminEmail = prompt(`Admin Email: `);
let adminName = prompt(`Admin Name: `);
let adminAddress = prompt(`Admin Address: `);
// Admin User
let admin = new Admin(adminID, adminEmail, adminName, adminAddress);
// Admin Data
console.log(`Admin ID: ${adminID}`);
console.log(`Admin Email: ${adminEmail}`);
console.log(`Admin Name: ${adminName}`);
console.log(`Admin Address: ${adminAddress}`);
// Users Number
let userNumbers = Number(prompt('How many user do you want?'));

if(userNumbers <= 0){
    console.log(`===================================`);
    console.log(`User ID: ${undefined}`);
    console.log(`User Email: ${undefined}`);
    console.log(`User Name: ${undefined}`);
    console.log(`User Address: ${undefined}`);
} else{
    let usersList = [];
    for(let i = 1; i <= userNumbers; i++){
        console.log(`===================================`);
        // User Data
        let userID = prompt(`User-${i} ID: `);
        let userEmail = prompt(`User-${i} Email: `);
        let userName = prompt(`User-${i} Name: `);
        let userAddress = prompt(`User-${i} Address: `);
        
        // New User
        this["user-"+i] = new User(userID, userEmail, userName, userAddress);
        // User data in console
        console.log(`User-${i} ID: `, this["user-"+i].userID);
        console.log(`User-${i} Email: `, this["user-"+i].userEmail);
        console.log(`User-${i} Name: `, this["user-"+i].userName);
        console.log(`User-${i} Address: `, this["user-"+i].userAddress);

        usersList.push(this["user-"+i]);
        
    }
    usersList.unshift(admin);
    /*
    let number = Number(prompt('Input User that you want to remove. EX: 2'));
    console.log(number);
    admin.removeUser(`${"user-"+number}`);
    */
    console.log(usersList);
}


//=======================
console.log('\n');
//=======================