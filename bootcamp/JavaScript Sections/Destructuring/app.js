const scores = [92929,412342, 12423,53433, 123536, 7658563];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
//now for objects
const user ={
    email: 'harvey@gmail.com',
    password:'harvey111',
    firstName: 'Harvey',
    lastName: 'Milk',
    born:1930,
    died: 1978,
    bio: 'Harvey Barnard Milk was an American politician',
    city: 'San Francisco',
    state:'Califonia'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

const { email, firstName, lastName, city, bio } = user;

const { born:birthYear, died:deatYear} = user;
// it will create new variable birthYear and put the born info there

// const user2 ={
//     email: 'Stacey@gmail.com',
//     firstName: 'Stacey',
//     lastName: 'Gonzalez',
//     born:1987,
//     city: 'Tulsa',
//     state:'Oklahoma'
// }

// const {city , state, died = 'N/AS'} = user2;

// function fullName(user){
//     return `${user.firstName} ${user.lastName}`;
// }

// function fullName(user){
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
// }

function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`
}
