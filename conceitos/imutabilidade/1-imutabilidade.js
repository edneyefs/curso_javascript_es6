const user = {
    name: 'Edney',
    lastName: 'Silva'
};

function getUserWithFullName(user){
    return{
        ...user,
        fullName: '${user.name} ${user.lasName}'
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user)
