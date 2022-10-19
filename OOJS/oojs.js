// let userOne = {
//  email: 'rye@ninjas.com',
//  name: 'Ryu',
//  login(){
//     console.log(this.email, 'has logged in');
//  },
//  logout(){
//     console.log(this.email, 'has logged out');
//  }
// };

// class User {
//    constructor(email, name){
//     this.email = email;
//     this.name = name;
//     this.score = 0;
//    } 
//    login(){
//     console.log(this.email, 'just logged in');
//     return this;
//    }
//    logout(){
//     console.log(this.email, 'just logged out');
//     return this;
//    }
//    updateScore(){
//     this.score++;
//     console.log(this.email, 'score is now', this.score )
//     return this;
//    }
// }

// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }

// let userOne = new User('ryu@ninjas.com', 'Ryu');
// let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
// let admin = new Admin('shaun@ninjas.com', 'shaun');



// let users = [userOne, userTwo, admin]

// admin.deleteUser(userOne);

// console.log(users);

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}
User.prototype.login = function(){
    this.online =  true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online =  false;
    console.log(this.email, 'has logged out');
}

function Admin(...args){
    User.apply(this, args)
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    })
};

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
let admin = new Admin('shaun@ninjas.com', 'shaun');

let users = [userOne, userTwo, admin];

console.log(admin);