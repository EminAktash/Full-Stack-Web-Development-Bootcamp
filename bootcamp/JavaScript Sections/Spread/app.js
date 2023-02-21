const nums = [2,3,5,13,15,1200];
Math.max(nums)
Math.max(...nums)


const cats = ['Blue','Scout','Rocet'];
const dogs = ['Rusty','Wyatt'];

const allPets = [...cats,...dogs];

const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    isFurry: true,
    family:'Caninae'
}

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
};

const newUser = {...dataFromForm, id:2345, isAdmin: false};