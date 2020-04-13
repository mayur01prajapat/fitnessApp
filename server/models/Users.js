/* B"H
*/
const Users = [
    { Name: 'Moshe', Password: '123456', Email: 'user1@gmail.com', userId: 0 },
    { Name: 'Bracha', Password: '123456 ', Email: 'user2@gmail.com', userId: 1},
    
];

module.exports = {
    Login(email, password) {
    
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');
    
        return user;
    },
    Get(userId) {
        return Users[userId]
    }
}
